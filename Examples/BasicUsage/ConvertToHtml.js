async function converToHTML(groupdocs, inputFilePath) {
  const converter = new groupdocs.conversion.Converter(inputFilePath)
  const convertOptions = new groupdocs.conversion.MarkupConvertOptions()
  const outputPath = `${groupdocs.outputFolder}output.html`

  console.log(`Converted to ${outputPath}`)
  return converter.convert(outputPath, convertOptions)
}

module.exports = converToHTML
