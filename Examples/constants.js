const path = require('path')
const SamplePath = path.join(__dirname, './Resources/SampleFiles')

module.exports = {
  LicensePath: '',
  SamplePath,
  OutputPath: path.join(__dirname, 'Output'),
  SAMPLE_DOCX: SamplePath + '/sample.docx',
  SAMPLE_PDF: SamplePath + '/sample.pdf',
  SAMPLE_DOCX_WITH_PASSWORD: SamplePath + '/password_protected.docx',
  PPTX_WITH_NOTES: SamplePath + '/with_notes.pptx',
  SAMPLE_PPTX_HIDDEN_PAGE: SamplePath + '/with_hidden_page.pptx',
  SAMPLE_DOCX_WITH_TRACKED_CHANGES: SamplePath + '/with_tracked_changes.docx',
  SAMPLE_XLSX: SamplePath + '/sample.xlsx',
  SAMPLE_XLSX_WITH_HIDDEN_SHEET: SamplePath + '/with_hidden_sheet.xlsx',
  SAMPLE_DATASOURCE: SamplePath + '/sample_datasource.xml',
  SAMPLE_DWG_WITH_LAYOUTS_AND_LAYERS: SamplePath + '/with_layers_and_layouts.dwg',
  SAMPLE_CSV: SamplePath + '/sample.csv',
  SAMPLE_MSG: SamplePath + '/sample.msg',
  SAMPLE_ONE: SamplePath + '/sample.one',
  SAMPLE_TXT: SamplePath + '/sample.txt',
  SAMPLE_TXT_SHIFT_JS_ENCODED: SamplePath + '/shift_jis_encoded.txt',
}