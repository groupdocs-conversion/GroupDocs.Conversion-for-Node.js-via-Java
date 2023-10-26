/**
 * This example demonstrates how to convert a pdf document to wordprocessing document and specifying pages to be converted
 */
async function  convertToWordProcessingWithAdvancedOptions(groupdocs, inputFilePath) {
  const loadOptions = new groupdocs.conversion.WordProcessingLoadOptions()
  loadOptions.setPassword('12345')

  const converter = new groupdocs.conversion.Converter(inputFilePath, loadOptions)

  const outputPath = `${groupdocs.outputFolder}/ConvertToWordProcessingWithAdvancedOptions.docx`
  const convertOptions = new groupdocs.conversion.WordProcessingConvertOptions()
  convertOptions.setPageNumber(2)
  convertOptions.setPagesCount(1)
  convertOptions.setFormat(groupdocs.conversion.WordProcessingFileType.Docx);

  console.log(`Converted to ${outputPath}`)
  return converter.convert(outputPath, convertOptions)
}

module.exports = convertToWordProcessingWithAdvancedOptions
