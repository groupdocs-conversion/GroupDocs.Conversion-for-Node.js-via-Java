/**
 * This example demonstrates how to convert a csv document to pdf with advanced options
 */
async function convertCsvBySpecifyingEncoding(groupdocs, inputFilePath) {
  const loadOptions = new groupdocs.conversion.CsvLoadOptions()
  loadOptions.setEncoding("Shift_JIS")

  const outputPath = `${groupdocs.outputFolder}/ConvertCsvBySpecifyingEncoding.pdf`
  
  const converter = new groupdocs.conversion.Converter(inputFilePath, loadOptions)
  const convertOptions = new groupdocs.conversion.PdfConvertOptions()

  console.log(`CSV document converted successfully to ${outputPath} (encoding specified)`)
  return converter.convert(outputPath, convertOptions)
}

module.exports = convertCsvBySpecifyingEncoding