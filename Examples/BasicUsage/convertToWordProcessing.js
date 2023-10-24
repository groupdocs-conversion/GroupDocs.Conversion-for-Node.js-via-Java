/**
 * This example demonstrates how to convert PDF file into DOCX format.
 * For more details about Portable Document (.pdf) to Microsoft Word Open XML Document (.docx) conversion please check this documentation article 
 * https://docs.groupdocs.com/conversion
 */
async function convertToWordProcessing(groupdocs, inputFilePath) {
  const converter = new groupdocs.conversion.Converter(inputFilePath)
  const convertOptions = new groupdocs.conversion.WordProcessingConvertOptions()
  const outputPath = `${groupdocs.outputFolder}/ConvertToWordProcessing.docx`

  console.log(`Converted to ${outputPath}`)
  return converter.convert(outputPath, convertOptions)
}

module.exports = convertToWordProcessing
