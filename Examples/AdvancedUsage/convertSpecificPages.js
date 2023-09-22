const ArrayList = require('java').import('java.util.ArrayList');
/**
 * This example demonstrates how to convert first and third pages from the source document
 * For more details about Microsoft Word Open XML Document (.docx) to Portable Document (.pdf) conversion please check this documentation article 
 * https://docs.groupdocs.com/conversion
 */
async function convertSpecificPages(groupdocs, inputFilePath) {
  const converter = new groupdocs.conversion.Converter(inputFilePath)
  const convertOptions = new groupdocs.conversion.PdfConvertOptions()
  const outputPath = `${groupdocs.outputFolder}/outputSpecPages.pdf`
  
  const pages = new ArrayList()
  pages.add(1)
  pages.add(3)
  convertOptions.setPages(pages);

  console.log(`Converted to ${outputPath}`)
  return converter.convert(outputPath, convertOptions)
}

module.exports = convertSpecificPages