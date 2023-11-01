const java = require('java') 
/**
 * This example demonstrates how to convert a spreadsheet document to pdf with advanced options
 */
async function convertSpreadsheetBySpecifyingFontsubstitution(groupdocs, inputFilePath) {
  const outputPath = `${groupdocs.outputFolder}/ConvertSpreadsheetBySpecifyingFontsubstitution.pdf`

  const fontSubstitutes = java.newInstanceSync("java.util.ArrayList")
  fontSubstitutes.add(groupdocs.conversion.FontSubstitute.create("Tahoma", "Arial"));
  fontSubstitutes.add(groupdocs.conversion.FontSubstitute.create("Times New Roman", "Arial"));

  const loadOptions = new groupdocs.conversion.SpreadsheetLoadOptions()
  loadOptions.setDefaultFont("Helvetica.ttf");
  loadOptions.setOnePagePerSheet(true);
  loadOptions.setFontSubstitutes(fontSubstitutes);

  const converter = new groupdocs.conversion.Converter(inputFilePath, loadOptions)
  const convertOptions = new groupdocs.conversion.PdfConvertOptions()

  console.log(`Spreadsheet document converted successfully to ${outputPath} (by specifying font subs)`)
  return converter.convert(outputPath, convertOptions)
}

module.exports = convertSpreadsheetBySpecifyingFontsubstitution
