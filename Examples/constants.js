require('dotenv').config();
const path = require('path');

const SAMPLE_PATH = path.join(__dirname, 'Resources', 'SampleFiles');

module.exports = {
  LICENSE_PATH: process.env.GROUPDOCS_LICENSE,
  SAMPLE_PATH,
  OUTPUT_FOLDER: path.join(__dirname, 'Output'),
  SAMPLE_DOCX: SAMPLE_PATH + '/sample.docx',
  SAMPLE_PDF: SAMPLE_PATH + '/sample.pdf',
  SAMPLE_DOCX_WITH_PASSWORD: SAMPLE_PATH + '/password_protected.docx',
  PPTX_WITH_NOTES: SAMPLE_PATH + '/with_notes.pptx',
  SAMPLE_PPTX_HIDDEN_PAGE: SAMPLE_PATH + '/with_hidden_page.pptx',
  SAMPLE_DOCX_WITH_TRACKED_CHANGES: SAMPLE_PATH + '/with_tracked_changes.docx',
  SAMPLE_XLSX: SAMPLE_PATH + '/sample.xlsx',
  SAMPLE_XLSX_WITH_HIDDEN_SHEET: SAMPLE_PATH + '/with_hidden_sheet.xlsx',
  SAMPLE_DATASOURCE: SAMPLE_PATH + '/sample_datasource.xml',
  SAMPLE_DWG_WITH_LAYOUTS_AND_LAYERS: SAMPLE_PATH + '/with_layers_and_layouts.dwg',
  SAMPLE_CSV: SAMPLE_PATH + '/sample.csv',
  SAMPLE_MSG: SAMPLE_PATH + '/sample.msg',
  SAMPLE_ONE: SAMPLE_PATH + '/sample.one',
  SAMPLE_TXT: SAMPLE_PATH + '/sample.txt',
  SAMPLE_TXT_SHIFT_JS_ENCODED: SAMPLE_PATH + '/shift_jis_encoded.txt',
};
