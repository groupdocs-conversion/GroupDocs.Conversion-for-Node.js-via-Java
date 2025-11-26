const path = require('path');

/**
 * This example demonstrates how to convert a PDF document to DOCX with advanced options.
 *
 * Advanced options include: specific page selection and output format specification.
 *
 * @param {Object} groupdocs - The GroupDocs.Conversion library instance
 * @param {string} inputFilePath - Path to the input PDF file
 * @param {string} outputFolder - Path to the output folder
 * @returns {Promise} Promise that resolves when conversion is complete
 */
async function convertToWordProcessingWithAdvancedOptions(groupdocs, inputFilePath, outputFolder) {
  // Initialize converter with input file
  const converter = new groupdocs.Converter(inputFilePath);

  // Set output file path
  const outputPath = `${outputFolder}/ConvertToWordProcessingWithAdvancedOptions.docx`;

  // Configure Word Processing conversion options with advanced settings
  const convertOptions = new groupdocs.WordProcessingConvertOptions();
  convertOptions.setPageNumber(2); // Start from page 2
  convertOptions.setPagesCount(1); // Convert only 1 page
  convertOptions.setFormat(groupdocs.WordProcessingFileType.Docx); // Specify DOCX format

  console.log(`\n✓ Convert to Word Processing (Advanced): ${path.basename(outputPath)}`);
  return converter.convert(outputPath, convertOptions);
}

module.exports = convertToWordProcessingWithAdvancedOptions;
