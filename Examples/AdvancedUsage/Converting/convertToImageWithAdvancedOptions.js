const path = require('path');

/**
 * This example demonstrates how to convert a PDF document to PNG images with advanced options.
 *
 * Advanced options include: image format, flip mode, brightness, contrast, gamma, grayscale,
 * resolution settings, and page range selection.
 *
 * @param {Object} groupdocs - The GroupDocs.Conversion library instance
 * @param {string} inputFilePath - Path to the input PDF file
 * @param {string} outputFolder - Path to the output folder
 * @returns {Promise} Promise that resolves when conversion is complete
 */
async function convertToImageWithAdvancedOptions(groupdocs, inputFilePath, outputFolder) {
  // Define output file template with page number placeholder
  const outputFileTemplate = 'ConvertToImageWithAdvancedOptions-page-.png';
  const outputPath = `${outputFolder}/${outputFileTemplate}`;

  try {
    // Initialize converter with input file
    const converter = new groupdocs.Converter(inputFilePath);

    // Configure image conversion options with advanced settings
    const convertOptions = new groupdocs.ImageConvertOptions();

    // Set image format
    convertOptions.setFormat(groupdocs.ImageFileType.Png);

    // Configure image transformations
    convertOptions.setFlipMode(groupdocs.ImageFlipModes.FlipY); // Flip vertically
    convertOptions.setBrightness(50); // Adjust brightness
    convertOptions.setContrast(50); // Adjust contrast
    convertOptions.setGamma(0.5); // Adjust gamma correction
    convertOptions.setGrayscale(true); // Convert to grayscale

    // Set resolution
    convertOptions.setHorizontalResolution(300); // 300 DPI horizontal
    convertOptions.setVerticalResolution(100); // 100 DPI vertical

    // Set page range: start from page 1, convert 2 pages
    convertOptions.setPageNumber(1);
    convertOptions.setPagesCount(2);

    console.log(`\n✓ Convert to Image (Advanced): ${path.basename(outputFileTemplate)}`);
    return converter.convert(outputPath, convertOptions);
  } catch (error) {
    console.error('Error during conversion:', error);
    throw error;
  }
}

module.exports = convertToImageWithAdvancedOptions;
