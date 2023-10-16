/**
 * This example demonstrates how to convert password-protected document to presentation and specifying pages to be converted
 */
async function convertToPresentationWithAdvancedOptions(groupdocs, inputFilePath) {
  const loadOptions = new groupdocs.conversion.WordProcessingLoadOptions()
  loadOptions.setPassword('12345')

  const converter = new groupdocs.conversion.Converter(inputFilePath, loadOptions)
  
  const outputPath = `${groupdocs.outputFolder}/convertToPresentationWithAdvancedOptions.ppt`
  const convertOptions = new groupdocs.conversion.PresentationConvertOptions()
  convertOptions.setPageNumber(2)
  convertOptions.setPagesCount(1)
  convertOptions.setFormat(groupdocs.conversion.PresentationFileType.Ppt);

  console.log(`Converted to ${outputPath}`)
  return converter.convert(outputPath, convertOptions)
}

module.exports = convertToPresentationWithAdvancedOptions
