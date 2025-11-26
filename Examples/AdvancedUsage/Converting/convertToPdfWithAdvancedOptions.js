const path = require('path');

/**
 * This example demonstrates how to convert a password-protected document to PDF with advanced options.
 *
 * Advanced options include: specific page selection, rotation, DPI, and custom dimensions.
 *
 * @param {Object} groupdocs - The GroupDocs.Conversion library instance
 * @param {string} inputFilePath - Path to the password-protected input document file
 * @param {string} outputFolder - Path to the output folder
 * @returns {Promise} Promise that resolves when conversion is complete
 */
async function convertToPdfWithAdvancedOptions(groupdocs, inputFilePath, outputFolder) {
  // Configure load options for password-protected document
  const loadOptions = new groupdocs.WordProcessingLoadOptions();
  loadOptions.setPassword('12345');

  // Initialize converter with input file and load options
  const converter = new groupdocs.Converter(inputFilePath, loadOptions);

  // Set output file path
  const outputPath = `${outputFolder}/ConvertToPdfWithAdvancedOptions.pdf`;

  // Configure PDF conversion options with advanced settings
  const convertOptions = new groupdocs.PdfConvertOptions();
  convertOptions.setPageNumber(2); // Start from page 2
  convertOptions.setPagesCount(1); // Convert only 1 page
  convertOptions.setRotate(groupdocs.Rotation.On180); // Rotate 180 degrees
  convertOptions.setDpi(300); // Set resolution to 300 DPI
  convertOptions.setWidth(1024); // Set output width
  convertOptions.setHeight(768); // Set output height

  console.log(`\n✓ Convert to PDF (Advanced): ${path.basename(outputPath)}`);
  return converter.convert(outputPath, convertOptions);
}

module.exports = convertToPdfWithAdvancedOptions;
