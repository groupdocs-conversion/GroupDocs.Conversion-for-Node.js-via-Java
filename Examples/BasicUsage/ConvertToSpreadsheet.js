/**
 * This example demonstrates how to convert DOCX file into XLSX format.
 * For more details about Microsoft Word Open XML Document (.docx) to Microsoft Excel Open XML Spreadsheet (.xlsx) conversion please check this documentation article 
 * https://docs.groupdocs.com/conversion/net/convert-docx-to-xlsx
 */
async function convertToSpreadsheet(groupdocs, inputFilePath) {
  const converter = new groupdocs.conversion.Converter(inputFilePath)
  const convertOptions = new groupdocs.conversion.SpreadsheetConvertOptions()
  const outputPath = `${groupdocs.outputFolder}output.xlsx`

  console.log(`Converted to ${outputPath}`)
  return converter.convert(outputPath, convertOptions)
}

module.exports = convertToSpreadsheet
