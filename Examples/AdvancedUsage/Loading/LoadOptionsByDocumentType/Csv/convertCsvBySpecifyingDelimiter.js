const java = require('java')
/**
 * This example demonstrates how to convert a csv document to pdf with advanced options
 */
async function convertCsvBySpecifyingDelimiter(groupdocs, inputFilePath) {
  const loadOptions = new groupdocs.conversion.CsvLoadOptions()
  loadOptions.setSeparator(java.newChar(','))

  const outputPath = `${groupdocs.outputFolder}/ConvertCsvBySpecifyingDelimiter.pdf`
  
  const converter = new groupdocs.conversion.Converter(inputFilePath, loadOptions)
  const convertOptions = new groupdocs.conversion.PdfConvertOptions()

  console.log(`CSV document converted successfully to ${outputPath} (specifying delimiter)`)
  return converter.convert(outputPath, convertOptions)
}

module.exports = convertCsvBySpecifyingDelimiter