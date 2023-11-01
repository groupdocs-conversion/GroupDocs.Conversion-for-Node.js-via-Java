/**
 * This example demonstrates how to convert a spreadsheet document to pdf with advanced options
 */
async function convertSpreadsheetAndHideComments(groupdocs, inputFilePath) {
  const loadOptions = new groupdocs.conversion.SpreadsheetLoadOptions()
  loadOptions.setHideComments(true);
  loadOptions.setOnePagePerSheet(true);

  const outputPath = `${groupdocs.outputFolder}/ConvertSpreadsheetAndHideComments.pdf`
  
  const converter = new groupdocs.conversion.Converter(inputFilePath, loadOptions)
  const convertOptions = new groupdocs.conversion.PdfConvertOptions()

  console.log(`Spreadsheet document converted successfully to ${outputPath} (hide comments)`)
  return converter.convert(outputPath, convertOptions)
}

module.exports = convertSpreadsheetAndHideComments