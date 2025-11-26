const ArrayList = require('java').import('java.util.ArrayList');
const path = require('path');

/**
 * This example demonstrates how to convert specific pages from a document.
 *
 * @param {Object} groupdocs - The GroupDocs.Conversion library instance
 * @param {string} inputFilePath - Path to the input document file
 * @param {string} outputFolder - Path to the output folder
 * @returns {Promise} Promise that resolves when conversion is complete
 */
async function convertSpecificPages(groupdocs, inputFilePath, outputFolder) {
  // Initialize converter with input file
  const converter = new groupdocs.Converter(inputFilePath);

  // Configure PDF conversion options
  const convertOptions = new groupdocs.PdfConvertOptions();

  // Set output file path
  const outputPath = `${outputFolder}/OutputSpecPages.pdf`;

  // Create list of specific page numbers to convert (1-indexed)
  const pages = new ArrayList();
  pages.add(1); // First page
  pages.add(3); // Third page
  convertOptions.setPages(pages);

  console.log(`\n✓ Convert Specific Pages: ${path.basename(outputPath)}`);
  return converter.convert(outputPath, convertOptions);
}

module.exports = convertSpecificPages;
