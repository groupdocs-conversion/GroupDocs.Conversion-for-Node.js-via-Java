/**
* This example demonstrates how to convert a txt document to pdf with advanced options
*/
async function convertTxtByControllingTrailingSpacesBehavior(groupdocs, inputFilePath) {
  const loadOptions = new groupdocs.conversion.TxtLoadOptions()
  loadOptions.setTrailingSpacesOptions(groupdocs.conversion.TxtTrailingSpacesOptions.Trim);

  const outputPath = `${groupdocs.outputFolder}/ConvertTxtByControllingTrailingSpacesBehavior.pdf`
  
  const converter = new groupdocs.conversion.Converter(inputFilePath, loadOptions)
  const convertOptions = new groupdocs.conversion.PdfConvertOptions()

  console.log(`Txt document converted successfully to ${outputPath} (by controlling trailing spaces behavior)`)
  return converter.convert(outputPath, convertOptions)
}

module.exports = convertTxtByControllingTrailingSpacesBehavior