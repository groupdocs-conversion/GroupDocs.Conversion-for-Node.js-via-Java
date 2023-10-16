const util = require('util')
const fs = require('fs')
const java = require('java')
/**
 * This example demonstrates how to convert a pdf document to image with advanced options
 */
async function convertToImageWithAdvancedOptions(groupdocs, inputFilePath) {
  const outputFileTemplate = "ConvertToImageWithAdvancedOptions-converted-page-%s.png"; 
  try {
    const getPageStream = fs.createWriteStream(util.format(outputFileTemplate, 1))

    const converter = new groupdocs.conversion.Converter(inputFilePath)
    const convertOptions = new groupdocs.conversion.ImageConvertOptions();
    
    convertOptions.setFormat(groupdocs.conversion.ImageFileType.Png);
    convertOptions.setFlipMode(groupdocs.conversion.ImageFlipModes.FlipY);
    convertOptions.setBrightness(50);
    convertOptions.setContrast(50);
    convertOptions.setGamma(java.newFloat(0.5));
    convertOptions.setGrayscale(true);
    convertOptions.setHorizontalResolution(300);
    convertOptions.setVerticalResolution(100);
    convertOptions.setPageNumber(1);
    convertOptions.setPagesCount(1);

    return converter.convert(getPageStream, convertOptions)
  } catch (e) {
    console.error(e)
  }
}

module.exports = convertToImageWithAdvancedOptions
