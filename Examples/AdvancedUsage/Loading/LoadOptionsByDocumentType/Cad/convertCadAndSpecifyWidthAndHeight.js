/**
 * This example demonstrates how to convert a cad document to pdf with advanced options
 */
async function convertCadAndSpecifyWidthAndHeight(groupdocs, inputFilePath) {
  const outputPath = `${groupdocs.outputFolder}/convertCadAndSpecifyWidthAndHeight.tiff`
  
  const loadOptions = new groupdocs.conversion.CadLoadOptions()
  loadOptions.setWidth(1920);
  loadOptions.setHeight(1080);

  const converter = new groupdocs.conversion.Converter(inputFilePath, () => loadOptions);

  const convertOptions = new groupdocs.conversion.ImageConvertOptions();
  convertOptions.setFormat_ConvertOptions_New(groupdocs.conversion.ImageFileType.Tiff);

  console.log(`Cad document converted successfully to ${outputPath} (cad & specify width and height)`)
  return converter.convert(outputPath, convertOptions)
}

module.exports = convertCadAndSpecifyWidthAndHeight