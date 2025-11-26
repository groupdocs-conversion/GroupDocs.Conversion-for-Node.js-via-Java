const path = require('path');

/**
 * This example demonstrates how to convert a Word document to PDF while hiding tracked changes.
 *
 * Hiding tracked changes removes revision marks and shows the final version of the document.
 *
 * @param {Object} groupdocs - The GroupDocs.Conversion library instance
 * @param {string} inputFilePath - Path to the input Word document file
 * @param {string} outputFolder - Path to the output folder
 * @returns {Promise} Promise that resolves when conversion is complete
 */
async function convertWordProcessingByHidingTrackedChanges(groupdocs, inputFilePath, outputFolder) {
  // Configure Word Processing load options
  const loadOptions = new groupdocs.WordProcessingLoadOptions();
  loadOptions.setHideWordTrackedChanges(true); // Hide tracked changes

  // Set output file path
  const outputPath = `${outputFolder}/ConvertWordProcessingByHidingTrackedChanges.pdf`;

  // Initialize converter with input file and load options
  const converter = new groupdocs.Converter(inputFilePath, loadOptions);

  // Configure PDF conversion options
  const convertOptions = new groupdocs.PdfConvertOptions();

  console.log(`\n✓ Word Hide Tracked Changes: ${path.basename(outputPath)}`);
  return converter.convert(outputPath, convertOptions);
}

module.exports = convertWordProcessingByHidingTrackedChanges;
