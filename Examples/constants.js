const path = require('path')
const SamplePath = path.join(__dirname, './Resources/SampleFiles')

module.exports = {
  LicensePath: '/Users/anonymous1/Desktop/projects/GroupDocs_Files/GroupDocs.Conversion.Node.JsViaJava.lic',
  SamplePath,
  OutputPath: path.join(__dirname, 'Output'),
  SAMPLE_DOCX: SamplePath + '/sample.docx',
  SAMPLE_PDF: SamplePath + '/sample.pdf',
  SAMPLE_DOCX_WITH_PASSWORD: SamplePath + '/password_protected.docx',
  PPTX_WITH_NOTES: SamplePath + '/with_notes.pptx',
  SAMPLE_PPTX_HIDDEN_PAGE: SamplePath + '/with_hidden_page.pptx',
  SAMPLE_DOCX_WITH_TRACKED_CHANGES: SamplePath + '/with_tracked_changes.docx'
}