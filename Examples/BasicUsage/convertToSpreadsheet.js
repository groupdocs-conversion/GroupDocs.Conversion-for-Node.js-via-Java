const path = require('path');

/**
 * This example demonstrates how to convert a DOCX file to XLSX format.
 *
 * For more details about Microsoft Word Open XML Document (.docx) to Microsoft Excel Open XML
 * Spreadsheet (.xlsx) conversion, please check: https://docs.groupdocs.com/conversion
 *
 * @param {Object} groupdocs - The GroupDocs.Conversion library instance
 * @param {string} inputFilePath - Path to the input DOCX file
 * @param {string} outputFolder - Path to the output folder
 * @returns {Promise} Promise that resolves when conversion is complete
 */
async function convertToSpreadsheet(groupdocs, inputFilePath, outputFolder) {
  // Initialize converter with input file
  const converter = new groupdocs.Converter(inputFilePath);

  // Configure Spreadsheet conversion options
  const convertOptions = new groupdocs.SpreadsheetConvertOptions();

  // Set output file path
  const outputPath = `${outputFolder}/ConvertToSpreadsheet.xlsx`;

  console.log(`\n✓ Convert to Spreadsheet: ${path.basename(outputPath)}`);
  return converter.convert(outputPath, convertOptions);
}

module.exports = convertToSpreadsheet;
