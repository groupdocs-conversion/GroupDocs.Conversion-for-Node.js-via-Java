const path = require('path');

/**
 * This example demonstrates how to convert a document loaded from local disk.
 *
 * This is the standard way to load documents from the file system.
 *
 * @param {Object} groupdocs - The GroupDocs.Conversion library instance
 * @param {string} inputFilePath - Path to the input document file on local disk
 * @param {string} outputFolder - Path to the output folder
 * @returns {Promise} Promise that resolves when conversion is complete
 */
async function loadDocumentFromLocalDisk(groupdocs, inputFilePath, outputFolder) {
  // Set output file path
  const outputPath = `${outputFolder}/LoadDocumentFromLocalDisk.pdf`;

  try {
    // Initialize converter with file path from local disk
    const converter = new groupdocs.Converter(inputFilePath);

    // Configure PDF conversion options
    const convertOptions = new groupdocs.PdfConvertOptions();

    console.log(`\n✓ Load from Local Disk: ${path.basename(outputPath)}`);
    return converter.convert(outputPath, convertOptions);
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = loadDocumentFromLocalDisk;
