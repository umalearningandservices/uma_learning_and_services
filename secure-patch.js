/*
 * secure-patch.js  -  loads AFTER script.js (build.js adds the <script> tag).
 * Replaces the old "password inside script.js" staff login with a server-checked
 * login (see secure-gate.gs). Needs no other change to script.js.
 */
(function () {
  'use strict';
  var adminToken = null;
  var origCall = window.callSheetBackend;
  if (typeof origCall !== 'function') return;

  // Attach the staff token to every backend call once logged in.
  window.callSheetBackend = async function (payload) {
    if (adminToken && payload && !payload.token) payload = Object.assign({ token: adminToken }, payload);
    var res = await origCall(payload);
    if (res && res.error === 'Unauthorized' && adminToken) {
      adminToken = null;
      isAdminAuthenticated = false; // session expired: ask for login again
      if (typeof showToast === 'function') showToast('Staff session expired. Please log in again.');
    }
    return res;
  };

  window.adminLoginSubmit = async function () {
    var user = document.getElementById('adminUsername').value.trim();
    var pw = document.getElementById('adminPassword').value;
    var errorEl = document.getElementById('adminError');
    try {
      var r = await origCall({ action: 'adminLogin', username: user, password: pw });
      if (!r || !r.success || !r.token) {
        errorEl.textContent = (r && r.error) || 'Incorrect username or password.';
        errorEl.classList.add('show');
        return;
      }
      adminToken = r.token;
      errorEl.classList.remove('show');
      isAdminAuthenticated = true;
      document.getElementById('adminPassword').value = '';
      document.getElementById('adminLoginForm').style.display = 'none';
      document.getElementById('adminDashboard').classList.add('show');
      switchAdminTab('students');
      loadAdminEnquiries();
    } catch (e) {
      errorEl.textContent = 'Could not reach the server. Please try again.';
      errorEl.classList.add('show');
    }
  };

  var origLogout = window.adminLogout;
  window.adminLogout = function () {
    adminToken = null;
    if (typeof origLogout === 'function') origLogout();
  };

  // Bank details are no longer in the page source: fetched only for a logged-in staff member.
  var origInvoice = window.downloadInvoicePDF;
  window.downloadInvoicePDF = async function (rowIndex) {
    if (typeof origInvoice === 'function') origInvoice(rowIndex);
    var box = document.getElementById('invBankNote');
    if (!box) return;
    box.textContent = '';
    try {
      var r = await window.callSheetBackend({ action: 'getBankDetails' });
      if (!r || !r.success || !r.lines || !r.lines.length) return;
      var head = document.createElement('p');
      var strong = document.createElement('strong');
      strong.textContent = 'Payment Details:';
      head.appendChild(strong);
      box.appendChild(head);
      r.lines.forEach(function (line) {
        var p = document.createElement('p');
        p.textContent = line;
        box.appendChild(p);
      });
    } catch (e) { /* invoice still prints without bank lines */ }
  };
})();
