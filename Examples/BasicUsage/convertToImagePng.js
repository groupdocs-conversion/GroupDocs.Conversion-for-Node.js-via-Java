const util = require('util')
const fs = require('fs')

/** 
 * This example demonstrates how to convert DOCX file into PNG format.
 * For more details about Microsoft Word Open XML Document (.docx) to Portable Network Graphic (.png) conversion please check this documentation article 
 * https://docs.groupdocs.com/conversion
 */
async function convertToImagePng(groupdocs, inputFilePath, outputFolder) {
  const outputFileTemplate = `${outputFolder}/converted-page-%d.png`

  const getPageStream = fs.createWriteStream(util.format(outputFileTemplate, 1))
  const converter = new groupdocs.conversion.Converter(inputFilePath)

  const convertOptions = new groupdocs.conversion.ImageConvertOptions()
  convertOptions.setFormat(groupdocs.conversion.ImageFileType.Png)
  convertOptions.setPagesCount(1)

  console.log(`Converted to ${outputFolder}`)
  return converter.convert(getPageStream, convertOptions)
}

module.exports = convertToImagePng
