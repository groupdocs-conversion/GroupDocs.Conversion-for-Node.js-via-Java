const java = require('java')
const Color = java.import('java.awt.Color')

/**
 * This example demonstrates how to add watermark during conversion
 */
async function addWatermark(groupdocs, inputFilePath) {
  const outputPath = `${groupdocs.outputFolder}/AddWatermark.pdf`

  const converter = new groupdocs.conversion.Converter(inputFilePath)
  const convertOptions = new groupdocs.conversion.PdfConvertOptions()
 
  const watermark = new groupdocs.conversion.WatermarkTextOptions("Sample watermark")
  watermark.setColor(Color.red);
  watermark.setWidth(100);
  watermark.setHeight(100);
  watermark.setBackground(true);
 
  convertOptions.setWatermark(watermark);

  console.log(`Document converted successfully to ${outputPath}.`)
  return converter.convert(outputPath, convertOptions)
}

module.exports = addWatermark