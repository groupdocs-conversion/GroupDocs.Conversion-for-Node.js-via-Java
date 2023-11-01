/**
 * This example demonstrates how to convert a spreadsheet document to pdf with advanced options
 */
async function convertSpreadsheetWithHiddenSheetsIncluded(groupdocs, inputFilePath) {
  const loadOptions = new groupdocs.conversion.SpreadsheetLoadOptions()
  loadOptions.setShowHiddenSheets(true);
  loadOptions.setOnePagePerSheet(true);

  const outputPath = `${groupdocs.outputFolder}/ConvertSpreadsheetWithHiddenSheetsIncluded.pdf`
  
  const converter = new groupdocs.conversion.Converter(inputFilePath, loadOptions)
  const convertOptions = new groupdocs.conversion.PdfConvertOptions()

  console.log(`Spreadsheet document converted successfully to ${outputPath} (with hidden sheets included)`)
  return converter.convert(outputPath, convertOptions)
}

module.exports = convertSpreadsheetWithHiddenSheetsIncluded