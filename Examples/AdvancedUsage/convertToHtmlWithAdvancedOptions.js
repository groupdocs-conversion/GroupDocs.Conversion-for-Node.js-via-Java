/**
 * This example demonstrates how to convert password-protected document to HTML and specifying pages to be converted
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

