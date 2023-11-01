/**
 * This example demonstrates how to convert a csv document to pdf with advanced options
 */
async function convertCsvByConvertingDateTimeAndNumericData(groupdocs, inputFilePath) {
  const loadOptions = new groupdocs.conversion.CsvLoadOptions()
  loadOptions.setConvertDateTimeData(true)
  loadOptions.setConvertNumericData(true)

  const outputPath = `${groupdocs.outputFolder}/ConvertCsvByConvertingDateTimeAndNumericData.pdf`
  
  const converter = new groupdocs.conversion.Converter(inputFilePath, loadOptions)
  const convertOptions = new groupdocs.conversion.PdfConvertOptions()

  console.log(`CSV document converted successfully to ${outputPath} (converting dateTime & numeric data)`)
  return converter.convert(outputPath, convertOptions)
}

module.exports = convertCsvByConvertingDateTimeAndNumericData