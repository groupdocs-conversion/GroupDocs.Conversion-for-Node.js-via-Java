/**
 * This example demonstrates how to convert a spreadsheet document to pdf with advanced options
 */
async function convertSpreadsheetBySkippingEmptyRowsAndColumns(groupdocs, inputFilePath) {
  const loadOptions = new groupdocs.conversion.SpreadsheetLoadOptions()
  loadOptions.setSkipEmptyRowsAndColumns(true);
  loadOptions.setOnePagePerSheet(true);

  const outputPath = `${groupdocs.outputFolder}/ConvertSpreadsheetBySkippingEmptyRowsAndColumns.pdf`
  
  const converter = new groupdocs.conversion.Converter(inputFilePath, loadOptions)
  const convertOptions = new groupdocs.conversion.PdfConvertOptions()

  console.log(`Spreadsheet document converted successfully to ${outputPath} (skip empty rows & columns)`)
  return converter.convert(outputPath, convertOptions)
}

module.exports = convertSpreadsheetBySkippingEmptyRowsAndColumns