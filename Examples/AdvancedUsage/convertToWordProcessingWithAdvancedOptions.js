/**
 * This example demonstrates how to convert to WordProcessing document with advanced options.
 * For more details about Microsoft Word Open XML Document (.docx) to Portable Document (.pdf) conversion please check this documentation article 
 * https://docs.groupdocs.com/conversion
 */
async function  convertToWordProcessingWithAdvancedOptions(groupdocs, inputFilePath) {
  const loadOptions = new groupdocs.conversion.WordProcessingLoadOptions()
  loadOptions.setPassword('12345')

  const converter = new groupdocs.conversion.Converter(inputFilePath, loadOptions)

  const outputPath = `${groupdocs.outputFolder}/convertToWordProcessingWithAdvancedOptions.odt`
  const convertOptions = new groupdocs.conversion.WordProcessingConvertOptions()
  convertOptions.setPageNumber(2)
  convertOptions.setPagesCount(1)
  convertOptions.setFormat(groupdocs.conversion.WordProcessingFileType.Odt);

  console.log(`Converted to ${outputPath}`)
  return converter.convert(outputPath, convertOptions)
}

module.exports = convertToWordProcessingWithAdvancedOptions
