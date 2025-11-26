/**
 * Examples module for GroupDocs.Conversion
 *
 * This module provides a centralized interface for running various document conversion examples.
 * It wraps individual example functions and provides a consistent API for executing conversions
 * with predefined sample files and output locations.
 */

const fs = require('fs');
const groupdocs = require('@groupdocs/groupdocs.conversion');
const Constants = require('./constants');

// ============================================================================
// Module Imports - Basic Usage Examples
// ============================================================================

const getPossibleConversions = require('./BasicUsage/getPossibleConversions');
const getSourceDocumentInfo = require('./BasicUsage/getSourceDocumenInfo');
const setLicenseFromFile = require('./QuickStart/setLicenseFromFile');
const setLicenseFromStream = require('./QuickStart/setLicenseFromStream');

// Basic conversion methods
const convertToHtml = require('./BasicUsage/convertToHtml');
const convertToPdf = require('./BasicUsage/convertToPdf');
const convertToWordProcessing = require('./BasicUsage/convertToWordProcessing');
const convertToSpreadsheet = require('./BasicUsage/convertToSpreadsheet');
const convertToPresentation = require('./BasicUsage/convertToPresentation');

// ============================================================================
// Module Imports - Advanced Usage Examples
// ============================================================================

// Advanced conversion options
const convertToPdfWithAdvancedOptions = require('./AdvancedUsage/converting/convertToPdfWithAdvancedOptions');
const convertConsecutivePagesPdf = require('./AdvancedUsage/converting/common/convertNConsecutivePages');
const convertSpecificPages = require('./AdvancedUsage/converting/common/convertSpecificPages');
const addWatermark = require('./AdvancedUsage/Converting/common/addWatermark');
const convertToImageWithAdvancedOptions = require('./AdvancedUsage/converting/convertToImageWithAdvancedOptions');
const convertToHtmlWithAdvancedOptions = require('./AdvancedUsage/converting/convertToHtmlWithAdvancedOptions');
const convertToPresentationWithAdvancedOptions = require('./AdvancedUsage/converting/convertToPresentationWithAdvancedOptions');
const convertToSpreadsheetWithAdvancedOptions = require('./AdvancedUsage/converting/convertToSpreadsheetWithAdvancedOptions');
const convertToWordProcessingWithAdvancedOptions = require('./AdvancedUsage/converting/convertToWordProcessingWithAdvancedOptions');

// Load options by document type - PDF
const convertPdfAndFlattenAllFields = require('./AdvancedUsage/Loading/LoadOptionsByDocumentType/Pdf/convertPdfAndFlattenAllFields');
const convertPdfAndHideAnnotations = require('./AdvancedUsage/Loading/LoadOptionsByDocumentType/Pdf/convertPdfAndHideAnnotations');
const convertPdfAndRemoveEmbeddedFiles = require('./AdvancedUsage/Loading/LoadOptionsByDocumentType/Pdf/convertPdfAndRemoveEmbeddedFiles');

// Load options by document type - Presentation
const convertPresentationByHidingComments = require('./AdvancedUsage/Loading/LoadOptionsByDocumentType/Presentation/convertPresentationByHidingComments');
const convertPresentationBySpecifyingFontSubstitution = require('./AdvancedUsage/Loading/LoadOptionsByDocumentType/Presentation/convertPresentationBySpecifyingFontSubstitution');
const convertPresentationWithHiddenSlidesIncluded = require('./AdvancedUsage/Loading/LoadOptionsByDocumentType/Presentation/convertPresentationWithHiddenSlidesIncluded');

// Load options by document type - Word Processing
const convertWordProcessingByHidingComments = require('./AdvancedUsage/Loading/LoadOptionsByDocumentType/WordProcessing/convertWordProcessingByHidingComments');
const convertWordProcessingByHidingTrackedChanges = require('./AdvancedUsage/Loading/LoadOptionsByDocumentType/WordProcessing/convertWordProcessingByHidingTrackedChanges');
const convertWordProcessingBySpecifyingFontSubstitution = require('./AdvancedUsage/Loading/LoadOptionsByDocumentType/WordProcessing/convertWordProcessingBySpecifyingFontSubstitution');

