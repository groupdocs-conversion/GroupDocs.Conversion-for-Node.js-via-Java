const java = require('java')
/**
 * This example demonstrates how to convert a note document to pdf with advanced options
 */
async function convertNoteBySpecifyingFontSubstitution(groupdocs, inputFilePath) {
  const outputPath = `${groupdocs.outputFolder}/convertNoteBySpecifyingFontSubstitution.pdf`

  const fontSubstitutes = java.newInstanceSync("java.util.ArrayList")
  fontSubstitutes.add(groupdocs.conversion.FontSubstitute.create("Tahoma", "Arial"));
  fontSubstitutes.add(groupdocs.conversion.FontSubstitute.create("Times New Roman", "Arial"));

  const loadOptions = new groupdocs.conversion.NoteLoadOptions();
  loadOptions.setFontSubstitutes(fontSubstitutes);
  
  const converter = new groupdocs.conversion.Converter(inputFilePath, loadOptions)
  const convertOptions = new groupdocs.conversion.PdfConvertOptions()

  console.log(`Note document converted successfully to ${outputPath} (specifying font subs)`)
  return converter.convert(outputPath, convertOptions)
}

module.exports = convertNoteBySpecifyingFontSubstitution