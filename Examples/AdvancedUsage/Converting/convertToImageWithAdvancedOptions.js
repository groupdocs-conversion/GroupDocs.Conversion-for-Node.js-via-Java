const fs = require('fs')
const util = require('util')

/**
 * This example demonstrates how to convert a pdf document to image with advanced options
 */
async function convertToImageWithAdvancedOptions(groupdocs, inputFilePath) {
  const outputFileTemplate = "ConvertToImageWithAdvancedOptions-page-.png"; 
  const outputPath = `${groupdocs.outputFolder}/${outputFileTemplate}`
  try {
    const converter = new groupdocs.conversion.Converter(inputFilePath)
    const convertOptions = new groupdocs.conversion.ImageConvertOptions();
    
    convertOptions.setFormat(groupdocs.conversion.ImageFileType.Png);
    convertOptions.setFlipMode(groupdocs.conversion.ImageFlipModes.FlipY);
    convertOptions.setBrightness(50);
    convertOptions.setContrast(50);
    convertOptions.setGamma(0.5);
    convertOptions.setGrayscale(true);
    convertOptions.setHorizontalResolution(300);
    convertOptions.setVerticalResolution(100);
    convertOptions.setPageNumber(1);
    convertOptions.setPagesCount(2);
    
    console.log(`Converted to ${outputPath}`)
    return converter.convert(outputPath, convertOptions)
  } catch (e) {
    console.error(e)
  }
  console.log(outputPath);
}

module.exports = convertToImageWithAdvancedOptions