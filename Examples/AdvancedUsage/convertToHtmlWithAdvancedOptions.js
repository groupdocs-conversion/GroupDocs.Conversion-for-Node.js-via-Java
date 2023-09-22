/**
 * This example demonstrates how to convert to HTML with advanced options.
 * For more details about Microsoft Word Open XML Document (.docx) to Portable Document (.pdf) conversion please check this documentation article 
 * https://docs.groupdocs.com/conversion
 */
async function convertToHtmlWithAdvancedOptions(groupdocs, inputFilePath) {
  const loadOptions = new groupdocs.conversion.WordProcessingLoadOptions()
  loadOptions.setPassword('12345')

  const converter = new groupdocs.conversion.Converter(inputFilePath, loadOptions)

  const outputPath = `${groupdocs.outputFolder}/convertToHtmlWithAdvancedOptions.html`
  const convertOptions = new groupdocs.conversion.MarkupConvertOptions()
  convertOptions.setPageNumber(2);
  convertOptions.setFixedLayout(true);
  convertOptions.setPagesCount(1);

  console.log(`Converted to ${outputPath}`)
  return converter.convert(outputPath, convertOptions)
}

module.exports = convertToHtmlWithAdvancedOptions

