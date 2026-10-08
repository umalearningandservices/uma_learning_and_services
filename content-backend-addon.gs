/* content-backend-addon.gs — paste into your existing Code.gs (Apps Script).

   SETUP (2 minutes)
   1. Project Settings > Script properties > Add property:
        ADMIN_KEY = (a long random password only you and the client know)
   2. In your existing doPost(e), right after you parse the request into `data`, add:

        if (/Content$/.test(data.action)) {
          return ContentService.createTextOutput(JSON.stringify(handleContentAction(data)))
                 .setMimeType(ContentService.MimeType.JSON);
        }

   3. Deploy > Manage deployments > edit > New version > Deploy.
   The "SiteContent" sheet tab is created automatically on first use. */

var CONTENT_HEADERS = ['id', 'type', 'title', 'category', 'image', 'body', 'author', 'date'];

function contentSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName('SiteContent');
  if (!sh) { sh = ss.insertSheet('SiteContent'); sh.appendRow(CONTENT_HEADERS); }
  return sh;
}

function keyOk_(k) {
  var real = PropertiesService.getScriptProperties().getProperty('ADMIN_KEY');
  return !!real && typeof k === 'string' && k.length === real.length && k === real;
}

function handleContentAction(d) {
  var sh = contentSheet_();

  if (d.action === 'listContent') { // public, read-only
    var rows = sh.getDataRange().getValues().slice(1).map(function (r) {
      var o = {}; CONTENT_HEADERS.forEach(function (h, i) { o[h] = r[i]; });
      o.date = o.date instanceof Date ? Utilities.formatDate(o.date, 'Asia/Kolkata', 'yyyy-MM-dd') : String(o.date);
      return o;
    }).reverse(); // newest first
    return { success: true, items: rows };
  }

  if (!keyOk_(d.key)) return { success: false, error: 'Invalid admin key.' };

  var lock = LockService.getScriptLock(); lock.waitLock(10000);
  try {
    if (d.action === 'addContent') {
      var it = d.item || {};
      if (['blog', 'gallery', 'review'].indexOf(it.type) < 0 || !it.title) return { success: false, error: 'Invalid item.' };
      var img = String(it.image || '');
      if (img && !/^https:\/\//.test(img)) return { success: false, error: 'Image must be https.' };
      sh.appendRow([
        'C' + Date.now(), it.type, String(it.title).slice(0, 120), String(it.category || '').slice(0, 40),
        img.slice(0, 500), String(it.body || '').slice(0, 6000), String(it.author || 'UMA Team').slice(0, 60),
        Utilities.formatDate(new Date(), 'Asia/Kolkata', 'yyyy-MM-dd')
      ]);
      return { success: true };
    }
    if (d.action === 'deleteContent') {
      var ids = sh.getRange(1, 1, sh.getLastRow(), 1).getValues();
      for (var i = ids.length - 1; i >= 1; i--) {
        if (String(ids[i][0]) === String(d.id)) { sh.deleteRow(i + 1); return { success: true }; }
      }
      return { success: false, error: 'Item not found.' };
    }
    return { success: false, error: 'Unknown action.' };
  } finally { lock.releaseLock(); }
}
