const examples = require('./conversionExamples')

// CALL EXAMPLES

examples.getPossibleConversions()
examples.getSourceDocumentInfo()
;(async () => {
  try {
    console.log('Start conversion. \nIn Main() method uncomment the example that you want to run.')
    await examples.setLicense() // You can pass the licensePath as an argument, it's optional

    await Promise.all([
      // NOTE: Please uncomment the example you want to try out
      /* Basic usage */
      // examples.convertToPdf(),
      // examples.convertToPresentation(),
      // examples.convertToSpreadsheet(),
      // examples.convertToWordProcessing(),
      /* Advanced usage */
        /* Converting */
      // examples.convertConsecutivePagesPdf(),
      // examples.convertSpecificPagesPdf(),
      // examples.convertToPdfWithAdvancedOptions(),
      // examples.convertToImageWithAdvancedOptions(),
      // examples.convertToHtmlWithAdvancedOptions(),
      // examples.convertToPresentationWithAdvancedOptions(),
      // examples.convertToSpreadsheetWithAdvancedOptions(),
      // examples.convertToWordProcessingWithAdvancedOptions()
        /* LoadOptions */
          /* PDF */
      // examples.convertPdfAndFlattenAllFields(),
      // examples.convertPdfAndHideAnnotations(),
      // examples.convertPdfAndRemoveEmbeddedFiles(),
          /* Presentation */
      // examples.convertPresentationByHiddingComments(),
      // examples.convertPresentationBySpecifyingFontSubstitution(),
      // examples.convertPresentationWithHiddenSlidesIncluded(),
          /* WordProcessing */
      // examples.convertWordProcessingByHiddingComments(),
      // examples.convertWordProcessingByHiddingTrackedChanges(),
      // examples.convertWordProcessingBySpecifyingFontSubstitution(),
          /* Spreadsheet */
      examples.convertSpreadsheetAndHideComments(),
      examples.convertSpreadsheetByShowingGridLines(),
      examples.convertSpreadsheetBySkippingEmptyRowsAndColumns(),
      examples.convertSpreadsheetBySpecifyingFontsubstitution(),
      examples.convertSpreadsheetBySpecifyingRange(),
      examples.convertSpreadsheetWithHiddenSheetsIncluded(),

    ])
    console.log('The end of process.')
    process.exit(0)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
})()