async function convertToWordProcessing(groupdocs, inputFilePath) {
  const converter = new groupdocs.conversion.Converter(inputFilePath)
  const convertOptions = new groupdocs.conversion.WordProcessingConvertOptions()
  const outputPath = `${groupdocs.outputFolder}output.docx`

  console.log(`Converted to ${outputPath}`)
  return converter.convert(outputPath, convertOptions)
}

module.exports = convertToWordProcessing
