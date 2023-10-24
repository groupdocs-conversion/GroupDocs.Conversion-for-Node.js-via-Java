/**
* This example demonstrates how to convert a txt document to pdf with advanced options
*/
async function convertTxtByControllingLeadingSpacesBehavior(groupdocs, inputFilePath) {
  const loadOptions = new groupdocs.conversion.TxtLoadOptions()
  loadOptions.setLeadingSpacesOptions(groupdocs.conversion.TxtLeadingSpacesOptions.ConvertToIndent);
  loadOptions.setDetectNumberingWithWhitespaces(true);

  const outputPath = `${groupdocs.outputFolder}/ConvertTxtByControllingLeadingSpacesBehavior.pdf`
  
  const converter = new groupdocs.conversion.Converter(inputFilePath, loadOptions)
  const convertOptions = new groupdocs.conversion.PdfConvertOptions()

  console.log(`Txt document converted successfully to ${outputPath} (by controlling leading spaces behavior)`)
  return converter.convert(outputPath, convertOptions)
}

module.exports = convertTxtByControllingLeadingSpacesBehavior