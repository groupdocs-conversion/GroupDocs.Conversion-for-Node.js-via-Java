const fs = require('fs')

const conversion = require('@groupdocs/groupdocs.conversion')

// Constant Variables 
const Constants = require('./constants')

// Basic Methods
const getPossibleConversions = require('./BasicUsage/getPossibleConversions')
const getSourceDocumentInfo = require('./BasicUsage/getSourceDocumenInfo')
const setLicense = require('./QuickStart/setLicense')

// Conversion Methods
const convertToHtml = require('./BasicUsage/convertToHtml')
const convertToPdf = require('./BasicUsage/convertToPdf')
const convertToWordProcessing = require('./BasicUsage/convertToWordProcessing')
const convertToSpreadsheet = require('./BasicUsage/convertToSpreadsheet')
const convertToPresentation = require('./BasicUsage/convertToPresentation')

/* Conversion with advanced options */
//    Converting
const convertToPdfWithAdvancedOptions = require('./AdvancedUsage/converting/convertToPdfWithAdvancedOptions')
const convertConsecutivePagesPdf = require('./AdvancedUsage/converting/common/convertNConsecutivePages')
const convertSpecificPages = require('./AdvancedUsage/converting/common/convertSpecificPages')
const addWatermark = require('./AdvancedUsage/Converting/common/addWatermark')
const convertToImageWithAdvancedOptions = require('./AdvancedUsage/converting/convertToImageWithAdvancedOptions')
const convertToHtmlWithAdvancedOptions = require('./AdvancedUsage/converting/convertToHtmlWithAdvancedOptions')
const convertToPresentationWithAdvancedOptions = require('./AdvancedUsage/converting/convertToPresentationWithAdvancedOptions')
const convertToSpreadsheetWithAdvancedOptions = require('./AdvancedUsage/converting/convertToSpreadsheetWithAdvancedOptions')
const convertToWordProcessingWithAdvancedOptions = require('./AdvancedUsage/converting/convertToWordProcessingWithAdvancedOptions')
//    Loading
const convertPdfAndFlattenAllFields = require('./AdvancedUsage/Loading/LoadOptionsByDocumentType/Pdf/convertPdfAndFlattenAllFields')
const convertPdfAndHideAnnotations = require('./AdvancedUsage/Loading/LoadOptionsByDocumentType/Pdf/convertPdfAndHideAnnotations')
const convertPdfAndRemoveEmbeddedFiles = require('./AdvancedUsage/Loading/LoadOptionsByDocumentType/Pdf/convertPdfAndRemoveEmbeddedFiles')
const convertPresentationByHidingComments = require('./AdvancedUsage/Loading/LoadOptionsByDocumentType/Presentation/convertPresentationByHidingComments')
const convertPresentationBySpecifyingFontSubstitution = require('./AdvancedUsage/Loading/LoadOptionsByDocumentType/Presentation/convertPresentationBySpecifyingFontSubstitution')
const convertPresentationWithHiddenSlidesIncluded = require('./AdvancedUsage/Loading/LoadOptionsByDocumentType/Presentation/convertPresentationWithHiddenSlidesIncluded')
const convertWordProcessingByHidingComments = require('./AdvancedUsage/Loading/LoadOptionsByDocumentType/WordProcessing/convertWordProcessingByHidingComments')
const convertWordProcessingByHidingTrackedChanges = require('./AdvancedUsage/Loading/LoadOptionsByDocumentType/WordProcessing/convertWordProcessingByHidingTrackedChanges')
const convertWordProcessingBySpecifyingFontSubstitution = require('./AdvancedUsage/Loading/LoadOptionsByDocumentType/WordProcessing/convertWordProcessingBySpecifyingFontSubstitution')
const convertSpreadsheetAndHideComments = require('./AdvancedUsage/Loading/LoadOptionsByDocumentType/Spreadsheet/convertSpreadsheetAndHideComments')
const convertSpreadsheetByShowingGridLines = require('./AdvancedUsage/Loading/LoadOptionsByDocumentType/Spreadsheet/convertSpreadsheetByShowingGridLines')
const convertSpreadsheetBySkippingEmptyRowsAndColumns = require('./AdvancedUsage/Loading/LoadOptionsByDocumentType/Spreadsheet/convertSpreadsheetBySkippingEmptyRowsAndColumns')
const convertSpreadsheetBySpecifyingFontsubstitution = require('./AdvancedUsage/Loading/LoadOptionsByDocumentType/Spreadsheet/convertSpreadsheetBySpecifyingFontsubstitution')
const convertSpreadsheetBySpecifyingRange = require('./AdvancedUsage/Loading/LoadOptionsByDocumentType/Spreadsheet/convertSpreadsheetBySpecifyingRange')
const convertSpreadsheetWithHiddenSheetsIncluded = require('./AdvancedUsage/Loading/LoadOptionsByDocumentType/Spreadsheet/convertSpreadsheetWithHiddenSheetsIncluded')
const convertXmlAsDataSourceToSpreadsheet = require('./AdvancedUsage/Loading/LoadOptionsByDocumentType/Xml/convertXmlAsDataSourceToSpreadsheet')
const convertCadAndSpecifyLayouts = require('./AdvancedUsage/Loading/LoadOptionsByDocumentType/Cad/convertCadAndSpecifyLayouts')
const convertCadAndSpecifyWidthAndHeight = require('./AdvancedUsage/Loading/LoadOptionsByDocumentType/Cad/convertCadAndSpecifyWidthAndHeight')
const convertCsvByConvertingDateTimeAndNumericData = require('./AdvancedUsage/Loading/LoadOptionsByDocumentType/Csv/convertCsvByConvertingDateTimeAndNumericData')
const convertCsvBySpecifyingDelimiter = require('./AdvancedUsage/Loading/LoadOptionsByDocumentType/Csv/convertCsvBySpecifyingDelimiter')
const convertCsvBySpecifyingEncoding = require('./AdvancedUsage/Loading/LoadOptionsByDocumentType/Csv/convertCsvBySpecifyingEncoding')
const convertNoteBySpecifyingFontSubstitution = require('./AdvancedUsage/Loading/LoadOptionsByDocumentType/Note/convertNoteBySpecifyingFontSubstitution')
const convertEmailWithAlteringFieldsVisibility = require('./AdvancedUsage/Loading/LoadOptionsByDocumentType/Email/convertEmailWithAlteringFieldsVisibility')
const convertTxtByControllingLeadingSpacesBehavior = require('./AdvancedUsage/Loading/LoadOptionsByDocumentType/Txt/convertTxtByControllingLeadingSpacesBehavior')
const convertTxtByControllingTrailingSpacesBehavior = require('./AdvancedUsage/Loading/LoadOptionsByDocumentType/Txt/convertTxtByControllingTrailingSpacesBehavior')
const convertTxtBySpecifyingEncoding = require('./AdvancedUsage/Loading/LoadOptionsByDocumentType/Txt/convertTxtBySpecifyingEncoding')
// Loading from different sources
const loadDocumentFromUrl = require('./AdvancedUsage/Loading/LoadOptionsFromDifferentSources/loadDocumentFromUrl')
const loadDocumentFromStream = require('./AdvancedUsage/Loading/LoadOptionsFromDifferentSources/loadDocumentFromStream')
class ConversionExamples {
  constructor() {
    // Initialize the License
    let lic = Constants.LICENSE_PATH
    if (!lic || !lic.endsWith('.lic')) console.log('License is not found, continuing with demo version!')
    else this.licensePath = lic

    // Initialize the model
    console.log({
      MODULE_PATH: Constants.MODULE_PATH,
      TEST_MODE: Constants.TEST_MODE
    })
    this.conversion = Constants.TEST_MODE ? require(Constants.MODULE_PATH) : conversion

    // Initialize files
    this.initializeInputFiles()
    this.initializeOutputFolder()
  }

