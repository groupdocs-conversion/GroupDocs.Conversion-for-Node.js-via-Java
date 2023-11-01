/**
 * This example demonstrates how to convert a pdf document to wordprocessing with advanced options
 */
async function convertPdfAndRemoveEmbeddedFiles(groupdocs, inputFilePath) {
  const loadOptions = new groupdocs.conversion.PdfLoadOptions()
  loadOptions.setRemoveEmbeddedFiles(true)

  const converter = new groupdocs.conversion.Converter(inputFilePath, loadOptions)

  const outputPath = `${groupdocs.outputFolder}/ConvertPdfAndRemoveEmbeddedFiles.docx`
  
  const convertOptions = new groupdocs.conversion.WordProcessingConvertOptions()

  console.log(`Pdf document converted successfully to ${outputPath} (pdf & remove embedded files)`)
  return converter.convert(outputPath, convertOptions)
}

module.exports = convertPdfAndRemoveEmbeddedFiles
