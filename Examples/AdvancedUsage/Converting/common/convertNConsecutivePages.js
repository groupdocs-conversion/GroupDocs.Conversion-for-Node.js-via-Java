/**
* This example demonstrates how to convert range of pages
*/
async function convertConsecutivePages(groupdocs, inputFilePath) {
  const converter = new groupdocs.conversion.Converter(inputFilePath)
  const convertOptions = new groupdocs.conversion.PdfConvertOptions()
  const outputPath = `${groupdocs.outputFolder}/OutputNPages.pdf`
  
  convertOptions.setPageNumber(2);
  convertOptions.setPagesCount(2);

  console.log(`Converted to ${outputPath} (n consecutive pages)`)
  return converter.convert(outputPath, convertOptions)
}

module.exports = convertConsecutivePages