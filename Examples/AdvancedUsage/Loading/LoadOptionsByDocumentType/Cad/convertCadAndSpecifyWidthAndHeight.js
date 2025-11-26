const path = require('path');

/**
 * This example demonstrates how to convert a CAD document to TIFF image with custom dimensions.
 *
 * Specifying width and height allows controlling the output image resolution.
 *
 * @param {Object} groupdocs - The GroupDocs.Conversion library instance
 * @param {string} inputFilePath - Path to the input CAD file
 * @param {string} outputFolder - Path to the output folder
 * @returns {Promise} Promise that resolves when conversion is complete
 */
async function convertCadAndSpecifyWidthAndHeight(groupdocs, inputFilePath, outputFolder) {
  // Set output file path
  const outputPath = `${outputFolder}/convertCadAndSpecifyWidthAndHeight.tiff`;

  // Configure CAD load options with custom dimensions
  const loadOptions = new groupdocs.CadLoadOptions();
  loadOptions.setWidth(1920); // Set output width to 1920 pixels
  loadOptions.setHeight(1080); // Set output height to 1080 pixels

  // Initialize converter with input file and load options (using callback for CAD)
  const converter = new groupdocs.Converter(inputFilePath, () => loadOptions);

  // Configure Image conversion options
  const convertOptions = new groupdocs.ImageConvertOptions();
  convertOptions.setFormat_ConvertOptions_New(groupdocs.ImageFileType.Tiff); // Set output format to TIFF

  console.log(`\n✓ CAD Specify Width/Height: ${path.basename(outputPath)}`);
  return converter.convert(outputPath, convertOptions);
}

module.exports = convertCadAndSpecifyWidthAndHeight;
