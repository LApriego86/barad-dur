/**
 * Barad-dur SEO Meta Tags Sync
 *
 * Easy path:
 * 1. Export JSON from the prototype.
 * 2. Paste it into syncSeoMetaTagsFromJson(jsonText) or POST it to doPost().
 * 3. The script updates rows by Post ID and writes the SEO columns back.
 *
 * Spreadsheet setup:
 * - Bind this script to the SEO Tags Google Sheet, or set SHEET_ID below.
 * - Keep a header row with the columns used below.
 */

const SHEET_NAME = 'SEO Tags';
const SHEET_ID = '';

const HEADER_ALIASES = {
  postId: ['Post ID', 'PostId', 'ID'],
  postTitle: ['Post Title', 'Title'],
  seoTitle: ['SEO Title'],
  seoDescription: ['SEO Description', 'Meta Description'],
  canonical: ['Canonical'],
  robotsIndex: ['Robots Index', 'Index'],
  robotsFollow: ['Robots Follow', 'Follow'],
  excludeFromSitemaps: ['Exclude from sitemaps', 'Exclude from sitemap', 'Sitemap'],
  permalink: ['Permalink', 'URL'],
  statusCode: ['Status Code', 'Status code'],
};

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('Barad-dur SEO Sync')
    .addItem('Import JSON desde pegado', 'promptImportJson')
    .addItem('Ver columnas detectadas', 'logDetectedHeaders')
    .addToUi();
}

function promptImportJson() {
  const ui = SpreadsheetApp.getUi();
  const response = ui.prompt(
    'Importar JSON',
    'Pega aquí el JSON exportado desde Barad-dûr (array de objetos).',
    ui.ButtonSet.OK_CANCEL
  );
  if (response.getSelectedButton() !== ui.Button.OK) return;
  const result = syncSeoMetaTagsFromJson(response.getResponseText());
  ui.alert(`Actualizadas ${result.updated} filas de ${result.total} recibidas.`);
}

function doPost(e) {
  try {
    const payload = e && e.postData && e.postData.contents ? e.postData.contents : '[]';
    const result = syncSeoMetaTagsFromJson(payload);
    return ContentService
      .createTextOutput(JSON.stringify({ ok: true, result }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(error) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function syncSeoMetaTagsFromJson(jsonText) {
  const rows = JSON.parse(jsonText);
  if (!Array.isArray(rows)) {
    throw new Error('JSON inválido: se esperaba un array de filas.');
  }

  const sheet = getSheet_();
  const range = sheet.getDataRange();
  const values = range.getValues();
  if (values.length < 2) {
    throw new Error('La hoja no tiene datos suficientes.');
  }

  const headerMap = buildHeaderMap_(values[0]);
  const postIdCol = requireColumn_(headerMap, HEADER_ALIASES.postId);
  const updates = buildRowIndex_(values, postIdCol);

  let updated = 0;
  rows.forEach(item => {
    const postId = String(item['Post ID'] || '').trim();
    if (!postId) return;
    const rowIndex = updates[postId];
    if (!rowIndex) return;

    setIfColumnExists_(values[rowIndex], headerMap, HEADER_ALIASES.postTitle, item['Post Title']);
    setIfColumnExists_(values[rowIndex], headerMap, HEADER_ALIASES.seoTitle, item['SEO Title']);
    setIfColumnExists_(values[rowIndex], headerMap, HEADER_ALIASES.seoDescription, item['SEO Description']);
    setIfColumnExists_(values[rowIndex], headerMap, HEADER_ALIASES.canonical, item['Canonical']);
    setIfColumnExists_(values[rowIndex], headerMap, HEADER_ALIASES.robotsIndex, item['Robots Index']);
    setIfColumnExists_(values[rowIndex], headerMap, HEADER_ALIASES.robotsFollow, item['Robots Follow']);
    setIfColumnExists_(values[rowIndex], headerMap, HEADER_ALIASES.excludeFromSitemaps, item['Exclude from sitemaps']);
    setIfColumnExists_(values[rowIndex], headerMap, HEADER_ALIASES.permalink, item['Permalink']);
    setIfColumnExists_(values[rowIndex], headerMap, HEADER_ALIASES.statusCode, item['Status Code']);
    updated++;
  });

  range.setValues(values);
  return { total: rows.length, updated };
}

function logDetectedHeaders() {
  const sheet = getSheet_();
  const headers = sheet.getDataRange().getValues()[0] || [];
  Logger.log(headers.join(' | '));
  SpreadsheetApp.getUi().alert('Cabeceras registradas en el log.');
}

function getSheet_() {
  const ss = SHEET_ID ? SpreadsheetApp.openById(SHEET_ID) : SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAME) || ss.getActiveSheet();
  if (!sheet) {
    throw new Error('No se encontró la hoja de SEO Tags.');
  }
  return sheet;
}

function buildHeaderMap_(headers) {
  const map = {};
  headers.forEach((header, index) => {
    map[String(header).trim().toLowerCase()] = index;
  });
  return map;
}

function requireColumn_(headerMap, aliases) {
  for (const alias of aliases) {
    const index = headerMap[String(alias).trim().toLowerCase()];
    if (index !== undefined) return index;
  }
  throw new Error(`No se encontró ninguna de estas columnas: ${aliases.join(', ')}`);
}

function buildRowIndex_(values, postIdCol) {
  const index = {};
  for (let row = 1; row < values.length; row++) {
    const postId = String(values[row][postIdCol] || '').trim();
    if (postId && index[postId] === undefined) {
      index[postId] = row;
    }
  }
  return index;
}

function setIfColumnExists_(rowValues, headerMap, aliases, value) {
  const column = firstExistingColumn_(headerMap, aliases);
  if (column === undefined) return;
  rowValues[column] = value;
}

function firstExistingColumn_(headerMap, aliases) {
  for (const alias of aliases) {
    const index = headerMap[String(alias).trim().toLowerCase()];
    if (index !== undefined) return index;
  }
  return undefined;
}
