/**
 * This example demonstrates how to convert a word-processing document to pdf with advanced options
 */
async function convertWordProcessingByHiddingComments(groupdocs, inputFilePath) {
  const loadOptions = new groupdocs.conversion.WordProcessingLoadOptions()
  loadOptions.setHideComments(true)

  const outputPath = `${groupdocs.outputFolder}/ConvertWordProcessingByHiddingComments.pdf`
  
  const converter = new groupdocs.conversion.Converter(inputFilePath, loadOptions)
  const convertOptions = new groupdocs.conversion.PdfConvertOptions()

  console.log(`WordProcessing document converted successfully to ${outputPath} (by hidding comments)`)
  return converter.convert(outputPath, convertOptions)
}

module.exports = convertWordProcessingByHiddingComments