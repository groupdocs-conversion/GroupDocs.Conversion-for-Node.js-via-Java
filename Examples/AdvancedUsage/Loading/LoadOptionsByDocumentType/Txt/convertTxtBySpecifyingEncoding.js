const path = require('path');

/**
 * This example demonstrates how to convert a text file to PDF with a specific encoding.
 *
 * Specifying encoding is important for correctly reading text files that use non-standard
 * character encodings like Shift-JIS (Japanese).
 *
 * @param {Object} groupdocs - The GroupDocs.Conversion library instance
 * @param {string} inputFilePath - Path to the input text file
 * @param {string} outputFolder - Path to the output folder
 * @returns {Promise} Promise that resolves when conversion is complete
 */
async function convertTxtBySpecifyingEncoding(groupdocs, inputFilePath, outputFolder) {
  // Configure Text load options
  const loadOptions = new groupdocs.TxtLoadOptions();
  loadOptions.setEncoding('Shift_JIS'); // Set encoding to Shift-JIS (Japanese)

  // Set output file path
  const outputPath = `${outputFolder}/ConvertTxtBySpecifyingEncoding.pdf`;

  // Initialize converter with input file and load options
  const converter = new groupdocs.Converter(inputFilePath, loadOptions);

  // Configure PDF conversion options
  const convertOptions = new groupdocs.PdfConvertOptions();

  console.log(`\n✓ Text Specify Encoding: ${path.basename(outputPath)}`);
  return converter.convert(outputPath, convertOptions);
}

module.exports = convertTxtBySpecifyingEncoding;
