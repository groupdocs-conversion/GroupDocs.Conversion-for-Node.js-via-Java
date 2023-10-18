/**
 * This example demonstrates how to convert a spreadsheet document to pdf with advanced options
 */
async function convertSpreadsheetByShowingGridLines(groupdocs, inputFilePath) {
  const loadOptions = new groupdocs.conversion.SpreadsheetLoadOptions()
  loadOptions.setShowGridLines(true);
  loadOptions.setOnePagePerSheet(true);

  const outputPath = `${groupdocs.outputFolder}/ConvertSpreadsheetByShowingGridLines.pdf`
  
  const converter = new groupdocs.conversion.Converter(inputFilePath, loadOptions)
  const convertOptions = new groupdocs.conversion.PdfConvertOptions()

  console.log(`Spreadsheet document converted successfully to ${outputPath} (show grid lines)`)
  return converter.convert(outputPath, convertOptions)
}

module.exports = convertSpreadsheetByShowingGridLines