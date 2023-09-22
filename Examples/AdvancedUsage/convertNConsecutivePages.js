const ArrayList = require('java').import('java.util.ArrayList');
/**
 * This example demonstrates how to convert 3 consecutive pages starting from second page of the source document
 * For more details about Microsoft Word Open XML Document (.docx) to Portable Document (.pdf) conversion please check this documentation article 
 * https://docs.groupdocs.com/conversion
 */
async function convertConsecutivePages(groupdocs, inputFilePath) {
  const converter = new groupdocs.conversion.Converter(inputFilePath)
  const convertOptions = new groupdocs.conversion.PdfConvertOptions()
  const outputPath = `${groupdocs.outputFolder}/outputNPages.pdf`
  
  convertOptions.setPageNumber(2);
  convertOptions.setPagesCount(2);

  console.log(`Converted to ${outputPath} (n consecutive pages)`)
  return converter.convert(outputPath, convertOptions)
}

module.exports = convertConsecutivePages