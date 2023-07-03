function convertToPdfWithAdvancedOptions(groupdocs, inputFilePath) {
  const loadOptions = new groupdocs.conversion.WordProcessingLoadOptions()
  loadOptions.setPassword('12345')

  const converter = new groupdocs.conversion.Converter(inputFilePath, loadOptions)

  const outputPath = `${groupdocs.outputFolder}ConvertToPdfWithAdvancedOptions.pdf`
  const convertOptions = new groupdocs.conversion.PdfConvertOptions()
  convertOptions.setPageNumber(2)
  convertOptions.setPagesCount(1)
  convertOptions.setRotate(groupdocs.conversion.Rotation.On180)
  convertOptions.setDpi(300)
  convertOptions.setWidth(1024)
  convertOptions.setHeight(768)
  converter.convert(outputPath, convertOptions)

  console.log(`Converted to ${outputPath}`)
}

module.exports = convertToPdfWithAdvancedOptions
