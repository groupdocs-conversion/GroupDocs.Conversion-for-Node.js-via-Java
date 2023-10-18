/**
 * This example demonstrates how to convert a spreadsheet document to pdf with advanced options
 */
async function convertSpreadsheetBySpecifyingRange(groupdocs, inputFilePath) {
  const loadOptions = new groupdocs.conversion.SpreadsheetLoadOptions()
  loadOptions.setConvertRange('10:30');
  loadOptions.setOnePagePerSheet(true);

  const outputPath = `${groupdocs.outputFolder}/ConvertSpreadsheetBySpecifyingRange.pdf`
  
  const converter = new groupdocs.conversion.Converter(inputFilePath, loadOptions)
  const convertOptions = new groupdocs.conversion.PdfConvertOptions()

  console.log(`Spreadsheet document converted successfully to ${outputPath} (by specifying range)`)
  return converter.convert(outputPath, convertOptions)
}

module.exports = convertSpreadsheetBySpecifyingRange