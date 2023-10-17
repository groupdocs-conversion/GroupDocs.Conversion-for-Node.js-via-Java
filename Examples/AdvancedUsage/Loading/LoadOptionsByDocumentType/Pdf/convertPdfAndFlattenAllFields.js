/**
 * This example demonstrates how to convert a pdf document to wordprocessing with advanced options
 */
async function convertPdfAndFlattenAllFields(groupdocs, inputFilePath) {
  const loadOptions = new groupdocs.conversion.PdfLoadOptions()
  loadOptions.setFlattenAllFields(true)

  const converter = new groupdocs.conversion.Converter(inputFilePath, loadOptions)

  const outputPath = `${groupdocs.outputFolder}/ConvertPdfAndFlattenAllFields.docx`
  
  const convertOptions = new groupdocs.conversion.WordProcessingConvertOptions()

  console.log(`Pdf document converted successfully to ${outputPath} (pdf & flatten all fields)`)
  return converter.convert(outputPath, convertOptions)
}

module.exports = convertPdfAndFlattenAllFields