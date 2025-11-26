const path = require('path');

/**
 * This example demonstrates how to convert an email to PDF with custom field visibility settings.
 *
 * Field visibility controls which email metadata fields are displayed in the converted document.
 *
 * @param {Object} groupdocs - The GroupDocs.Conversion library instance
 * @param {string} inputFilePath - Path to the input email file
 * @param {string} outputFolder - Path to the output folder
 * @returns {Promise} Promise that resolves when conversion is complete
 */
async function convertEmailWithAlteringFieldsVisibility(groupdocs, inputFilePath, outputFolder) {
  // Set output file path
  const outputPath = `${outputFolder}/ConvertEmailWithAlteringFieldsVisibility.pdf`;

  // Configure Email load options with field visibility settings
  const loadOptions = new groupdocs.EmailLoadOptions();
  loadOptions.setDisplayHeader(false); // Hide email header
  loadOptions.setDisplayFromEmailAddress(false); // Hide sender address
  loadOptions.setDisplayToEmailAddress(false); // Hide recipient address
  loadOptions.setDisplayEmailAddress(false); // Hide email address
  loadOptions.setDisplayCcEmailAddress(false); // Hide CC addresses
  loadOptions.setDisplayBccEmailAddress(false); // Hide BCC addresses
  loadOptions.setConvertOwned(false); // Don't convert owned items

  // Initialize converter with input file and load options
  const converter = new groupdocs.Converter(inputFilePath, loadOptions);

  // Configure PDF conversion options
  const convertOptions = new groupdocs.PdfConvertOptions();

  console.log(`\n✓ Email Alter Fields Visibility: ${path.basename(outputPath)}`);
  return converter.convert(outputPath, convertOptions);
}

module.exports = convertEmailWithAlteringFieldsVisibility;
