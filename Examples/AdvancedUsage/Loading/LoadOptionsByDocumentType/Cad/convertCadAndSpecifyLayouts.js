const path = require('path');

/**
 * This example demonstrates how to convert a CAD document to PDF with specific layout selection.
 *
 * CAD files can contain multiple layouts. This example converts only selected layouts.
 *
 * @param {Object} groupdocs - The GroupDocs.Conversion library instance
 * @param {string} inputFilePath - Path to the input CAD file
 * @param {string} outputFolder - Path to the output folder
 * @returns {Promise} Promise that resolves when conversion is complete
 */
async function convertCadAndSpecifyLayouts(groupdocs, inputFilePath, outputFolder) {
  // Set output file path
  const outputPath = `${outputFolder}/ConvertCadAndSpecifyLayouts.pdf`;

  // Configure CAD load options
  const loadOptions = new groupdocs.CadLoadOptions();
  loadOptions.setLayoutNames(['Layout1', 'Layout3']); // Specify which layouts to convert

  // Initialize converter with input file and load options (using callback for CAD)
  const converter = new groupdocs.Converter(inputFilePath, () => loadOptions);

  // Configure PDF conversion options
  const convertOptions = new groupdocs.PdfConvertOptions();

  console.log(`\n✓ CAD Specify Layouts: ${path.basename(outputPath)}`);
  return converter.convert(outputPath, convertOptions);
}

module.exports = convertCadAndSpecifyLayouts;