// Load options by document type - Spreadsheet
const convertSpreadsheetAndHideComments = require('./AdvancedUsage/Loading/LoadOptionsByDocumentType/Spreadsheet/convertSpreadsheetAndHideComments');
const convertSpreadsheetByShowingGridLines = require('./AdvancedUsage/Loading/LoadOptionsByDocumentType/Spreadsheet/convertSpreadsheetByShowingGridLines');
const convertSpreadsheetBySkippingEmptyRowsAndColumns = require('./AdvancedUsage/Loading/LoadOptionsByDocumentType/Spreadsheet/convertSpreadsheetBySkippingEmptyRowsAndColumns');
const convertSpreadsheetBySpecifyingFontsubstitution = require('./AdvancedUsage/Loading/LoadOptionsByDocumentType/Spreadsheet/convertSpreadsheetBySpecifyingFontsubstitution');
const convertSpreadsheetBySpecifyingRange = require('./AdvancedUsage/Loading/LoadOptionsByDocumentType/Spreadsheet/convertSpreadsheetBySpecifyingRange');
const convertSpreadsheetWithHiddenSheetsIncluded = require('./AdvancedUsage/Loading/LoadOptionsByDocumentType/Spreadsheet/convertSpreadsheetWithHiddenSheetsIncluded');

// Load options by document type - Other formats
const convertXmlAsDataSourceToSpreadsheet = require('./AdvancedUsage/Loading/LoadOptionsByDocumentType/Xml/convertXmlAsDataSourceToSpreadsheet');
const convertCadAndSpecifyLayouts = require('./AdvancedUsage/Loading/LoadOptionsByDocumentType/Cad/convertCadAndSpecifyLayouts');
const convertCadAndSpecifyWidthAndHeight = require('./AdvancedUsage/Loading/LoadOptionsByDocumentType/Cad/convertCadAndSpecifyWidthAndHeight');
const convertCsvByConvertingDateTimeAndNumericData = require('./AdvancedUsage/Loading/LoadOptionsByDocumentType/Csv/convertCsvByConvertingDateTimeAndNumericData');
const convertCsvBySpecifyingDelimiter = require('./AdvancedUsage/Loading/LoadOptionsByDocumentType/Csv/convertCsvBySpecifyingDelimiter');
const convertCsvBySpecifyingEncoding = require('./AdvancedUsage/Loading/LoadOptionsByDocumentType/Csv/convertCsvBySpecifyingEncoding');
const convertNoteBySpecifyingFontSubstitution = require('./AdvancedUsage/Loading/LoadOptionsByDocumentType/Note/convertNoteBySpecifyingFontSubstitution');
const convertEmailWithAlteringFieldsVisibility = require('./AdvancedUsage/Loading/LoadOptionsByDocumentType/Email/convertEmailWithAlteringFieldsVisibility');
const convertTxtByControllingLeadingSpacesBehavior = require('./AdvancedUsage/Loading/LoadOptionsByDocumentType/Txt/convertTxtByControllingLeadingSpacesBehavior');
const convertTxtByControllingTrailingSpacesBehavior = require('./AdvancedUsage/Loading/LoadOptionsByDocumentType/Txt/convertTxtByControllingTrailingSpacesBehavior');
const convertTxtBySpecifyingEncoding = require('./AdvancedUsage/Loading/LoadOptionsByDocumentType/Txt/convertTxtBySpecifyingEncoding');

// Loading from different sources
const loadDocumentFromUrl = require('./AdvancedUsage/Loading/LoadOptionsFromDifferentSources/loadDocumentFromUrl');
const loadDocumentFromStream = require('./AdvancedUsage/Loading/LoadOptionsFromDifferentSources/loadDocumentFromStream');
const loadDocumentFromLocalDisk = require('./AdvancedUsage/Loading/LoadOptionsFromDifferentSources/loadDocumentFromLocalDisk');

// ============================================================================
// Examples Class
// ============================================================================

/**
 * Examples class that provides methods to run various document conversion examples.
 *
 * All methods use predefined sample files from Constants and output to Constants.OUTPUT_FOLDER.
 * The class handles license initialization and output folder creation automatically.
 */
class Examples {
  /**
   * Initializes the Examples instance.
   * Sets up license path and creates output folder if it doesn't exist.
   */
  constructor() {
    // Initialize license from environment variable
    const lic = Constants.LICENSE_PATH;
    if (!lic || !lic.endsWith('.lic')) {
      console.log('License is not found, continuing with demo version!');
    } else {
      this.licensePath = lic;
    }

    // Ensure output folder exists
    this.initializeOutputFolder();
  }

