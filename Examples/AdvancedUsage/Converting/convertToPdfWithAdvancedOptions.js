/**
 * This example demonstrates how to convert password-protected document to PDF and specifying pages to be converted
 */
async function convertToPdfWithAdvancedOptions(groupdocs, inputFilePath) {
  const loadOptions = new groupdocs.conversion.WordProcessingLoadOptions()
  loadOptions.setPassword('12345')

  const converter = new groupdocs.conversion.Converter(inputFilePath, loadOptions)

  const outputPath = `${groupdocs.outputFolder}/ConvertToPdfWithAdvancedOptions.pdf`
  const convertOptions = new groupdocs.conversion.PdfConvertOptions()
  convertOptions.setPageNumber(2)
  convertOptions.setPagesCount(1)
  convertOptions.setRotate(groupdocs.conversion.Rotation.On180)
  convertOptions.setDpi(300)
  convertOptions.setWidth(1024)
  convertOptions.setHeight(768)
  console.log(`Converted to ${outputPath}`)
  return converter.convert(outputPath, convertOptions)
}

module.exports = convertToPdfWithAdvancedOptions
