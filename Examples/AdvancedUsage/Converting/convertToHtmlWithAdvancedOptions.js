const path = require('path');

/**
 * This example demonstrates how to convert a password-protected document to HTML with advanced options.
 *
 * Advanced options include: specific page selection and fixed layout mode.
 *
 * @param {Object} groupdocs - The GroupDocs.Conversion library instance
 * @param {string} inputFilePath - Path to the password-protected input document file
 * @param {string} outputFolder - Path to the output folder
 * @returns {Promise} Promise that resolves when conversion is complete
 */
async function convertToHtmlWithAdvancedOptions(groupdocs, inputFilePath, outputFolder) {
  // Configure load options for password-protected document
  const loadOptions = new groupdocs.WordProcessingLoadOptions();
  loadOptions.setPassword('12345');

  // Initialize converter with input file and load options
  const converter = new groupdocs.Converter(inputFilePath, loadOptions);

  // Set output file path
  const outputPath = `${outputFolder}/ConvertToHtmlWithAdvancedOptions.html`;

  // Configure HTML conversion options with advanced settings
  const convertOptions = new groupdocs.MarkupConvertOptions();
  convertOptions.setPageNumber(2); // Start from page 2
  convertOptions.setFixedLayout(true); // Use fixed layout for better formatting
  convertOptions.setPagesCount(1); // Convert only 1 page

  console.log(`\n✓ Convert to HTML (Advanced): ${path.basename(outputPath)}`);
  return converter.convert(outputPath, convertOptions);
}

module.exports = convertToHtmlWithAdvancedOptions;