  /**
   * Creates the output folder if it doesn't exist.
   * Silently handles errors to prevent crashes if folder creation fails.
   */
  initializeOutputFolder() {
    try {
      if (!fs.existsSync(Constants.OUTPUT_FOLDER)) {
        fs.mkdirSync(Constants.OUTPUT_FOLDER);
      }
    } catch (error) {
      console.error(error);
    }
  }

  // ============================================================================
  // Document Information Methods
  // ============================================================================

  /**
   * Gets all possible conversion formats for a sample document.
   * @returns {Promise} Promise that resolves when conversion formats are retrieved
   */
  getPossibleConversions() {
    return getPossibleConversions(groupdocs, Constants.SAMPLE_DOCX);
  }

  /**
   * Gets source document information (format, page count, etc.).
   * @returns {Promise} Promise that resolves when document info is retrieved
   */
  getSourceDocumentInfo() {
    return getSourceDocumentInfo(groupdocs, Constants.SAMPLE_PDF);
  }

  // ============================================================================
  // License Management Methods
  // ============================================================================

  /**
   * Sets the GroupDocs license from a file path.
   * @param {string} [licensePath=''] - Path to license file. If not provided, uses licensePath from constructor
   * @returns {Promise} Promise that resolves when license is set
   */
  async setLicenseFromFile(licensePath = '') {
    return setLicenseFromFile(groupdocs, licensePath || this.licensePath);
  }

  /**
   * Sets the GroupDocs license from a file stream.
   * @param {string} [licensePath=''] - Path to license file. If not provided, uses licensePath from constructor
   * @returns {Promise} Promise that resolves when license is set
   */
  async setLicenseFromStream(licensePath = '') {
    return setLicenseFromStream(groupdocs, licensePath || this.licensePath);
  }

  // ============================================================================
  // Basic Conversion Methods
  // ============================================================================

  /**
   * Converts a sample DOCX document to HTML format.
   * @returns {Promise} Promise that resolves when conversion is complete
   */
  async convertToHtml() {
    return convertToHtml(groupdocs, Constants.SAMPLE_DOCX, Constants.OUTPUT_FOLDER);
  }

  /**
   * Converts a sample DOCX document to PDF format.
   * @returns {Promise} Promise that resolves when conversion is complete
   */
  async convertToPdf() {
    return convertToPdf(groupdocs, Constants.SAMPLE_DOCX, Constants.OUTPUT_FOLDER);
  }

  /**
   * Converts a sample DOCX document to PPTX presentation format.
   * @returns {Promise} Promise that resolves when conversion is complete
   */
  async convertToPresentation() {
    return convertToPresentation(groupdocs, Constants.SAMPLE_DOCX, Constants.OUTPUT_FOLDER);
  }

  /**
   * Converts a sample DOCX document to XLSX spreadsheet format.
   * @returns {Promise} Promise that resolves when conversion is complete
   */
  async convertToSpreadsheet() {
    return convertToSpreadsheet(groupdocs, Constants.SAMPLE_DOCX, Constants.OUTPUT_FOLDER);
  }

  /**
   * Converts a sample PDF document to DOCX word processing format.
   * @returns {Promise} Promise that resolves when conversion is complete
   */
  async convertToWordProcessing() {
    return convertToWordProcessing(groupdocs, Constants.SAMPLE_PDF, Constants.OUTPUT_FOLDER);
  }

  // ============================================================================
  // Advanced Conversion Methods
  // ============================================================================

  /**
   * Converts a password-protected DOCX document to PDF with advanced options
   * (specific pages, rotation, DPI, dimensions).
   * @returns {Promise} Promise that resolves when conversion is complete
   */
  async convertToPdfWithAdvancedOptions() {
    return convertToPdfWithAdvancedOptions(
      groupdocs,
      Constants.SAMPLE_DOCX_WITH_PASSWORD,
      Constants.OUTPUT_FOLDER,
    );
  }

  /**
   * Adds a watermark to a document during conversion to PDF.
   * @returns {Promise} Promise that resolves when conversion is complete
   */
  async addWatermark() {
    return addWatermark(groupdocs, Constants.SAMPLE_DOCX, Constants.OUTPUT_FOLDER);
  }

  /**
   * Converts consecutive pages (page range) from a document to PDF.
   * @returns {Promise} Promise that resolves when conversion is complete
   */
  async convertConsecutivePagesPdf() {
    return convertConsecutivePagesPdf(groupdocs, Constants.SAMPLE_DOCX, Constants.OUTPUT_FOLDER);
  }

