/**
 * This example demonstrates how to convert a word-processing document to pdf with advanced options
 */
async function convertWordProcessingByHidingTrackedChanges(groupdocs, inputFilePath) {
  const loadOptions = new groupdocs.conversion.WordProcessingLoadOptions()
  loadOptions.setHideWordTrackedChanges(true)

  const outputPath = `${groupdocs.outputFolder}/ConvertWordProcessingByHidingTrackedChanges.pdf`
  
  const converter = new groupdocs.conversion.Converter(inputFilePath, loadOptions)
  const convertOptions = new groupdocs.conversion.PdfConvertOptions()

  console.log(`WordProcessing document converted successfully to ${outputPath} (By hiding tracked changes)`)
  return converter.convert(outputPath, convertOptions)
}

module.exports = convertWordProcessingByHidingTrackedChanges
