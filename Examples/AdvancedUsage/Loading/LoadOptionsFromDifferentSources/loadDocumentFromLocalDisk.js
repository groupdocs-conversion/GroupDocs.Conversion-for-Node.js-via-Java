
/**
 * This example demonstrates how to convert document from local disk.
 */
async function loadDocumentFromLocalDisk (groupdocs, inputFilePath) {
  const outputPath = `${groupdocs.outputFolder}/LoadDocumentFromLocalDisk.pdf`

  try {
    const converter = new groupdocs.conversion.Converter(inputFilePath);
    const convertOptions = new groupdocs.conversion.PdfConvertOptions()

    console.log(`Source document converted successfully to ${outputPath}`)
    return converter.convert(outputPath, convertOptions)

  } catch (error) {
    throw new Error(error)
  }
}

module.exports = loadDocumentFromLocalDisk