  /**
   * Converts specific pages from a document to PDF.
   * @returns {Promise} Promise that resolves when conversion is complete
   */
  async convertSpecificPagesPdf() {
    return convertSpecificPages(groupdocs, Constants.SAMPLE_DOCX, Constants.OUTPUT_FOLDER);
  }

  /**
   * Converts a PDF document to PNG images with advanced options
   * (brightness, contrast, grayscale, resolution, etc.).
   * @returns {Promise} Promise that resolves when conversion is complete
   */
  async convertToImageWithAdvancedOptions() {
    return convertToImageWithAdvancedOptions(groupdocs, Constants.SAMPLE_PDF, Constants.OUTPUT_FOLDER);
  }

  /**
   * Converts a password-protected DOCX document to HTML with advanced options.
   * @returns {Promise} Promise that resolves when conversion is complete
   */
  async convertToHtmlWithAdvancedOptions() {
    return convertToHtmlWithAdvancedOptions(groupdocs, Constants.SAMPLE_DOCX_WITH_PASSWORD, Constants.OUTPUT_FOLDER);
  }

  /**
   * Converts a DOCX document to PPT presentation format with advanced options.
   * @returns {Promise} Promise that resolves when conversion is complete
   */
  async convertToPresentationWithAdvancedOptions() {
    return convertToPresentationWithAdvancedOptions(groupdocs, Constants.SAMPLE_DOCX, Constants.OUTPUT_FOLDER);
  }

  /**
   * Converts a DOCX document to XLS spreadsheet format with advanced options.
   * @returns {Promise} Promise that resolves when conversion is complete
   */
  async convertToSpreadsheetWithAdvancedOptions() {
    return convertToSpreadsheetWithAdvancedOptions(groupdocs, Constants.SAMPLE_DOCX, Constants.OUTPUT_FOLDER);
  }

  /**
   * Converts a PDF document to DOCX word processing format with advanced options.
   * @returns {Promise} Promise that resolves when conversion is complete
   */
  async convertToWordProcessingWithAdvancedOptions() {
    return convertToWordProcessingWithAdvancedOptions(groupdocs, Constants.SAMPLE_PDF, Constants.OUTPUT_FOLDER);
  }

  // ============================================================================
  // Load Options by Document Type - PDF
  // ============================================================================

  /**
   * Converts PDF to DOCX while flattening all form fields.
   * @returns {Promise} Promise that resolves when conversion is complete
   */
  async convertPdfAndFlattenAllFields() {
    return convertPdfAndFlattenAllFields(groupdocs, Constants.SAMPLE_PDF, Constants.OUTPUT_FOLDER);
  }

  /**
   * Converts PDF to DOCX while hiding all annotations.
   * @returns {Promise} Promise that resolves when conversion is complete
   */
  async convertPdfAndHideAnnotations() {
    return convertPdfAndHideAnnotations(groupdocs, Constants.SAMPLE_PDF, Constants.OUTPUT_FOLDER);
  }

  /**
   * Converts PDF to DOCX while removing embedded files.
   * @returns {Promise} Promise that resolves when conversion is complete
   */
  async convertPdfAndRemoveEmbeddedFiles() {
    return convertPdfAndRemoveEmbeddedFiles(groupdocs, Constants.SAMPLE_PDF, Constants.OUTPUT_FOLDER);
  }

  // ============================================================================
  // Load Options by Document Type - Presentation
  // ============================================================================

  /**
   * Converts a presentation to PDF while hiding comments.
   * @returns {Promise} Promise that resolves when conversion is complete
   */
  async convertPresentationByHidingComments() {
    return convertPresentationByHidingComments(groupdocs, Constants.PPTX_WITH_NOTES, Constants.OUTPUT_FOLDER);
  }

  /**
   * Converts a presentation to PDF with custom font substitution.
   * @returns {Promise} Promise that resolves when conversion is complete
   */
  async convertPresentationBySpecifyingFontSubstitution() {
    return convertPresentationBySpecifyingFontSubstitution(
      groupdocs,
      Constants.PPTX_WITH_NOTES,
      Constants.OUTPUT_FOLDER,
    );
  }

  /**
   * Converts a presentation to PDF including hidden slides.
   * @returns {Promise} Promise that resolves when conversion is complete
   */
  async convertPresentationWithHiddenSlidesIncluded() {
    return convertPresentationWithHiddenSlidesIncluded(
      groupdocs,
      Constants.SAMPLE_PPTX_HIDDEN_PAGE,
      Constants.OUTPUT_FOLDER,
    );
  }

  // ============================================================================
  // Load Options by Document Type - Word Processing
  // ============================================================================

