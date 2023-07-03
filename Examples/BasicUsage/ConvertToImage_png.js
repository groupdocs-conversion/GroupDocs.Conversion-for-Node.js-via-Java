// TODO: Now it produces empty results. Should be implemented like exports.Workbook.createWorkbookFromStream from aspose.cells.js
const util = require('util')
const fs = require('fs')

async function convertToImagePng(groupdocs, inputFilePath, outputFolder) {
  const outputFileTemplate = `${outputFolder}converted-page-%d.png`

  const getPageStream = fs.createWriteStream(util.format(outputFileTemplate, 1))
  const converter = new groupdocs.conversion.Converter(inputFilePath)

  const convertOptions = new groupdocs.conversion.ImageConvertOptions()
  convertOptions.setFormat(groupdocs.conversion.ImageFileType.Png)
  convertOptions.setPagesCount(1)

  console.log(`Converted to ${outputFolder}`)
  return converter.convert(getPageStream, convertOptions)
}

module.exports = convertToImagePng
