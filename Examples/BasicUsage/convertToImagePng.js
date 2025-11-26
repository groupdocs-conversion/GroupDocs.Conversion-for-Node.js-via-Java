const util = require('util');
const fs = require('fs');
const path = require('path');

/**
 * This example demonstrates how to convert a DOCX file to PNG image format.
 *
 * For more details about Microsoft Word Open XML Document (.docx) to Portable Network Graphic
 * (.png) conversion, please check: https://docs.groupdocs.com/conversion
 *
 * @param {Object} groupdocs - The GroupDocs.Conversion library instance
 * @param {string} inputFilePath - Path to the input DOCX file
 * @param {string} outputFolder - Path to the output folder
 * @returns {Promise} Promise that resolves when conversion is complete
 */
async function convertToImagePng(groupdocs, inputFilePath, outputFolder) {
  // Define output file template with page number placeholder
  const outputFileTemplate = `${outputFolder}/Converted-page-%d.png`;

  // Create write stream for the first page
  const getPageStream = fs.createWriteStream(util.format(outputFileTemplate, 1));

  // Initialize converter with input file
  const converter = new groupdocs.Converter(inputFilePath);

  // Configure image conversion options
  const convertOptions = new groupdocs.ImageConvertOptions();
  convertOptions.setFormat(groupdocs.ImageFileType.Png);
  convertOptions.setPagesCount(1); // Convert only the first page

  console.log(`\n✓ Convert to PNG Image: ${path.basename(util.format(outputFileTemplate, 1))}`);
  return converter.convert(getPageStream, convertOptions);
}

module.exports = convertToImagePng;