  /**
   * Converts a Word document to PDF while hiding comments.
   * @returns {Promise} Promise that resolves when conversion is complete
   */
  async convertWordProcessingByHidingComments() {
    return convertWordProcessingByHidingComments(
      groupdocs,
      Constants.SAMPLE_DOCX_WITH_TRACKED_CHANGES,
      Constants.OUTPUT_FOLDER,
    );
  }

  /**
   * Converts a Word document to PDF while hiding tracked changes.
   * @returns {Promise} Promise that resolves when conversion is complete
   */
  async convertWordProcessingByHidingTrackedChanges() {
    return convertWordProcessingByHidingTrackedChanges(
      groupdocs,
      Constants.SAMPLE_DOCX_WITH_TRACKED_CHANGES,
      Constants.OUTPUT_FOLDER,
    );
  }

  /**
   * Converts a Word document to PDF with custom font substitution.
   * @returns {Promise} Promise that resolves when conversion is complete
   */
  async convertWordProcessingBySpecifyingFontSubstitution() {
    return convertWordProcessingBySpecifyingFontSubstitution(
      groupdocs,
      Constants.SAMPLE_DOCX_WITH_TRACKED_CHANGES,
      Constants.OUTPUT_FOLDER,
    );
  }

  // ============================================================================
  // Load Options by Document Type - Spreadsheet
  // ============================================================================

  /**
   * Converts a spreadsheet to PDF while hiding comments.
   * @returns {Promise} Promise that resolves when conversion is complete
   */
  async convertSpreadsheetAndHideComments() {
    return convertSpreadsheetAndHideComments(groupdocs, Constants.SAMPLE_XLSX, Constants.OUTPUT_FOLDER);
  }

  /**
   * Converts a spreadsheet to PDF with grid lines visible.
   * @returns {Promise} Promise that resolves when conversion is complete
   */
  async convertSpreadsheetByShowingGridLines() {
    return convertSpreadsheetByShowingGridLines(groupdocs, Constants.SAMPLE_XLSX, Constants.OUTPUT_FOLDER);
  }

  /**
   * Converts a spreadsheet to PDF while skipping empty rows and columns.
   * @returns {Promise} Promise that resolves when conversion is complete
   */
  async convertSpreadsheetBySkippingEmptyRowsAndColumns() {
    return convertSpreadsheetBySkippingEmptyRowsAndColumns(groupdocs, Constants.SAMPLE_XLSX, Constants.OUTPUT_FOLDER);
  }

  /**
   * Converts a spreadsheet to PDF with custom font substitution.
   * @returns {Promise} Promise that resolves when conversion is complete
   */
  async convertSpreadsheetBySpecifyingFontsubstitution() {
    return convertSpreadsheetBySpecifyingFontsubstitution(groupdocs, Constants.SAMPLE_XLSX, Constants.OUTPUT_FOLDER);
  }

  /**
   * Converts a specific range of cells from a spreadsheet to PDF.
   * @returns {Promise} Promise that resolves when conversion is complete
   */
  async convertSpreadsheetBySpecifyingRange() {
    return convertSpreadsheetBySpecifyingRange(groupdocs, Constants.SAMPLE_XLSX, Constants.OUTPUT_FOLDER);
  }

  /**
   * Converts a spreadsheet to PDF including hidden sheets.
   * @returns {Promise} Promise that resolves when conversion is complete
   */
  async convertSpreadsheetWithHiddenSheetsIncluded() {
    return convertSpreadsheetWithHiddenSheetsIncluded(
      groupdocs,
      Constants.SAMPLE_XLSX_WITH_HIDDEN_SHEET,
      Constants.OUTPUT_FOLDER,
    );
  }

  // ============================================================================
  // Load Options by Document Type - Other Formats
  // ============================================================================

  /**
   * Converts XML as a data source to spreadsheet format.
   * @returns {Promise} Promise that resolves when conversion is complete
   */
  async convertXmlAsDataSourceToSpreadsheet() {
    return convertXmlAsDataSourceToSpreadsheet(groupdocs, Constants.SAMPLE_DATASOURCE, Constants.OUTPUT_FOLDER);
  }

  /**
   * Converts a CAD file to PDF with specific layout selection.
   * @returns {Promise} Promise that resolves when conversion is complete
   */
  async convertCadAndSpecifyLayouts() {
    return convertCadAndSpecifyLayouts(
      groupdocs,
      Constants.SAMPLE_DWG_WITH_LAYOUTS_AND_LAYERS,
      Constants.OUTPUT_FOLDER,
    );
  }

