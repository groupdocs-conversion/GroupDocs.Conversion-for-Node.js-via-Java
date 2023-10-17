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
const convertPresentationByHiddingComments = require('./AdvancedUsage/Loading/LoadOptionsByDocumentType/Presentation/convertPresentationByHiddingComments')
const convertPresentationBySpecifyingFontSubstitution = require('./AdvancedUsage/Loading/LoadOptionsByDocumentType/Presentation/convertPresentationBySpecifyingFontSubstitution')
const convertPresentationWithHiddenSlidesIncluded = require('./AdvancedUsage/Loading/LoadOptionsByDocumentType/Presentation/convertPresentationWithHiddenSlidesIncluded')
const convertWordProcessingByHiddingComments = require('./AdvancedUsage/Loading/LoadOptionsByDocumentType/WordProcessing/convertWordProcessingByHiddingComments')
const convertWordProcessingByHiddingTrackedChanges = require('./AdvancedUsage/Loading/LoadOptionsByDocumentType/WordProcessing/convertWordProcessingByHiddingTrackedChanges')
const convertWordProcessingBySpecifyingFontSubstitution = require('./AdvancedUsage/Loading/LoadOptionsByDocumentType/WordProcessing/convertWordProcessingBySpecifyingFontSubstitution')

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
      sampleDocxWithTrackedChanges: Constants.SAMPLE_DOCX_WITH_TRACKED_CHANGES
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

  async convertPresentationByHiddingComments (inputFilePath = '') {
    return convertPresentationByHiddingComments(this, inputFilePath || this.inputFiles.pptsWithNotes)
  }

  async convertPresentationBySpecifyingFontSubstitution (inputFilePath = '') {
    return convertPresentationBySpecifyingFontSubstitution(this, inputFilePath || this.inputFiles.pptsWithNotes)
  }

  async convertPresentationWithHiddenSlidesIncluded (inputFilePath = '') {
    return convertPresentationWithHiddenSlidesIncluded(this, inputFilePath || this.inputFiles.pptxWithHiddenPage)
  }

  async convertWordProcessingByHiddingComments (inputFilePath = '') {
    return convertWordProcessingByHiddingComments(this, inputFilePath || this.inputFiles.sampleDocxWithTrackedChanges)
  }

  async convertWordProcessingByHiddingTrackedChanges (inputFilePath = '') {
    return convertWordProcessingByHiddingTrackedChanges(this, inputFilePath || this.inputFiles.sampleDocxWithTrackedChanges)
  }

  async convertWordProcessingBySpecifyingFontSubstitution (inputFilePath = '') {
    return convertWordProcessingBySpecifyingFontSubstitution(this, inputFilePath || this.inputFiles.sampleDocxWithTrackedChanges)
  }
}

module.exports = new ConversionExamples()
