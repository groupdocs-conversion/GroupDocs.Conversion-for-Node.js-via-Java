const path = require('path');

/**
 * This example demonstrates how to convert a document to HTML format.
 *
 * @param {Object} groupdocs - The GroupDocs.Conversion library instance
 * @param {string} inputFilePath - Path to the input document file
 * @param {string} outputFolder - Path to the output folder
 * @returns {Promise} Promise that resolves when conversion is complete
 */
async function convertToHtml(groupdocs, inputFilePath, outputFolder) {
  // Initialize converter with input file
  const converter = new groupdocs.Converter(inputFilePath);

  // Configure HTML conversion options
  const convertOptions = new groupdocs.MarkupConvertOptions();

  // Set output file path
  const outputPath = `${outputFolder}/ConvertToHtml.html`;

  console.log(`\n✓ Convert to HTML: ${path.basename(outputPath)}`);
  return converter.convert(outputPath, convertOptions);
}

module.exports = convertToHtml;
