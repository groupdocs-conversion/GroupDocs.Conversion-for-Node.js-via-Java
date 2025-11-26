const path = require('path');

/**
 * This example demonstrates how to convert an XML file to spreadsheet format using it as a data source.
 *
 * When used as a data source, XML is parsed and converted into a structured spreadsheet format.
 *
 * @param {Object} groupdocs - The GroupDocs.Conversion library instance
 * @param {string} inputFilePath - Path to the input XML file
 * @param {string} outputFolder - Path to the output folder
 * @returns {Promise} Promise that resolves when conversion is complete
 */
async function convertXmlAsDataSourceToSpreadsheet(groupdocs, inputFilePath, outputFolder) {
  // Configure XML load options
  const loadOptions = new groupdocs.XmlLoadOptions();
  loadOptions.setUseAsDataSource(true); // Treat XML as a data source

  // Set output file path
  const outputPath = `${outputFolder}/ConvertXmlAsDataSourceToSpreadsheet.xlsx`;

  // Initialize converter with input file and load options
  const converter = new groupdocs.Converter(inputFilePath, loadOptions);

  // Configure Spreadsheet conversion options
  const convertOptions = new groupdocs.SpreadsheetConvertOptions();

  console.log(`\n✓ XML as Data Source: ${path.basename(outputPath)}`);
  return converter.convert(outputPath, convertOptions);
}

module.exports = convertXmlAsDataSourceToSpreadsheet;
