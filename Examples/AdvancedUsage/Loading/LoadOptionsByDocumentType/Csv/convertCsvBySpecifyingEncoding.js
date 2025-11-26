const path = require('path');

/**
 * This example demonstrates how to convert a CSV file to PDF with a specific encoding.
 *
 * Specifying encoding is important for correctly reading CSV files that use non-standard
 * character encodings like Shift-JIS (Japanese).
 *
 * @param {Object} groupdocs - The GroupDocs.Conversion library instance
 * @param {string} inputFilePath - Path to the input CSV file
 * @param {string} outputFolder - Path to the output folder
 * @returns {Promise} Promise that resolves when conversion is complete
 */
async function convertCsvBySpecifyingEncoding(groupdocs, inputFilePath, outputFolder) {
  // Configure CSV load options
  const loadOptions = new groupdocs.CsvLoadOptions();
  loadOptions.setEncoding('Shift_JIS'); // Set encoding to Shift-JIS (Japanese)

  // Set output file path
  const outputPath = `${outputFolder}/ConvertCsvBySpecifyingEncoding.pdf`;

  // Initialize converter with input file and load options
  const converter = new groupdocs.Converter(inputFilePath, loadOptions);

  // Configure PDF conversion options
  const convertOptions = new groupdocs.PdfConvertOptions();

  console.log(`\n✓ CSV Specify Encoding: ${path.basename(outputPath)}`);
  return converter.convert(outputPath, convertOptions);
}

module.exports = convertCsvBySpecifyingEncoding;
