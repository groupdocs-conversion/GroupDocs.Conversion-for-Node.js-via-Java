/**
 * This example demonstrates how to convert a word-processing document to pdf with advanced options
 */
async function convertWordProcessingByHiddingTrackedChanges(groupdocs, inputFilePath) {
  const loadOptions = new groupdocs.conversion.WordProcessingLoadOptions()
  loadOptions.setHideWordTrackedChanges(true)

  const outputPath = `${groupdocs.outputFolder}/ConvertWordProcessingByHiddingTrackedChanges.pdf`
  
  const converter = new groupdocs.conversion.Converter(inputFilePath, loadOptions)
  const convertOptions = new groupdocs.conversion.PdfConvertOptions()

  console.log(`WordProcessing document converted successfully to ${outputPath} (By hidding tracked changes)`)
  return converter.convert(outputPath, convertOptions)
}

module.exports = convertWordProcessingByHiddingTrackedChanges
