/**
* This example demonstrates how to convert document to HTML.
*/

async function convertToHtml(groupdocs, inputFilePath) {
  const converter = new groupdocs.conversion.Converter(inputFilePath)
  const convertOptions = new groupdocs.conversion.MarkupConvertOptions()
  const outputPath = `${groupdocs.outputFolder}/ConvertToHtml.html`

  console.log(`Converted to ${outputPath}`)
  return converter.convert(outputPath, convertOptions)
}

module.exports = convertToHtml
