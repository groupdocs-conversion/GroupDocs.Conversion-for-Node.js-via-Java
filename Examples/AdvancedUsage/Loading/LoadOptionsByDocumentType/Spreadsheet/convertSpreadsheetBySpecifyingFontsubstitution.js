const java = require('java');
const path = require('path');

/**
 * This example demonstrates how to convert a spreadsheet to PDF with custom font substitution.
 *
 * Font substitution allows replacing unavailable fonts with specified alternatives.
 *
 * @param {Object} groupdocs - The GroupDocs.Conversion library instance
 * @param {string} inputFilePath - Path to the input spreadsheet file
 * @param {string} outputFolder - Path to the output folder
 * @returns {Promise} Promise that resolves when conversion is complete
 */
async function convertSpreadsheetBySpecifyingFontsubstitution(groupdocs, inputFilePath, outputFolder) {
  // Set output file path
  const outputPath = `${outputFolder}/ConvertSpreadsheetBySpecifyingFontsubstitution.pdf`;

  // Create font substitution list
  const fontSubstitutes = java.newInstanceSync('java.util.ArrayList');
  fontSubstitutes.add(groupdocs.FontSubstitute.create('Tahoma', 'Arial'));
  fontSubstitutes.add(groupdocs.FontSubstitute.create('Times New Roman', 'Arial'));

  // Configure Spreadsheet load options
  const loadOptions = new groupdocs.SpreadsheetLoadOptions();
  loadOptions.setDefaultFont('Helvetica.ttf'); // Set default font
  loadOptions.setOnePagePerSheet(true); // Render each sheet on a separate page
  loadOptions.setFontSubstitutes(fontSubstitutes); // Apply custom font substitutions

  // Initialize converter with input file and load options
  const converter = new groupdocs.Converter(inputFilePath, loadOptions);

  // Configure PDF conversion options
  const convertOptions = new groupdocs.PdfConvertOptions();

  console.log(`\n✓ Spreadsheet Font Substitution: ${path.basename(outputPath)}`);
  return converter.convert(outputPath, convertOptions);
}

module.exports = convertSpreadsheetBySpecifyingFontsubstitution;