  initializeInputFiles() {
    this.inputFiles = {
      samplePdf: Constants.SAMPLE_PDF,
      sampleDocx: Constants.SAMPLE_DOCX,
      sampleDocxPasswordProtected: Constants.SAMPLE_DOCX_WITH_PASSWORD,
      pptsWithNotes: Constants.PPTX_WITH_NOTES,
      pptxWithHiddenPage: Constants.SAMPLE_PPTX_HIDDEN_PAGE,
      sampleDocxWithTrackedChanges: Constants.SAMPLE_DOCX_WITH_TRACKED_CHANGES,
      sampleXlsx: Constants.SAMPLE_XLSX,
      sampleXlsxWithHiddenSheet: Constants.SAMPLE_XLSX_WITH_HIDDEN_SHEET,
      sampleDataSource: Constants.SAMPLE_DATASOURCE,
      sampleDwgWithLayersAndLayouts: Constants.SAMPLE_DWG_WITH_LAYOUTS_AND_LAYERS,
      sampleCsv: Constants.SAMPLE_CSV,
      sampleMsg: Constants.SAMPLE_MSG,
      sampleOne: Constants.SAMPLE_ONE,
      sampleTxt: Constants.SAMPLE_TXT,
      sampleTxtShiftJsEncoded: Constants.SAMPLE_TXT_SHIFT_JS_ENCODED,
    }
  }

