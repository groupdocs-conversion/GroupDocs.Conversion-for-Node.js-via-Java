const java = require('java');
const URL = java.import('java.net.URL');
const path = require('path');

/**
 * This example demonstrates how to download and convert a document from a URL.
 *
 * This is useful for converting documents hosted on remote servers or cloud storage.
 *
 * @param {Object} groupdocs - The GroupDocs.Conversion library instance
 * @param {string} outputFolder - Path to the output folder
 * @returns {Promise} Promise that resolves when conversion is complete
 */
async function loadDocumentFromUrl(groupdocs, outputFolder) {
  // URL of the document to download and convert
  const url = 'https://github.com/groupdocs-conversion/GroupDocs.Conversion-for-Node.js-via-Java/blob/master/Examples/Resources/SampleFiles/sample.docx?raw=true';

  // Set output file path
  const outputPath = `${outputFolder}/LoadDocumentFromUrl.pdf`;

  try {
    // Open stream from URL
    const stream = new URL(url).openStream();

    // Initialize converter with stream from URL
    const converter = new groupdocs.Converter(stream);

    // Configure PDF conversion options
    const convertOptions = new groupdocs.PdfConvertOptions();

    console.log(`\n✓ Load from URL: ${path.basename(outputPath)}`);
    return converter.convert(outputPath, convertOptions);
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = loadDocumentFromUrl;
