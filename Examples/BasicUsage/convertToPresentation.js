const path = require('path');

/**
 * This example demonstrates how to convert a DOCX file to PPTX format.
 *
 * For more details about Microsoft Word Open XML Document (.docx) to PowerPoint Open XML
 * Presentation (.pptx) conversion, please check: https://docs.groupdocs.com/conversion
 *
 * @param {Object} groupdocs - The GroupDocs.Conversion library instance
 * @param {string} inputFilePath - Path to the input DOCX file
 * @param {string} outputFolder - Path to the output folder
 * @returns {Promise} Promise that resolves when conversion is complete
 */
async function convertToPresentation(groupdocs, inputFilePath, outputFolder) {
  // Initialize converter with input file
  const converter = new groupdocs.Converter(inputFilePath);

  // Configure Presentation conversion options
  const convertOptions = new groupdocs.PresentationConvertOptions();

  // Set output file path
  const outputPath = `${outputFolder}/ConvertToPresentation.pptx`;

  console.log(`\n✓ Convert to Presentation: ${path.basename(outputPath)}`);
  return converter.convert(outputPath, convertOptions);
}

module.exports = convertToPresentation;