  initializeOutputFolder() {
    this.outputFolder = Constants.OUTPUT_PATH
    try {
      if (!fs.existsSync(this.outputFolder)) fs.mkdirSync(this.outputFolder)
    } catch (error) {
      console.error(error)
    }
  }

  getPossibleConversions(inputFilePath = '') {
    return getPossibleConversions(this, inputFilePath || this.inputFiles.sampleDocx)
  }

  getSourceDocumentInfo(inputFilePath = '') {
    return getSourceDocumentInfo(this, inputFilePath || this.inputFiles.samplePdf)
  }

  async setLicense(licensePath = '') {
    if (this.licensePath) return setLicense(this, licensePath || this.licensePath)
  }

  async convertToHtml(inputFilePath = '') {
    return convertToHtml(this, inputFilePath || this.inputFiles.sampleDocx)
  }

  async convertToPdf(inputFilePath = '') {
    return convertToPdf(this, inputFilePath || this.inputFiles.sampleDocx)
  }

  async convertToPresentation(inputFilePath = '') {
    return convertToPresentation(this, inputFilePath || this.inputFiles.sampleDocx)
  }

  async convertToSpreadsheet(inputFilePath = '') {
    return convertToSpreadsheet(this, inputFilePath || this.inputFiles.sampleDocx)
  }

  async convertToWordProcessing(inputFilePath = '') {
    return convertToWordProcessing(this, inputFilePath || this.inputFiles.samplePdf)
  }

  async convertToPdfWithAdvancedOptions(inputFilePath = '') {
    return convertToPdfWithAdvancedOptions(
      this,
      inputFilePath || this.inputFiles.sampleDocxPasswordProtected
    )
  }

  async addWatermark(inputFilePath = '') {
    return addWatermark(this, inputFilePath || this.inputFiles.sampleDocx)
  }

  async convertConsecutivePagesPdf(inputFilePath = '') {
    return convertConsecutivePagesPdf(this, inputFilePath || this.inputFiles.sampleDocx)
  }

  async convertSpecificPagesPdf(inputFilePath = '') {
    return convertSpecificPages(this, inputFilePath || this.inputFiles.sampleDocx)
  }

  async convertToImageWithAdvancedOptions(inputFilePath = '') {
    return convertToImageWithAdvancedOptions(this, inputFilePath || this.inputFiles.samplePdf)
  }

  async convertToHtmlWithAdvancedOptions(inputFilePath = '') {
    return convertToHtmlWithAdvancedOptions(this, inputFilePath || this.inputFiles.sampleDocxPasswordProtected)
  }

  async convertToPresentationWithAdvancedOptions(inputFilePath = '') {
    return convertToPresentationWithAdvancedOptions(this, inputFilePath || this.inputFiles.sampleDocx)
  }

  async convertToSpreadsheetWithAdvancedOptions(inputFilePath = '') {
    return convertToSpreadsheetWithAdvancedOptions(this, inputFilePath || this.inputFiles.sampleDocx)
  }

  async convertToWordProcessingWithAdvancedOptions(inputFilePath = '') {
    return convertToWordProcessingWithAdvancedOptions(this, inputFilePath || this.inputFiles.samplePdf)
  }

  async convertPdfAndFlattenAllFields (inputFilePath = '') {
    return convertPdfAndFlattenAllFields(this, inputFilePath || this.inputFiles.samplePdf)
  }

  async convertPdfAndHideAnnotations (inputFilePath = '') {
    return convertPdfAndHideAnnotations(this, inputFilePath || this.inputFiles.samplePdf)
  }

  async convertPdfAndRemoveEmbeddedFiles (inputFilePath = '') {
    return convertPdfAndRemoveEmbeddedFiles(this, inputFilePath || this.inputFiles.samplePdf)
  }

  async convertPresentationByHidingComments (inputFilePath = '') {
    return convertPresentationByHidingComments(this, inputFilePath || this.inputFiles.pptsWithNotes)
  }

  async convertPresentationBySpecifyingFontSubstitution (inputFilePath = '') {
    return convertPresentationBySpecifyingFontSubstitution(this, inputFilePath || this.inputFiles.pptsWithNotes)
  }

  async convertPresentationWithHiddenSlidesIncluded (inputFilePath = '') {
    return convertPresentationWithHiddenSlidesIncluded(this, inputFilePath || this.inputFiles.pptxWithHiddenPage)
  }

