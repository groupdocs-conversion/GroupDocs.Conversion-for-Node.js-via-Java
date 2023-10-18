/**
 * This example demonstrates how to convert a xml document to spreadsheet with advanced options
 */
async function convertXmlAsDataSourceToSpreadsheet(groupdocs, inputFilePath) {
  const loadOptions = new groupdocs.conversion.XmlLoadOptions()
  loadOptions.setUseAsDataSource(true);

  const outputPath = `${groupdocs.outputFolder}/ConvertXmlAsDataSourceToSpreadsheet.xlsx`
  
  const converter = new groupdocs.conversion.Converter(inputFilePath, loadOptions)
  const convertOptions = new groupdocs.conversion.SpreadsheetConvertOptions()

  console.log(`Xml document converted successfully to ${outputPath} (xml as data source)`)
  return converter.convert(outputPath, convertOptions)
}

module.exports = convertXmlAsDataSourceToSpreadsheet