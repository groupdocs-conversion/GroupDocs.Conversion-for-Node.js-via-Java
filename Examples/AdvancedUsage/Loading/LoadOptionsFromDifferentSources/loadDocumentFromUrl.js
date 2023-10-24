const java = require('java')
const URL = java.import('java.net.URL');

/**
 * This example demonstrates how to download and convert document.
 */
async function loadDocumentFromUrl (groupdocs, inputFilePath) {
  const url = 'https://github.com/groupdocs-conversion/GroupDocs.Conversion-for-Node.js-via-Java/blob/master/Examples/Resources/SampleFiles/sample.docx?raw=true'
  const outputPath = `${groupdocs.outputFolder}/LoadDocumentFromUrl.pdf`

  try {
    const stream = new URL(url).openStream();
    const converter = new groupdocs.conversion.Converter(stream);
    const convertOptions = new groupdocs.conversion.PdfConvertOptions()

    console.log(`Source document converted successfully to ${outputPath}`)
    return converter.convert(outputPath, convertOptions)

  } catch (error) {
    throw new Error(error)
  }
}

module.exports = loadDocumentFromUrl
