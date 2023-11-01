/**
 * This example demonstrates how to convert an email document to pdf with advanced options
 */
async function convertEmailWithAlteringFieldsVisibility(groupdocs, inputFilePath) {
  const outputPath = `${groupdocs.outputFolder}/ConvertEmailWithAlteringFieldsVisibility.pdf`

  const loadOptions = new groupdocs.conversion.EmailLoadOptions();
  loadOptions.setDisplayHeader(false);
  loadOptions.setDisplayFromEmailAddress(false);
  loadOptions.setDisplayToEmailAddress(false);
  loadOptions.setDisplayEmailAddress(false);
  loadOptions.setDisplayCcEmailAddress(false);
  loadOptions.setDisplayBccEmailAddress(false);
  loadOptions.setConvertOwned(false);
  
  const converter = new groupdocs.conversion.Converter(inputFilePath, loadOptions)
  const convertOptions = new groupdocs.conversion.PdfConvertOptions()

  console.log(`Email document converted successfully to ${outputPath} (with altering fields visibility)`)
  return converter.convert(outputPath, convertOptions)
}

module.exports = convertEmailWithAlteringFieldsVisibility