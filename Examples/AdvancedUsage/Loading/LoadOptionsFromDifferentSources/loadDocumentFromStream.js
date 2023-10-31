const java = require('java')
const FileInputStream = java.import('java.io.FileInputStream');

/**
 * This example demonstrates how to convert document from stream.
 */
async function loadDocumentFromStream (groupdocs, inputFilePath) {
  const outputPath = `${groupdocs.outputFolder}/LoadDocumentFromStream.pdf`

  try {
    const stream = new FileInputStream(inputFilePath)
    const converter = new groupdocs.conversion.Converter(stream);
    const convertOptions = new groupdocs.conversion.PdfConvertOptions()

    console.log(`Source document converted successfully to ${outputPath}`)
    return converter.convert(outputPath, convertOptions)

  } catch (error) {
    throw new Error(error)
  }
}

module.exports = loadDocumentFromStream
