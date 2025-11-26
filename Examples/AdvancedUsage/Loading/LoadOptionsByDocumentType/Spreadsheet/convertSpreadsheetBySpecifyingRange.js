const path = require('path');

/**
 * This example demonstrates how to convert a spreadsheet to PDF with a specific row range.
 *
 * Specifying a range allows converting only specific rows (e.g., rows 10-30) from the spreadsheet.
 *
 * @param {Object} groupdocs - The GroupDocs.Conversion library instance
 * @param {string} inputFilePath - Path to the input spreadsheet file
 * @param {string} outputFolder - Path to the output folder
 * @returns {Promise} Promise that resolves when conversion is complete
 */
async function convertSpreadsheetBySpecifyingRange(groupdocs, inputFilePath, outputFolder) {
  // Configure Spreadsheet load options
  const loadOptions = new groupdocs.SpreadsheetLoadOptions();
  loadOptions.setConvertRange('10:30'); // Convert rows 10 to 30
  loadOptions.setOnePagePerSheet(true); // Render each sheet on a separate page

  // Set output file path
  const outputPath = `${outputFolder}/ConvertSpreadsheetBySpecifyingRange.pdf`;

  // Initialize converter with input file and load options
  const converter = new groupdocs.Converter(inputFilePath, loadOptions);

  // Configure PDF conversion options
  const convertOptions = new groupdocs.PdfConvertOptions();

  console.log(`\n✓ Spreadsheet Specify Range: ${path.basename(outputPath)}`);
  return converter.convert(outputPath, convertOptions);
}

module.exports = convertSpreadsheetBySpecifyingRange;
