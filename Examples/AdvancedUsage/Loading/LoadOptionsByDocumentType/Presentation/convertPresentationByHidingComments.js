const path = require('path');

/**
 * This example demonstrates how to convert a presentation to PDF while hiding comments.
 *
 * @param {Object} groupdocs - The GroupDocs.Conversion library instance
 * @param {string} inputFilePath - Path to the input presentation file
 * @param {string} outputFolder - Path to the output folder
 * @returns {Promise} Promise that resolves when conversion is complete
 */
async function convertPresentationByHidingComments(groupdocs, inputFilePath, outputFolder) {
  // Configure Presentation load options
  const loadOptions = new groupdocs.PresentationLoadOptions();
  loadOptions.setHideComments(true); // Hide comments in the output

  // Set output file path
  const outputPath = `${outputFolder}/ConvertPresentationByHidingComments.pdf`;

  // Initialize converter with input file and load options
  const converter = new groupdocs.Converter(inputFilePath, loadOptions);

  // Configure PDF conversion options
  const convertOptions = new groupdocs.PdfConvertOptions();

  console.log(`\n✓ Presentation Hide Comments: ${path.basename(outputPath)}`);
  return converter.convert(outputPath, convertOptions);
}

module.exports = convertPresentationByHidingComments;
