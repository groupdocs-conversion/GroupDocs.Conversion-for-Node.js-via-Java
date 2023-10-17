/**
 * This example demonstrates how to convert a presentation document to pdf with advanced options
 */
async function convertPresentationByHiddingComments(groupdocs, inputFilePath) {
  const loadOptions = new groupdocs.conversion.PresentationLoadOptions()
  loadOptions.setHideComments(true)

  const outputPath = `${groupdocs.outputFolder}/ConvertPresentationByHiddingComments.pdf`
  
  const converter = new groupdocs.conversion.Converter(inputFilePath, loadOptions)
  const convertOptions = new groupdocs.conversion.PdfConvertOptions()

  console.log(`Pdf document converted successfully to ${outputPath} (by hidding comments)`)
  return converter.convert(outputPath, convertOptions)
}

module.exports = convertPresentationByHiddingComments