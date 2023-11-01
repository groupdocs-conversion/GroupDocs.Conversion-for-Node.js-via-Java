/**
 * This example demonstrates how to convert a pdf document to wordprocessing with advanced options
 */
async function convertPdfAndHideAnnotations(groupdocs, inputFilePath) {
  const loadOptions = new groupdocs.conversion.PdfLoadOptions()
  loadOptions.setHidePdfAnnotations(true)

  const converter = new groupdocs.conversion.Converter(inputFilePath, loadOptions)

  const outputPath = `${groupdocs.outputFolder}/ConvertPdfAndHideAnnotations.docx`
  
  const convertOptions = new groupdocs.conversion.WordProcessingConvertOptions()

  console.log(`Pdf document converted successfully to ${outputPath} (pdf & hide annotations)`)
  return converter.convert(outputPath, convertOptions)
}

module.exports = convertPdfAndHideAnnotations
