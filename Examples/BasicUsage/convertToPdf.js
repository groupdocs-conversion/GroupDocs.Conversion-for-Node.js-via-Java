/**
 * This example demonstrates how to convert DOCX file into PDF format.
 * For more details about Microsoft Word Open XML Document (.docx) to Portable Document (.pdf) conversion please check this documentation article 
 * https://docs.groupdocs.com/conversion
 */
async function convertToPdf(groupdocs, inputFilePath) {
  const converter = new groupdocs.conversion.Converter(inputFilePath)
  const convertOptions = new groupdocs.conversion.PdfConvertOptions()
  const outputPath = `${groupdocs.outputFolder}/ConvertToPdf.pdf`

  console.log(`Converted to ${outputPath}`)
  return converter.convert(outputPath, convertOptions)
}

module.exports = convertToPdf
