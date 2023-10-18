const fs = require('fs')

const conversion = require('@groupdocs/groupdocs.conversion')
// const ArrayList = conversion.Java.import('java.util.ArrayList');

// Constant Variables 
const Constants = require('./constants')

// Basic Methods
const getPossibleConversions = require('./BasicUsage/getPossibleConversions')
const getSourceDocumentInfo = require('./BasicUsage/getSourceDocumenInfo')
const setLicense = require('./QuickStart/setLicense')

// Conversion Methods
const convertToPdf = require('./BasicUsage/convertToPdf')
const convertToWordProcessing = require('./BasicUsage/convertToWordProcessing')
const convertToSpreadsheet = require('./BasicUsage/convertToSpreadsheet')
const convertToPresentation = require('./BasicUsage/convertToPresentation')

/* Conversion with advanced options */
//    Converting
const convertToPdfWithAdvancedOptions = require('./AdvancedUsage/converting/convertToPdfWithAdvancedOptions')
const convertConsecutivePagesPdf = require('./AdvancedUsage/converting/convertNConsecutivePages');
const convertSpecificPages = require('./AdvancedUsage/converting/convertSpecificPages')
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

class ConversionExamples {
  constructor() {
    // Initialize the License
    let lic = Constants.LicensePath
    if (!lic || !lic.endsWith('.lic')) console.log('License is not found, continuing with demo version!')
    else this.licensePath = lic

    // Initialize the model
    this.conversion = conversion

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
      sampleDataSource: Constants.SAMPLE_DATASOURCE
    }
  }

  initializeOutputFolder() {
    this.outputFolder = Constants.OutputPath
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

  async convertConsecutivePagesPdf(inputFilePath = '') {
    return convertConsecutivePagesPdf(this, inputFilePath || this.inputFiles.samplePdf)
  }

  async convertSpecificPagesPdf(inputFilePath = '') {
    return convertSpecificPages(this, inputFilePath || this.inputFiles.samplePdf)
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
}

module.exports = new ConversionExamples()
