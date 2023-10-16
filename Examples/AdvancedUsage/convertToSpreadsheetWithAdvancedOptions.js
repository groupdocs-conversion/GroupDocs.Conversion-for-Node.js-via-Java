/**
 * This example demonstrates how to convert password-protected document to Spreadsheet and specifying pages to be converted
 */
async function convertToSpreadsheetWithAdvancedOptions(groupdocs, inputFilePath) {
  const loadOptions = new groupdocs.conversion.WordProcessingLoadOptions()
  loadOptions.setPassword('12345')

  const converter = new groupdocs.conversion.Converter(inputFilePath, loadOptions)

  const outputPath = `${groupdocs.outputFolder}/convertToSpreadsheetWithAdvancedOptions.xls`
  const convertOptions = new groupdocs.conversion.SpreadsheetConvertOptions()
  convertOptions.setPageNumber(2)
  convertOptions.setPagesCount(1)
  convertOptions.setFormat(groupdocs.conversion.SpreadsheetFileType.Xls);

  console.log(`Converted to ${outputPath}`)
  return converter.convert(outputPath, convertOptions)
}

module.exports = convertToSpreadsheetWithAdvancedOptions
