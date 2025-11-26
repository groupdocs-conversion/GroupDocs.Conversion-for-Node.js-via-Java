/**
 * Run Examples Script
 *
 * This script executes various GroupDocs.Conversion examples to demonstrate
 * document conversion capabilities. Examples are run in parallel for efficiency.
 *
 * To run specific examples, comment out the ones you don't want to execute.
 */

const examples = require('./examples')

;(async () => {
  try {
    console.log('='.repeat(60));
    console.log('GroupDocs.Conversion for Node.js via Java - Code Examples');
    console.log('='.repeat(60));

    // Set license from stream
    // Note: You can also use setLicenseFromFile() and pass a licensePath argument
    await examples.setLicenseFromStream();

    // Run conversion examples in parallel
    await Promise.all([
      // ========================================================================
      // Basic Conversion Examples
      // ========================================================================
      examples.getPossibleConversions(),
      examples.getSourceDocumentInfo(),
      examples.convertToHtml(),
      examples.convertToPdf(),
      examples.convertToPresentation(),
      examples.convertToSpreadsheet(),
      examples.convertToWordProcessing(),

      // ========================================================================
      // Advanced Conversion Examples
      // ========================================================================
      examples.addWatermark(),
      examples.convertConsecutivePagesPdf(),
      examples.convertSpecificPagesPdf(),
      examples.convertToPdfWithAdvancedOptions(),
      examples.convertToImageWithAdvancedOptions(),
      examples.convertToHtmlWithAdvancedOptions(),
      examples.convertToPresentationWithAdvancedOptions(),
      examples.convertToSpreadsheetWithAdvancedOptions(),
      examples.convertToWordProcessingWithAdvancedOptions(),

      // ========================================================================
      // Load Options Examples - PDF
      // ========================================================================
      examples.convertPdfAndFlattenAllFields(),
      examples.convertPdfAndHideAnnotations(),
      examples.convertPdfAndRemoveEmbeddedFiles(),

      // ========================================================================
      // Load Options Examples - Presentation
      // ========================================================================
      examples.convertPresentationByHidingComments(),
      examples.convertPresentationBySpecifyingFontSubstitution(),
      examples.convertPresentationWithHiddenSlidesIncluded(),

      // ========================================================================
      // Load Options Examples - Word Processing
      // ========================================================================
      examples.convertWordProcessingByHidingComments(),
      examples.convertWordProcessingByHidingTrackedChanges(),
      examples.convertWordProcessingBySpecifyingFontSubstitution(),

      // ========================================================================
      // Load Options Examples - Spreadsheet
      // ========================================================================
      examples.convertSpreadsheetAndHideComments(),
      examples.convertSpreadsheetByShowingGridLines(),
      examples.convertSpreadsheetBySkippingEmptyRowsAndColumns(),
      examples.convertSpreadsheetBySpecifyingFontsubstitution(),
      examples.convertSpreadsheetBySpecifyingRange(),
      examples.convertSpreadsheetWithHiddenSheetsIncluded(),

      // ========================================================================
      // Load Options Examples - Other Formats
      // ========================================================================
      examples.convertXmlAsDataSourceToSpreadsheet(),
      // examples.convertCadAndSpecifyLayouts(), // Uncomment when CAD support is ready
      // examples.convertCadAndSpecifyWidthAndHeight(), // Uncomment when CAD support is ready
      examples.convertCsvByConvertingDateTimeAndNumericData(),
      examples.convertCsvBySpecifyingDelimiter(),
      examples.convertCsvBySpecifyingEncoding(),
      examples.convertEmailWithAlteringFieldsVisibility(),
      examples.convertNoteBySpecifyingFontSubstitution(),
      examples.convertTxtByControllingLeadingSpacesBehavior(),
      examples.convertTxtByControllingTrailingSpacesBehavior(),
      // examples.convertTxtBySpecifyingEncoding(), // Disabled due to charset exception

      // ========================================================================
      // Loading from Different Sources
      // ========================================================================
      examples.loadDocumentFromUrl(),
      examples.loadDocumentFromStream(),
      examples.loadDocumentFromLocalDisk(),
    ]);

    console.log('\n');
    console.log('='.repeat(60));
    console.log('Done! All examples completed successfully.');
    console.log('='.repeat(60));
    process.exit(0);
  } catch (error) {
    console.log('\n');
    console.error('='.repeat(60));
    console.error('Error running examples:', error);
    console.error('='.repeat(60));
    process.exit(1);
  }
})();
