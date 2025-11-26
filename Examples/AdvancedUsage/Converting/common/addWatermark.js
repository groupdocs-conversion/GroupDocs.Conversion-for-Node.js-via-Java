const path = require('path');

/**
 * This example demonstrates how to add a watermark to a document during conversion.
 *
 * @param {Object} groupdocs - The GroupDocs.Conversion library instance
 * @param {string} inputFilePath - Path to the input document file
 * @param {string} outputFolder - Path to the output folder
 * @returns {Promise} Promise that resolves when conversion is complete
 */
async function addWatermark(groupdocs, inputFilePath, outputFolder) {
  // Set output file path
  const outputPath = `${outputFolder}/AddWatermark.pdf`;

  // Initialize converter with input file
  const converter = new groupdocs.Converter(inputFilePath);

  // Configure PDF conversion options
  const convertOptions = new groupdocs.PdfConvertOptions();

  // Create and configure watermark text options
  const watermark = new groupdocs.WatermarkTextOptions('Sample watermark');
  watermark.setColor('red');
  watermark.setWidth(100);
  watermark.setHeight(100);
  watermark.setBackground(true);

  // Apply watermark to conversion options
  convertOptions.setWatermark(watermark);

  console.log(`\n✓ Add Watermark: ${path.basename(outputPath)}`);
  return converter.convert(outputPath, convertOptions);
}

module.exports = addWatermark;
