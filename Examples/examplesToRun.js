const { ConversionExamples } = require('./conversionExamples')

module.exports = (examples) => {
  if (!(examples instanceof ConversionExamples)) throw new Error('Compile error!')
  return [
    /* NOTE: Please uncomment the example you want to try out */
    /* Basic usage */
    examples.convertToHtml, 
    examples.convertToPdf,  
    examples.convertToPresentation,
    examples.convertToSpreadsheet,
    examples.convertToWordProcessing,
    /* Advanced usage */
      /* Converting */
    examples.addWatermark, 
    examples.convertConsecutivePagesPdf,
    examples.convertSpecificPagesPdf,
    examples.convertToPdfWithAdvancedOptions,
    examples.convertToImageWithAdvancedOptions,
    examples.convertToHtmlWithAdvancedOptions,
    examples.convertToPresentationWithAdvancedOptions,
    examples.convertToSpreadsheetWithAdvancedOptions,
    examples.convertToWordProcessingWithAdvancedOptions,
      /* LoadOptions */
        /* PDF */
    examples.convertPdfAndFlattenAllFields,
    examples.convertPdfAndHideAnnotations,
    examples.convertPdfAndRemoveEmbeddedFiles,
        /* Presentation */
    examples.convertPresentationByHidingComments,
    examples.convertPresentationBySpecifyingFontSubstitution,
    examples.convertPresentationWithHiddenSlidesIncluded,
        /* WordProcessing */
    examples.convertWordProcessingByHidingComments,
    examples.convertWordProcessingByHidingTrackedChanges,
    examples.convertWordProcessingBySpecifyingFontSubstitution,
        /* Spreadsheet */
    examples.convertSpreadsheetAndHideComments,
    examples.convertSpreadsheetByShowingGridLines,
    examples.convertSpreadsheetBySkippingEmptyRowsAndColumns,
    examples.convertSpreadsheetBySpecifyingFontsubstitution,
    examples.convertSpreadsheetBySpecifyingRange,
    examples.convertSpreadsheetWithHiddenSheetsIncluded,
        /* XML */
    examples.convertXmlAsDataSourceToSpreadsheet,
        /* CAD */
    // examples.convertCadAndSpecifyLayouts, // TODO
    examples.convertCadAndSpecifyWidthAndHeight,
        /* CSV */
    examples.convertCsvByConvertingDateTimeAndNumericData,
    examples.convertCsvBySpecifyingDelimiter,
    examples.convertCsvBySpecifyingEncoding,
        /* Email */
    examples.convertEmailWithAlteringFieldsVisibility,
        /* Note */
    examples.convertNoteBySpecifyingFontSubstitution,
        /* TXT */
    examples.convertTxtByControllingLeadingSpacesBehavior,
    examples.convertTxtByControllingTrailingSpacesBehavior,
    //examples.convertTxtBySpecifyingEncoding, // TODO: charset exception
        /* Load From Different Sources */
    examples.loadDocumentFromUrl,
    examples.loadDocumentFromStream,
  ]
}