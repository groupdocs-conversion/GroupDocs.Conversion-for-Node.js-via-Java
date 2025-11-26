const path = require('path');

/**
 * This example demonstrates how to convert a CSV file to PDF with a custom delimiter.
 *
 * Specifying the delimiter ensures correct parsing of CSV files that use non-standard separators.
 *
 * @param {Object} groupdocs - The GroupDocs.Conversion library instance
 * @param {string} inputFilePath - Path to the input CSV file
 * @param {string} outputFolder - Path to the output folder
 * @returns {Promise} Promise that resolves when conversion is complete
 */
async function convertCsvBySpecifyingDelimiter(groupdocs, inputFilePath, outputFolder) {
  // Configure CSV load options
  const loadOptions = new groupdocs.CsvLoadOptions();
  loadOptions.setSeparator(','); // Set comma as the field separator

  // Set output file path
  const outputPath = `${outputFolder}/ConvertCsvBySpecifyingDelimiter.pdf`;

  // Initialize converter with input file and load options
  const converter = new groupdocs.Converter(inputFilePath, loadOptions);

  // Configure PDF conversion options
  const convertOptions = new groupdocs.PdfConvertOptions();

  console.log(`\n✓ CSV Specify Delimiter: ${path.basename(outputPath)}`);
  return converter.convert(outputPath, convertOptions);
}

module.exports = convertCsvBySpecifyingDelimiter;
