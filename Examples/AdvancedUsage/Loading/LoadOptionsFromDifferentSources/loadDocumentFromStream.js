const fs = require("fs");

/**
 * This example demonstrates how to convert document from stream.
 */
async function loadDocumentFromStream (groupdocs, inputFilePath) {
  const outputPath = `${groupdocs.outputFolder}/LoadDocumentFromStream.pdf`

  try {
    const readStream = fs.createReadStream(inputFilePath)
    const stream = await groupdocs.conversion.readDataFromStream(readStream)
    const converter = new groupdocs.conversion.Converter(stream);
    const convertOptions = new groupdocs.conversion.PdfConvertOptions()

    console.log(`Source document converted successfully to ${outputPath}`)
    return converter.convert(outputPath, convertOptions)

  } catch (error) {
    throw new Error(error)
  }
}

module.exports = loadDocumentFromStream
