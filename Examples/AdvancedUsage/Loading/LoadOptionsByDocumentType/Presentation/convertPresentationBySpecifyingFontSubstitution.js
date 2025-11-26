const java = require('java');
const path = require('path');

/**
 * This example demonstrates how to convert a presentation to PDF with custom font substitution.
 *
 * Font substitution allows replacing unavailable fonts with specified alternatives.
 *
 * @param {Object} groupdocs - The GroupDocs.Conversion library instance
 * @param {string} inputFilePath - Path to the input presentation file
 * @param {string} outputFolder - Path to the output folder
 * @returns {Promise} Promise that resolves when conversion is complete
 */
async function convertPresentationBySpecifyingFontSubstitution(groupdocs, inputFilePath, outputFolder) {
  // Set output file path
  const outputPath = `${outputFolder}/ConvertPresentationBySpecifyingFontSubstitution.pdf`;

  // Create font substitution list
  const fontSubstitutes = java.newInstanceSync('java.util.ArrayList');
  fontSubstitutes.add(groupdocs.FontSubstitute.create('Tahoma', 'Arial'));
  fontSubstitutes.add(groupdocs.FontSubstitute.create('Times New Roman', 'Arial'));

  // Configure Presentation load options
  const loadOptions = new groupdocs.PresentationLoadOptions();
  loadOptions.setDefaultFont('Helvetica.ttf'); // Set default font
  loadOptions.setFontSubstitutes(fontSubstitutes); // Apply custom font substitutions

  // Initialize converter with input file and load options
  const converter = new groupdocs.Converter(inputFilePath, loadOptions);

  // Configure PDF conversion options
  const convertOptions = new groupdocs.PdfConvertOptions();

  console.log(`\n✓ Presentation Font Substitution: ${path.basename(outputPath)}`);
  return converter.convert(outputPath, convertOptions);
}

module.exports = convertPresentationBySpecifyingFontSubstitution;
