/**
 * UMA Learning & Services — Admission Sheet Backend
 * ---------------------------------------------------------------------------
 * HOW TO USE:
 * 1. Open your Google Sheet ("admission beckend").
 * 2. Put this exact header row in row 1 of the "Sheet1" tab:
 *      A: Mobile | B: Name | C: Email | D: Password | E: Course | F: Progress | G: Status | H: CreatedAt
 * 3. Go to Extensions -> Apps Script. Delete any starter code and paste this
 *    whole file in, then click the save (disk) icon.
 * 4. Click Deploy -> New deployment -> gear icon -> "Web app".
 *      - Execute as: Me
 *      - Who has access: Anyone
 *    Click Deploy, approve the permissions Google asks for, then copy the
 *    "Web app URL" (it ends in /exec).
 * 5. Paste that URL into SHEET_API_URL near the top of script.js on the site.
 *
 * That's it — new admissions from the website will now appear as new rows in
 * this Sheet, and Student Login / the Staff Panel will read and update it.
 */

const SHEET_NAME = 'Sheet1'; // change this if your tab is named differently

function doPost(e) {
  const body = JSON.parse(e.postData.contents);
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);

  try {
    switch (body.action) {
      case 'register': return handleRegister(sheet, body);
      case 'login':    return handleLogin(sheet, body);
      case 'list':     return handleList(sheet);
      case 'update':   return handleUpdate(sheet, body);
      default:         return jsonResponse({ success: false, error: 'Unknown action' });
    }
  } catch (err) {
    return jsonResponse({ success: false, error: String(err) });
  }
}

// Returns all data rows (excludes the header row).
function getRows(sheet) {
  const data = sheet.getDataRange().getValues();
  return data.slice(1);
}

function handleRegister(sheet, body) {
  const rows = getRows(sheet);
  const alreadyExists = rows.some(r => String(r[0]) === String(body.mobile));
  if (alreadyExists) {
    return jsonResponse({ success: false, error: 'This mobile number is already registered. Try logging in instead.' });
  }
  sheet.appendRow([
    body.mobile,
    body.name,
    body.email || '',
    body.password,
    body.course,
    0,            // Progress starts at 0%
    'progress',   // Status starts as "in progress"
    new Date().toISOString()
  ]);
  return jsonResponse({ success: true });
}

function handleLogin(sheet, body) {
  const rows = getRows(sheet);
  const idVal = String(body.identifier).toLowerCase();
  const matches = rows.filter(r =>
    (String(r[0]).toLowerCase() === idVal || String(r[2]).toLowerCase() === idVal) &&
    String(r[3]) === body.password
  );
  if (matches.length === 0) {
    return jsonResponse({ success: false });
  }
  const student = {
    name: matches[0][1],
    email: matches[0][2],
    courses: matches.map(r => ({ name: r[4], progress: Number(r[5]) || 0, status: r[6] }))
  };
  return jsonResponse({ success: true, student });
}

// Groups every row by mobile number so one student with multiple course rows
// shows up as a single student with multiple courses in the Staff Panel.
function handleList(sheet) {
  const rows = getRows(sheet);
  const grouped = {};
  rows.forEach((r, i) => {
    const mobile = String(r[0]);
    if (!grouped[mobile]) {
      grouped[mobile] = { mobile: mobile, name: r[1], email: r[2], courses: [] };
    }
    grouped[mobile].courses.push({
      rowIndex: i + 2, // +2 because row 1 is the header and arrays are 0-indexed
      name: r[4],
      progress: Number(r[5]) || 0,
      status: r[6]
    });
  });
  return jsonResponse({ success: true, students: Object.values(grouped) });
}

// Updates just the Progress (col F) and Status (col G) for one course row.
function handleUpdate(sheet, body) {
  sheet.getRange(body.rowIndex, 6).setValue(body.progress);
  sheet.getRange(body.rowIndex, 7).setValue(body.status);
  return jsonResponse({ success: true });
}

function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
