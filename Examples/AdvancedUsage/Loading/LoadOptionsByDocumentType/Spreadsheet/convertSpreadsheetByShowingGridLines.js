const path = require('path');

/**
 * This example demonstrates how to convert a spreadsheet to PDF with grid lines visible.
 *
 * @param {Object} groupdocs - The GroupDocs.Conversion library instance
 * @param {string} inputFilePath - Path to the input spreadsheet file
 * @param {string} outputFolder - Path to the output folder
 * @returns {Promise} Promise that resolves when conversion is complete
 */
async function convertSpreadsheetByShowingGridLines(groupdocs, inputFilePath, outputFolder) {
  // Configure Spreadsheet load options
  const loadOptions = new groupdocs.SpreadsheetLoadOptions();
  loadOptions.setShowGridLines(true); // Show grid lines in the output
  loadOptions.setOnePagePerSheet(true); // Render each sheet on a separate page

  // Set output file path
  const outputPath = `${outputFolder}/ConvertSpreadsheetByShowingGridLines.pdf`;

  // Initialize converter with input file and load options
  const converter = new groupdocs.Converter(inputFilePath, loadOptions);

  // Configure PDF conversion options
  const convertOptions = new groupdocs.PdfConvertOptions();

  console.log(`\n✓ Spreadsheet Show Grid Lines: ${path.basename(outputPath)}`);
  return converter.convert(outputPath, convertOptions);
}

module.exports = convertSpreadsheetByShowingGridLines;
