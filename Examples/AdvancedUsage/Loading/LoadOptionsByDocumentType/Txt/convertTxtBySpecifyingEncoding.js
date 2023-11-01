/**
* This example demonstrates how to convert a txt document to pdf with advanced options
*/
async function convertTxtBySpecifyingEncoding(groupdocs, inputFilePath) {
  const loadOptions = new groupdocs.conversion.TxtLoadOptions()
  loadOptions.setEncoding("Shift_JIS")
  
  const outputPath = `${groupdocs.outputFolder}/ConvertTxtBySpecifyingEncoding.pdf`
  
  const converter = new groupdocs.conversion.Converter(inputFilePath, loadOptions)
  const convertOptions = new groupdocs.conversion.PdfConvertOptions()

  console.log(`Txt document converted successfully to ${outputPath} (by specifying encoding)`)
  return converter.convert(outputPath, convertOptions)
}

module.exports = convertTxtBySpecifyingEncoding