/**
 * This example demonstrates how to convert DOCX file into PPTX format.
 * For more details about Microsoft Word Open XML Document (.docx) to PowerPoint Open XML Presentation (.pptx) conversion please check this documentation article 
 * https://docs.groupdocs.com/conversion
 */
async function convertToPresentation(groupdocs, inputFilePath) {
  const converter = new groupdocs.conversion.Converter(inputFilePath)
  const convertOptions = new groupdocs.conversion.PresentationConvertOptions()
  const outputPath = `${groupdocs.outputFolder}/output.pptx`

  console.log(`Converted to ${outputPath}`)
  return converter.convert(outputPath, convertOptions)
}

module.exports = convertToPresentation
