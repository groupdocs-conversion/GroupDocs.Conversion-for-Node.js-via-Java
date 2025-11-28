const fs = require('fs');
const java = require('java');
const path = require('path');

/**
 * This example demonstrates how to convert a document loaded from a file stream.
 *
 * Loading from a stream is useful when working with files from memory or network sources.
 *
 * @param {Object} groupdocs - The GroupDocs.Conversion library instance
 * @param {string} inputFilePath - Path to the input document file
 * @param {string} outputFolder - Path to the output folder
 * @returns {Promise} Promise that resolves when conversion is complete
 */
async function loadDocumentFromStream(groupdocs, inputFilePath, outputFolder) {
  // Set output file path
  const outputPath = `${outputFolder}/LoadDocumentFromStream.pdf`;

  try {
    // Create read stream from file
    const readStream = fs.createReadStream(inputFilePath);

    // Read data from stream using GroupDocs API
    const stream = await groupdocs.readDataFromStream(readStream);

    // Create Supplier<InputStream> that returns the stream (equivalent to Java lambda: () -> stream)
    const streamSupplier = java.newProxy('java.util.function.Supplier', {
      get: function() {
        return stream;
      }
    });

    // Initialize converter with stream data
    const converter = new groupdocs.Converter(streamSupplier);

    // Configure PDF conversion options
    const convertOptions = new groupdocs.PdfConvertOptions();

    console.log(`\n✓ Load from Stream: ${path.basename(outputPath)}`);
    return converter.convert(outputPath, convertOptions);
  } catch (error) {
    // Preserve the original error if it's already an Error object
    if (error instanceof Error) {
      throw error;
    }
    // Otherwise, wrap it in an Error
    throw new Error(String(error));
  }
}

module.exports = loadDocumentFromStream;
