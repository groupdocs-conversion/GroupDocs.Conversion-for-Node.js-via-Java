const path = require('path');

/**
 * This example demonstrates how to convert a presentation to PDF including hidden slides.
 *
 * By default, hidden slides are excluded from conversion. This option includes them.
 *
 * @param {Object} groupdocs - The GroupDocs.Conversion library instance
 * @param {string} inputFilePath - Path to the input presentation file
 * @param {string} outputFolder - Path to the output folder
 * @returns {Promise} Promise that resolves when conversion is complete
 */
async function convertPresentationWithHiddenSlidesIncluded(groupdocs, inputFilePath, outputFolder) {
  // Configure Presentation load options
  const loadOptions = new groupdocs.PresentationLoadOptions();
  loadOptions.setShowHiddenSlides(true); // Include hidden slides in conversion

  // Set output file path
  const outputPath = `${outputFolder}/ConvertPresentationWithHiddenSlidesIncluded.pdf`;

  // Initialize converter with input file and load options
  const converter = new groupdocs.Converter(inputFilePath, loadOptions);

  // Configure PDF conversion options
  const convertOptions = new groupdocs.PdfConvertOptions();

  console.log(`\n✓ Presentation Include Hidden Slides: ${path.basename(outputPath)}`);
  return converter.convert(outputPath, convertOptions);
}

module.exports = convertPresentationWithHiddenSlidesIncluded;
