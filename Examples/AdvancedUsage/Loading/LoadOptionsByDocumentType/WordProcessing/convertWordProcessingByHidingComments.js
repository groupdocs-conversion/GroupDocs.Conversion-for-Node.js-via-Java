/**
 * This example demonstrates how to convert a word-processing document to pdf with advanced options
 */
async function convertWordProcessingByHidingComments(groupdocs, inputFilePath) {
  const loadOptions = new groupdocs.conversion.WordProcessingLoadOptions()
  loadOptions.setHideComments(true)

  const outputPath = `${groupdocs.outputFolder}/ConvertWordProcessingByHidingComments.pdf`
  
  const converter = new groupdocs.conversion.Converter(inputFilePath, loadOptions)
  const convertOptions = new groupdocs.conversion.PdfConvertOptions()

  console.log(`WordProcessing document converted successfully to ${outputPath} (by hiding comments)`)
  return converter.convert(outputPath, convertOptions)
}

module.exports = convertWordProcessingByHidingComments