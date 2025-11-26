const path = require('path');

/**
 * This example demonstrates how to convert a range of consecutive pages from a document.
 *
 * @param {Object} groupdocs - The GroupDocs.Conversion library instance
 * @param {string} inputFilePath - Path to the input document file
 * @param {string} outputFolder - Path to the output folder
 * @returns {Promise} Promise that resolves when conversion is complete
 */
async function convertConsecutivePages(groupdocs, inputFilePath, outputFolder) {
  // Initialize converter with input file
  const converter = new groupdocs.Converter(inputFilePath);

  // Configure PDF conversion options
  const convertOptions = new groupdocs.PdfConvertOptions();

  // Set output file path
  const outputPath = `${outputFolder}/OutputNPages.pdf`;

  // Configure page range: start from page 2, convert 2 consecutive pages
  convertOptions.setPageNumber(2);
  convertOptions.setPagesCount(2);

  console.log(`\n✓ Convert N Consecutive Pages: ${path.basename(outputPath)}`);
  return converter.convert(outputPath, convertOptions);
}

module.exports = convertConsecutivePages;
