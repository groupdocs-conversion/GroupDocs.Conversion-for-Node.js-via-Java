const path = require('path');

/**
 * This example demonstrates how to convert a password-protected document to XLS format with advanced options.
 *
 * Advanced options include: password handling, specific page selection, and output format specification.
 *
 * @param {Object} groupdocs - The GroupDocs.Conversion library instance
 * @param {string} inputFilePath - Path to the password-protected input document file
 * @param {string} outputFolder - Path to the output folder
 * @returns {Promise} Promise that resolves when conversion is complete
 */
async function convertToSpreadsheetWithAdvancedOptions(groupdocs, inputFilePath, outputFolder) {
  // Configure load options for password-protected document
  const loadOptions = new groupdocs.WordProcessingLoadOptions();
  loadOptions.setPassword('12345');

  // Initialize converter with input file and load options
  const converter = new groupdocs.Converter(inputFilePath, loadOptions);

  // Set output file path
  const outputPath = `${outputFolder}/ConvertToSpreadsheetWithAdvancedOptions.xls`;

  // Configure Spreadsheet conversion options with advanced settings
  const convertOptions = new groupdocs.SpreadsheetConvertOptions();
  convertOptions.setPageNumber(2); // Start from page 2
  convertOptions.setPagesCount(1); // Convert only 1 page
  convertOptions.setFormat(groupdocs.SpreadsheetFileType.Xls); // Specify XLS format

  console.log(`\n✓ Convert to Spreadsheet (Advanced): ${path.basename(outputPath)}`);
  return converter.convert(outputPath, convertOptions);
}

module.exports = convertToSpreadsheetWithAdvancedOptions;
