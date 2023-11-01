/**
 * This example demonstrates how to convert a cad document to pdf with advanced options
 */
async function convertCadAndSpecifyLayouts(groupdocs, inputFilePath) {

  const outputPath = `${groupdocs.outputFolder}/ConvertCadAndSpecifyLayouts.pdf`
  
  const loadOptions = new groupdocs.conversion.CadLoadOptions()

  loadOptions.setLayoutNames(["Layout1", "Layout3"]);
  const converter = new groupdocs.conversion.Converter(inputFilePath, () => loadOptions);

  const convertOptions = new groupdocs.conversion.PdfConvertOptions()
  console.log(`Cad document converted successfully to ${outputPath} (cad & specify layouts)`)
  return converter.convert(outputPath, convertOptions)
}

module.exports = convertCadAndSpecifyLayouts