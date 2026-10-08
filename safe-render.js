/* safe-render.js - loads right after script.js.
   Staff Panel lists show text that visitors typed into public forms (enquiry and admission).
   This cleans any HTML written into the Staff Panel / invoice screens / student course list,
   so a malicious name or message can never run code in a staff member's browser.
   The site's own buttons (save, add payment, view certificate) keep working. */
(function () {
    'use strict';
    var desc = Object.getOwnPropertyDescriptor(Element.prototype, 'innerHTML');
    if (!desc || !desc.set) return;

    var BAD_TAGS = 'script,iframe,frame,frameset,object,embed,applet,link,meta,base,style,foreignobject,animate,set,animatetransform,form';
    var FN = 'addInvoicePayment|addStudentPayment|downloadInvoicePDF|saveAdminCourseRow|saveAdminEnquiryStatus|viewCertificate';
    var ARG = "(?:\\d+|'(?:[^'\\\\]|\\\\.)*')";
    var HANDLER = new RegExp('^\\s*(?:' + FN + ')\\(\\s*(?:' + ARG + '(?:\\s*,\\s*' + ARG + ')*)?\\s*\\)\\s*;?\\s*$');
    var URL_ATTRS = /^(href|src|xlink:href|action|formaction|data|poster|srcset)$/i;
    var SAFE_URL = /^\s*(https?:|mailto:|tel:|#|\/|\.\/|\.\.\/|images\/)/i;

    function protectedTarget(el) {
        return el.id === 'slCoursesList' || !!(el.closest && el.closest('#adminOverlay, #invoiceOverlay'));
    }

    function clean(html) {
        var t = document.createElement('template'); // inert: nothing loads or runs inside it
        t.innerHTML = html;
        var bad = t.content.querySelectorAll(BAD_TAGS);
        for (var i = 0; i < bad.length; i++) bad[i].remove();
        var all = t.content.querySelectorAll('*');
        for (var j = 0; j < all.length; j++) {
            var el = all[j], attrs = Array.prototype.slice.call(el.attributes);
            for (var k = 0; k < attrs.length; k++) {
                var n = attrs[k].name, v = attrs[k].value;
                if (/^on/i.test(n)) { if (!HANDLER.test(v)) el.removeAttribute(n); }
                else if (URL_ATTRS.test(n)) { if (!SAFE_URL.test(v) && v.trim() !== '') el.removeAttribute(n); }
                else if (n.toLowerCase() === 'style' && /expression\s*\(|url\s*\(|@import|behavior\s*:/i.test(v)) el.removeAttribute(n);
            }
        }
        return t.innerHTML;
    }

    Object.defineProperty(Element.prototype, 'innerHTML', {
        configurable: true, enumerable: desc.enumerable, get: desc.get,
        set: function (v) {
            if (typeof v === 'string' && v && protectedTarget(this)) v = clean(v);
            desc.set.call(this, v);
        }
    });
    window.__umaCleanHtml = clean; // for testing
})();
