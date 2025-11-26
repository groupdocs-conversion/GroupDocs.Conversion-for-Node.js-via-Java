const path = require('path');

/**
 * This example demonstrates how to convert a PDF document to DOCX while flattening all form fields.
 *
 * Flattening form fields makes them non-editable and merges them into the document content.
 *
 * @param {Object} groupdocs - The GroupDocs.Conversion library instance
 * @param {string} inputFilePath - Path to the input PDF file
 * @param {string} outputFolder - Path to the output folder
 * @returns {Promise} Promise that resolves when conversion is complete
 */
async function convertPdfAndFlattenAllFields(groupdocs, inputFilePath, outputFolder) {
  // Configure PDF load options
  const loadOptions = new groupdocs.PdfLoadOptions();
  loadOptions.setFlattenAllFields(true); // Flatten all form fields

  // Initialize converter with input file and load options
  const converter = new groupdocs.Converter(inputFilePath, loadOptions);

  // Set output file path
  const outputPath = `${outputFolder}/ConvertPdfAndFlattenAllFields.docx`;

  // Configure Word Processing conversion options
  const convertOptions = new groupdocs.WordProcessingConvertOptions();

  console.log(`\n✓ PDF Flatten Fields: ${path.basename(outputPath)}`);
  return converter.convert(outputPath, convertOptions);
}

module.exports = convertPdfAndFlattenAllFields;
