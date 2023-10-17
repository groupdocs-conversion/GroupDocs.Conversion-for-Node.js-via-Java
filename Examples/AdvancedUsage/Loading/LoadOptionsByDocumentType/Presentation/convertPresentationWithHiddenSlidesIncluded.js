/**
 * This example demonstrates how to convert a presentation document to pdf with advanced options
 */
async function convertPresentationWithHiddenSlidesIncluded(groupdocs, inputFilePath) {
  const loadOptions = new groupdocs.conversion.PresentationLoadOptions()
  loadOptions.setShowHiddenSlides(true)

  const outputPath = `${groupdocs.outputFolder}/ConvertPresentationWithHiddenSlidesIncluded.pdf`
  
  const converter = new groupdocs.conversion.Converter(inputFilePath, loadOptions)
  const convertOptions = new groupdocs.conversion.PdfConvertOptions()

  console.log(`Pdf document converted successfully to ${outputPath} (with hidden slides included)`)
  return converter.convert(outputPath, convertOptions)
}

module.exports = convertPresentationWithHiddenSlidesIncluded
