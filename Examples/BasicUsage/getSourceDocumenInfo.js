/**
 * This example demonstrates how to get basic information about source document.
 */
function getSourceDocumentInfo(groupdocs, inputFilePath) {
  const converter = new groupdocs.conversion.Converter(inputFilePath)
  const pdfInfo = converter.getDocumentInfo()

  console.log(`Author: ${pdfInfo.getAuthor()}`)
  console.log(`Creation date: ${pdfInfo.getCreationDate()}`)
  console.log(`Title: ${pdfInfo.getTitle()}`)
  console.log(`Version: ${pdfInfo.getVersion()}`)
  console.log(`Pages count: ${pdfInfo.getPagesCount()}`)
  console.log(`Width: ${pdfInfo.getWidth()}`)
  console.log(`Height: ${pdfInfo.getHeight()}`)
  console.log(`Is landscaped: ${pdfInfo.isLandscape()}`)
  console.log(`Is Encrypted: ${pdfInfo.isPasswordProtected()}`)

  console.log('\nDocument info retrieved successfully.')
}

module.exports = getSourceDocumentInfo
