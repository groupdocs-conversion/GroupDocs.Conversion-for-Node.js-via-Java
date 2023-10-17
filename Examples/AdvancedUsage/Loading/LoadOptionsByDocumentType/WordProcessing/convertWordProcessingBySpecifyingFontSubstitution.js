const java = require('java') 
/**
 * This example demonstrates how to convert a word-processing document to pdf with advanced options
 */
async function convertWordProcessingBySpecifyingFontSubstitution(groupdocs, inputFilePath) {
  const outputPath = `${groupdocs.outputFolder}/ConvertWordProcessingBySpecifyingFontSubstitution.pdf`

  const fontSubstitutes = java.newInstanceSync("java.util.ArrayList")
  fontSubstitutes.add(groupdocs.conversion.FontSubstitute.create("Tahoma", "Arial"));
  fontSubstitutes.add(groupdocs.conversion.FontSubstitute.create("Times New Roman", "Arial"));

  const loadOptions = new groupdocs.conversion.WordProcessingLoadOptions()
  loadOptions.setDefaultFont("Helvetica.ttf");
  loadOptions.setAutoFontSubstitution(false);
  loadOptions.setFontSubstitutes(fontSubstitutes);

  const converter = new groupdocs.conversion.Converter(inputFilePath, loadOptions)
  const convertOptions = new groupdocs.conversion.PdfConvertOptions()

  console.log(`WordProcessing document converted successfully to ${outputPath} (by specifying font subs)`)
  return converter.convert(outputPath, convertOptions)
}

module.exports = convertWordProcessingBySpecifyingFontSubstitution
