const path = require('path');

/**
 * This example demonstrates how to get basic information about a source document.
 *
 * @param {Object} groupdocs - The GroupDocs.Conversion library instance
 * @param {string} inputFilePath - Path to the input document file
 */
function getSourceDocumentInfo(groupdocs, inputFilePath) {
  // Initialize converter with input file
  const converter = new groupdocs.Converter(inputFilePath);

  // Get document information
  const documentInfo = converter.getDocumentInfo();

  console.log(`\n✓ Document info for ${path.basename(inputFilePath)}:`);

  // Display document metadata
  console.log(` * Author: ${documentInfo.getAuthor()}`);
  console.log(` * Creation date: ${documentInfo.getCreationDate()}`);
  console.log(` * Title: ${documentInfo.getTitle()}`);
  console.log(` * Version: ${documentInfo.getVersion()}`);
  console.log(` * Pages count: ${documentInfo.getPagesCount()}`);
  console.log(` * Width: ${documentInfo.getWidth()}`);
  console.log(` * Height: ${documentInfo.getHeight()}`);
  console.log(` * Is landscaped: ${documentInfo.isLandscape()}`);
  console.log(` * Is Encrypted: ${documentInfo.isPasswordProtected()}`);
}

module.exports = getSourceDocumentInfo;
