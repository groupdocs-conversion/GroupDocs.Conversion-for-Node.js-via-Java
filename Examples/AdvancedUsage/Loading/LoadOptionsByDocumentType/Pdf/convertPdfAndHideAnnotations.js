const path = require('path');

/**
 * This example demonstrates how to convert a PDF document to DOCX while hiding annotations.
 *
 * Hiding annotations removes comments, notes, and other annotation elements from the output.
 *
 * @param {Object} groupdocs - The GroupDocs.Conversion library instance
 * @param {string} inputFilePath - Path to the input PDF file
 * @param {string} outputFolder - Path to the output folder
 * @returns {Promise} Promise that resolves when conversion is complete
 */
async function convertPdfAndHideAnnotations(groupdocs, inputFilePath, outputFolder) {
  // Configure PDF load options
  const loadOptions = new groupdocs.PdfLoadOptions();
  loadOptions.setHidePdfAnnotations(true); // Hide all PDF annotations

  // Initialize converter with input file and load options
  const converter = new groupdocs.Converter(inputFilePath, loadOptions);

  // Set output file path
  const outputPath = `${outputFolder}/ConvertPdfAndHideAnnotations.docx`;

  // Configure Word Processing conversion options
  const convertOptions = new groupdocs.WordProcessingConvertOptions();

  console.log(`\n✓ PDF Hide Annotations: ${path.basename(outputPath)}`);
  return converter.convert(outputPath, convertOptions);
}

module.exports = convertPdfAndHideAnnotations;
