/**
 * This example demonstrates how to convert to Presentation with advanced options.
 * For more details about Microsoft Word Open XML Document (.docx) to Portable Document (.pdf) conversion please check this documentation article 
 * https://docs.groupdocs.com/conversion
 */
async function convertToPresentationWithAdvancedOptions(groupdocs, inputFilePath) {
  const converter = new groupdocs.conversion.Converter(inputFilePath)

  const outputPath = `${groupdocs.outputFolder}/convertToPresentationWithAdvancedOptions.ppt`
  const convertOptions = new groupdocs.conversion.PresentationConvertOptions()
  convertOptions.setPageNumber(2)
  convertOptions.setPagesCount(1)
  convertOptions.setFormat(groupdocs.conversion.PresentationFileType.Ppt);

  console.log(`Converted to ${outputPath}`)
  return converter.convert(outputPath, convertOptions)
}

module.exports = convertToPresentationWithAdvancedOptions
