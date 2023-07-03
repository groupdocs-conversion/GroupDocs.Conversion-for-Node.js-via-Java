async function convertToSpreadsheet(groupdocs, inputFilePath) {
  const converter = new groupdocs.conversion.Converter(inputFilePath)
  const convertOptions = new groupdocs.conversion.SpreadsheetConvertOptions()
  const outputPath = `${groupdocs.outputFolder}output.xlsx`

  console.log(`Converted to ${outputPath}`)
  return converter.convert(outputPath, convertOptions)
}

module.exports = convertToSpreadsheet
