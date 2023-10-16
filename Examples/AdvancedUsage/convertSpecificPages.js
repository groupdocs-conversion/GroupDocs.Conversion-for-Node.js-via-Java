const ArrayList = require('java').import('java.util.ArrayList');
/**
 * This example demonstrates how to convert specific pages
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