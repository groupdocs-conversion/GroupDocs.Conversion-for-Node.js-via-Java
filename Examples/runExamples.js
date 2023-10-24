const examples = require('./conversionExamples')

// CALL EXAMPLES

examples.getPossibleConversions()
examples.getSourceDocumentInfo()
;(async () => {
  try {
    console.log('Start conversion. \nIn Main() method uncomment the example that you want to run.')
    await examples.setLicense() // You can pass the licensePath as an argument, it's optional

    await Promise.all([
      /* NOTE: Please uncomment the example you want to try out */
      /* Basic usage */
      // examples.convertToHtml(), // TODO: runs with exception
      // examples.convertToPdf(),  // TODO: runs with exception
      // examples.convertToPresentation(),
      // examples.convertToSpreadsheet(),
      // examples.convertToWordProcessing(),
      /* Advanced usage */
        /* Converting */
      // examples.addWatermark(), // TODO: runs with exception
      // examples.convertConsecutivePagesPdf(),
      // examples.convertSpecificPagesPdf(),
      // examples.convertToPdfWithAdvancedOptions(),
      // examples.convertToImageWithAdvancedOptions(),
      // examples.convertToHtmlWithAdvancedOptions(),
      // examples.convertToPresentationWithAdvancedOptions(),
      // examples.convertToSpreadsheetWithAdvancedOptions(),
      // examples.convertToWordProcessingWithAdvancedOptions(), // TODO: runs with exception
        /* LoadOptions */
          /* PDF */
      // examples.convertPdfAndFlattenAllFields(),
      // examples.convertPdfAndHideAnnotations(),
      // examples.convertPdfAndRemoveEmbeddedFiles(),
          /* Presentation */
      // examples.convertPresentationByHidingComments(),
      // examples.convertPresentationBySpecifyingFontSubstitution(),
      // examples.convertPresentationWithHiddenSlidesIncluded(),
          /* WordProcessing */
      // examples.convertWordProcessingByHidingComments(),
      // examples.convertWordProcessingByHidingTrackedChanges(),
      // examples.convertWordProcessingBySpecifyingFontSubstitution(),
          /* Spreadsheet */
      // examples.convertSpreadsheetAndHideComments(),
      // examples.convertSpreadsheetByShowingGridLines(),
      // examples.convertSpreadsheetBySkippingEmptyRowsAndColumns(),
      // examples.convertSpreadsheetBySpecifyingFontsubstitution(),
      // examples.convertSpreadsheetBySpecifyingRange(),
      // examples.convertSpreadsheetWithHiddenSheetsIncluded(),
          /* XML */
      // examples.convertXmlAsDataSourceToSpreadsheet(),
          /* CAD */
      // examples.convertCadAndSpecifyLayouts(),
      // examples.convertCadAndSpecifyWidthAndHeight(),
          /* CSV */
      // examples.convertCsvByConvertingDateTimeAndNumericData(),
      // examples.convertCsvBySpecifyingDelimiter(),
      // examples.convertCsvBySpecifyingEncoding(), // TODO: charset exception
          /* Email */
      // examples.convertEmailWithAlteringFieldsVisibility(),
          /* Note */
      // examples.convertNoteBySpecifyingFontSubstitution(),
          /* TXT */
      // examples.convertTxtByControllingLeadingSpacesBehavior(),
      // examples.convertTxtByControllingTrailingSpacesBehavior(),
      // examples.convertTxtBySpecifyingEncoding(), // TODO: charset exception
          /* Load From Different Sources */
      // examples.loadDocumentFromUrl(), // TODO: runs with exception
    ])
    console.log('The end of process.')
    process.exit(0)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
})()