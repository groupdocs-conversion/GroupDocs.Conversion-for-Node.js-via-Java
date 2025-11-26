const path = require('path');

/**
 * This example demonstrates how to convert a text file to PDF with controlled trailing spaces behavior.
 *
 * Trailing spaces can be trimmed to clean up the document formatting.
 *
 * @param {Object} groupdocs - The GroupDocs.Conversion library instance
 * @param {string} inputFilePath - Path to the input text file
 * @param {string} outputFolder - Path to the output folder
 * @returns {Promise} Promise that resolves when conversion is complete
 */
async function convertTxtByControllingTrailingSpacesBehavior(groupdocs, inputFilePath, outputFolder) {
  // Configure Text load options
  const loadOptions = new groupdocs.TxtLoadOptions();
  loadOptions.setTrailingSpacesOptions(groupdocs.TxtTrailingSpacesOptions.Trim); // Trim trailing spaces

  // Set output file path
  const outputPath = `${outputFolder}/ConvertTxtByControllingTrailingSpacesBehavior.pdf`;

  // Initialize converter with input file and load options
  const converter = new groupdocs.Converter(inputFilePath, loadOptions);

  // Configure PDF conversion options
  const convertOptions = new groupdocs.PdfConvertOptions();

  console.log(`\n✓ Text Control Trailing Spaces: ${path.basename(outputPath)}`);
  return converter.convert(outputPath, convertOptions);
}

module.exports = convertTxtByControllingTrailingSpacesBehavior;