  /**
   * Converts a CAD file to TIFF with specified width and height.
   * @returns {Promise} Promise that resolves when conversion is complete
   */
  async convertCadAndSpecifyWidthAndHeight() {
    return convertCadAndSpecifyWidthAndHeight(
      groupdocs,
      Constants.SAMPLE_DWG_WITH_LAYOUTS_AND_LAYERS,
      Constants.OUTPUT_FOLDER,
    );
  }

  /**
   * Converts CSV to PDF with date/time and numeric data conversion.
   * @returns {Promise} Promise that resolves when conversion is complete
   */
  async convertCsvByConvertingDateTimeAndNumericData() {
    return convertCsvByConvertingDateTimeAndNumericData(groupdocs, Constants.SAMPLE_CSV, Constants.OUTPUT_FOLDER);
  }

  /**
   * Converts CSV to PDF with a custom delimiter.
   * @returns {Promise} Promise that resolves when conversion is complete
   */
  async convertCsvBySpecifyingDelimiter() {
    return convertCsvBySpecifyingDelimiter(groupdocs, Constants.SAMPLE_CSV, Constants.OUTPUT_FOLDER);
  }

  /**
   * Converts CSV to PDF with a specific encoding.
   * @returns {Promise} Promise that resolves when conversion is complete
   */
  async convertCsvBySpecifyingEncoding() {
    return convertCsvBySpecifyingEncoding(groupdocs, Constants.SAMPLE_CSV, Constants.OUTPUT_FOLDER);
  }

  /**
   * Converts a OneNote file to PDF with custom font substitution.
   * @returns {Promise} Promise that resolves when conversion is complete
   */
  async convertNoteBySpecifyingFontSubstitution() {
    return convertNoteBySpecifyingFontSubstitution(groupdocs, Constants.SAMPLE_ONE, Constants.OUTPUT_FOLDER);
  }

  /**
   * Converts an email (MSG) to PDF with altered field visibility.
   * @returns {Promise} Promise that resolves when conversion is complete
   */
  async convertEmailWithAlteringFieldsVisibility() {
    return convertEmailWithAlteringFieldsVisibility(groupdocs, Constants.SAMPLE_MSG, Constants.OUTPUT_FOLDER);
  }

  /**
   * Converts a text file to PDF with controlled leading spaces behavior.
   * @returns {Promise} Promise that resolves when conversion is complete
   */
  async convertTxtByControllingLeadingSpacesBehavior() {
    return convertTxtByControllingLeadingSpacesBehavior(groupdocs, Constants.SAMPLE_TXT, Constants.OUTPUT_FOLDER);
  }

  /**
   * Converts a text file to PDF with controlled trailing spaces behavior.
   * @returns {Promise} Promise that resolves when conversion is complete
   */
  async convertTxtByControllingTrailingSpacesBehavior() {
    return convertTxtByControllingTrailingSpacesBehavior(groupdocs, Constants.SAMPLE_TXT, Constants.OUTPUT_FOLDER);
  }

  /**
   * Converts a text file to PDF with a specific encoding (Shift-JIS).
   * @returns {Promise} Promise that resolves when conversion is complete
   */
  async convertTxtBySpecifyingEncoding() {
    return convertTxtBySpecifyingEncoding(groupdocs, Constants.SAMPLE_TXT_SHIFT_JS_ENCODED, Constants.OUTPUT_FOLDER);
  }

  // ============================================================================
  // Loading from Different Sources
  // ============================================================================

  /**
   * Loads and converts a document from a URL.
   * @returns {Promise} Promise that resolves when conversion is complete
   */
  async loadDocumentFromUrl() {
    return loadDocumentFromUrl(groupdocs, Constants.OUTPUT_FOLDER);
  }

  /**
   * Loads and converts a document from a file stream.
   * @returns {Promise} Promise that resolves when conversion is complete
   */
  async loadDocumentFromStream() {
    return loadDocumentFromStream(groupdocs, Constants.SAMPLE_DOCX, Constants.OUTPUT_FOLDER);
  }

  /**
   * Loads and converts a document from local disk.
   * @returns {Promise} Promise that resolves when conversion is complete
   */
  async loadDocumentFromLocalDisk() {
    return loadDocumentFromLocalDisk(groupdocs, Constants.SAMPLE_DOCX, Constants.OUTPUT_FOLDER);
  }
}

module.exports = new Examples();
