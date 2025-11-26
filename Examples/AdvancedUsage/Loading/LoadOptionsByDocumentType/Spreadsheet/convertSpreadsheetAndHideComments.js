const path = require('path');

/**
 * This example demonstrates how to convert a spreadsheet to PDF while hiding comments.
 *
 * @param {Object} groupdocs - The GroupDocs.Conversion library instance
 * @param {string} inputFilePath - Path to the input spreadsheet file
 * @param {string} outputFolder - Path to the output folder
 * @returns {Promise} Promise that resolves when conversion is complete
 */
async function convertSpreadsheetAndHideComments(groupdocs, inputFilePath, outputFolder) {
  // Configure Spreadsheet load options
  const loadOptions = new groupdocs.SpreadsheetLoadOptions();
  loadOptions.setHideComments(true); // Hide comments in the output
  loadOptions.setOnePagePerSheet(true); // Render each sheet on a separate page

  // Set output file path
  const outputPath = `${outputFolder}/ConvertSpreadsheetAndHideComments.pdf`;

  // Initialize converter with input file and load options
  const converter = new groupdocs.Converter(inputFilePath, loadOptions);

  // Configure PDF conversion options
  const convertOptions = new groupdocs.PdfConvertOptions();

  console.log(`\n✓ Spreadsheet Hide Comments: ${path.basename(outputPath)}`);
  return converter.convert(outputPath, convertOptions);
}

module.exports = convertSpreadsheetAndHideComments;
