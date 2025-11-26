const path = require('path');

/**
 * This example demonstrates how to convert a text file to PDF with controlled leading spaces behavior.
 *
 * Leading spaces can be converted to indentation for better document formatting.
 *
 * @param {Object} groupdocs - The GroupDocs.Conversion library instance
 * @param {string} inputFilePath - Path to the input text file
 * @param {string} outputFolder - Path to the output folder
 * @returns {Promise} Promise that resolves when conversion is complete
 */
async function convertTxtByControllingLeadingSpacesBehavior(groupdocs, inputFilePath, outputFolder) {
  // Configure Text load options
  const loadOptions = new groupdocs.TxtLoadOptions();
  // Convert leading spaces to indentation
  loadOptions.setLeadingSpacesOptions(groupdocs.TxtLeadingSpacesOptions.ConvertToIndent);
  // Detect numbered lists with whitespaces
  loadOptions.setDetectNumberingWithWhitespaces(true);

  // Set output file path
  const outputPath = `${outputFolder}/ConvertTxtByControllingLeadingSpacesBehavior.pdf`;

  // Initialize converter with input file and load options
  const converter = new groupdocs.Converter(inputFilePath, loadOptions);

  // Configure PDF conversion options
  const convertOptions = new groupdocs.PdfConvertOptions();

  console.log(`\n✓ Text Control Leading Spaces: ${path.basename(outputPath)}`);
  return converter.convert(outputPath, convertOptions);
}

module.exports = convertTxtByControllingLeadingSpacesBehavior;
