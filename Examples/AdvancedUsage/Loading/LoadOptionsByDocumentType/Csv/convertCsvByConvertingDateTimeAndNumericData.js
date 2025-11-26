const path = require('path');

/**
 * This example demonstrates how to convert a CSV file to PDF with automatic data type conversion.
 *
 * Enabling date/time and numeric conversion ensures proper formatting of these data types.
 *
 * @param {Object} groupdocs - The GroupDocs.Conversion library instance
 * @param {string} inputFilePath - Path to the input CSV file
 * @param {string} outputFolder - Path to the output folder
 * @returns {Promise} Promise that resolves when conversion is complete
 */
async function convertCsvByConvertingDateTimeAndNumericData(groupdocs, inputFilePath, outputFolder) {
  // Configure CSV load options
  const loadOptions = new groupdocs.CsvLoadOptions();
  loadOptions.setConvertDateTimeData(true); // Automatically convert date/time values
  loadOptions.setConvertNumericData(true); // Automatically convert numeric values

  // Set output file path
  const outputPath = `${outputFolder}/ConvertCsvByConvertingDateTimeAndNumericData.pdf`;

  // Initialize converter with input file and load options
  const converter = new groupdocs.Converter(inputFilePath, loadOptions);

  // Configure PDF conversion options
  const convertOptions = new groupdocs.PdfConvertOptions();

  console.log(`\n✓ CSV Convert DateTime/Numeric: ${path.basename(outputPath)}`);
  return converter.convert(outputPath, convertOptions);
}

module.exports = convertCsvByConvertingDateTimeAndNumericData;
