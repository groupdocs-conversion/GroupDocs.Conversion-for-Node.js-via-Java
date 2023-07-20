const path = require('path')
const SamplePath = path.join(__dirname, './Resources/SampleFiles')

module.exports = {
  LicensePath: '',
  SamplePath,
  OutputPath: path.join(__dirname, 'Output'),
  SAMPLE_DOCX: SamplePath + '/sample.docx',
  SAMPLE_PDF: SamplePath + '/sample.pdf',
  SAMPLE_DOCX_WITH_PASSWORD: SamplePath + '/password_protected.docx'
}