/** 
 * This example demonstrates how to convert DOCX file into HTML format.
 * For more details about Microsoft Word Open XML Document (.docx) to Hyper Text Markup Language (.html) conversion please check this documentation article 
 * https://docs.groupdocs.com/conversion
 */
async function converToHTML(groupdocs, inputFilePath) {
  const converter = new groupdocs.conversion.Converter(inputFilePath)
  const convertOptions = new groupdocs.conversion.MarkupConvertOptions()
  const outputPath = `${groupdocs.outputFolder}/output.html`

  console.log(`Converted to ${outputPath}`)
  return converter.convert(outputPath, convertOptions)
}

module.exports = converToHTML
