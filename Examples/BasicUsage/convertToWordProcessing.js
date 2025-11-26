const path = require('path');

/**
 * This example demonstrates how to convert a PDF file to DOCX format.
 *
 * For more details about Portable Document (.pdf) to Microsoft Word Open XML Document (.docx)
 * conversion, please check: https://docs.groupdocs.com/conversion
 *
 * @param {Object} groupdocs - The GroupDocs.Conversion library instance
 * @param {string} inputFilePath - Path to the input PDF file
 * @param {string} outputFolder - Path to the output folder
 * @returns {Promise} Promise that resolves when conversion is complete
 */
async function convertToWordProcessing(groupdocs, inputFilePath, outputFolder) {
  // Initialize converter with input file
  const converter = new groupdocs.Converter(inputFilePath);

  // Configure Word Processing conversion options
  const convertOptions = new groupdocs.WordProcessingConvertOptions();

  // Set output file path
  const outputPath = `${outputFolder}/ConvertToWordProcessing.docx`;

  console.log(`\n✓ Convert to Word Processing: ${path.basename(outputPath)}`);
  return converter.convert(outputPath, convertOptions);
}

module.exports = convertToWordProcessing;
