const path = require('path');

/**
 * This example demonstrates how to convert a PDF document to DOCX while removing embedded files.
 *
 * Removing embedded files excludes attachments and other embedded content from the conversion.
 *
 * @param {Object} groupdocs - The GroupDocs.Conversion library instance
 * @param {string} inputFilePath - Path to the input PDF file
 * @param {string} outputFolder - Path to the output folder
 * @returns {Promise} Promise that resolves when conversion is complete
 */
async function convertPdfAndRemoveEmbeddedFiles(groupdocs, inputFilePath, outputFolder) {
  // Configure PDF load options
  const loadOptions = new groupdocs.PdfLoadOptions();
  loadOptions.setRemoveEmbeddedFiles(true); // Remove embedded files from PDF

  // Initialize converter with input file and load options
  const converter = new groupdocs.Converter(inputFilePath, loadOptions);

  // Set output file path
  const outputPath = `${outputFolder}/ConvertPdfAndRemoveEmbeddedFiles.docx`;

  // Configure Word Processing conversion options
  const convertOptions = new groupdocs.WordProcessingConvertOptions();

  console.log(`\n✓ PDF Remove Embedded Files: ${path.basename(outputPath)}`);
  return converter.convert(outputPath, convertOptions);
}

module.exports = convertPdfAndRemoveEmbeddedFiles;