  async convertWordProcessingByHidingComments (inputFilePath = '') {
    return convertWordProcessingByHidingComments(this, inputFilePath || this.inputFiles.sampleDocxWithTrackedChanges)
  }

  async convertWordProcessingByHidingTrackedChanges (inputFilePath = '') {
    return convertWordProcessingByHidingTrackedChanges(this, inputFilePath || this.inputFiles.sampleDocxWithTrackedChanges)
  }

  async convertWordProcessingBySpecifyingFontSubstitution (inputFilePath = '') {
    return convertWordProcessingBySpecifyingFontSubstitution(this, inputFilePath || this.inputFiles.sampleDocxWithTrackedChanges)
  }

  async convertSpreadsheetAndHideComments (inputFilePath = '') {
    return convertSpreadsheetAndHideComments(this, inputFilePath || this.inputFiles.sampleXlsx)
  }

  async convertSpreadsheetByShowingGridLines (inputFilePath = '') {
    return convertSpreadsheetByShowingGridLines(this, inputFilePath || this.inputFiles.sampleXlsx)
  }

  async convertSpreadsheetBySkippingEmptyRowsAndColumns (inputFilePath = '') {
    return convertSpreadsheetBySkippingEmptyRowsAndColumns(this, inputFilePath || this.inputFiles.sampleXlsx)
  }

  async convertSpreadsheetBySpecifyingFontsubstitution (inputFilePath = '') {
    return convertSpreadsheetBySpecifyingFontsubstitution(this, inputFilePath || this.inputFiles.sampleXlsx)
  }

  async convertSpreadsheetBySpecifyingRange (inputFilePath = '') {
    return convertSpreadsheetBySpecifyingRange(this, inputFilePath || this.inputFiles.sampleXlsx)
  }

  async convertSpreadsheetWithHiddenSheetsIncluded (inputFilePath = '') {
    return convertSpreadsheetWithHiddenSheetsIncluded(this, inputFilePath || this.inputFiles.sampleXlsxWithHiddenSheet)
  }

  async convertXmlAsDataSourceToSpreadsheet (inputFilePath = '') {
    return convertXmlAsDataSourceToSpreadsheet(this, inputFilePath || this.inputFiles.sampleDataSource)
  }

  async convertCadAndSpecifyLayouts (inputFilePath = '') {
    return convertCadAndSpecifyLayouts(this, inputFilePath || this.inputFiles.sampleDwgWithLayersAndLayouts)
  }

  async convertCadAndSpecifyWidthAndHeight (inputFilePath = '') {
    return convertCadAndSpecifyWidthAndHeight(this, inputFilePath || this.inputFiles.sampleDwgWithLayersAndLayouts)
  }

  async convertCsvByConvertingDateTimeAndNumericData (inputFilePath = '') {
    return convertCsvByConvertingDateTimeAndNumericData(this, inputFilePath || this.inputFiles.sampleCsv)
  }

  async convertCsvBySpecifyingDelimiter (inputFilePath = '') {
    return convertCsvBySpecifyingDelimiter(this, inputFilePath || this.inputFiles.sampleCsv)
  }

  async convertCsvBySpecifyingEncoding (inputFilePath = '') {
    return convertCsvBySpecifyingEncoding(this, inputFilePath || this.inputFiles.sampleCsv)
  }

  async convertNoteBySpecifyingFontSubstitution (inputFilePath = '') {
    return convertNoteBySpecifyingFontSubstitution(this, inputFilePath || this.inputFiles.sampleOne)
  }

  async convertEmailWithAlteringFieldsVisibility (inputFilePath = '') {
    return convertEmailWithAlteringFieldsVisibility(this, inputFilePath || this.inputFiles.sampleMsg)
  }
  
  async convertTxtByControllingLeadingSpacesBehavior (inputFilePath = '') {
    return convertTxtByControllingLeadingSpacesBehavior(this, inputFilePath || this.inputFiles.sampleTxt)
  }

  async convertTxtByControllingTrailingSpacesBehavior (inputFilePath = '') {
    return convertTxtByControllingTrailingSpacesBehavior(this, inputFilePath || this.inputFiles.sampleTxt)
  }

  async convertTxtBySpecifyingEncoding (inputFilePath = '') {
    return convertTxtBySpecifyingEncoding(this, inputFilePath || this.inputFiles.sampleTxtShiftJsEncoded)
  }

  async loadDocumentFromUrl () {
    return loadDocumentFromUrl(this)
  }

  async loadDocumentFromStream (inputFilePath = '') {
    return loadDocumentFromStream(this, inputFilePath || this.inputFiles.sampleDocx)
  }
}

module.exports = new ConversionExamples()
