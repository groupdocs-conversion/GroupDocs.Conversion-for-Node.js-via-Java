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

// Conversion with advanced options
const convertToPdfWithAdvancedOptions = require('./AdvancedUsage/convertToPdfWithAdvancedOptions')
const convertConsecutivePagesPdf = require('./AdvancedUsage/convertNConsecutivePages');
const convertSpecificPages = require('./AdvancedUsage/convertSpecificPages')
const convertToImageWithAdvancedOptions = require('./AdvancedUsage/convertToImageWithAdvancedOptions')
const convertToHtmlWithAdvancedOptions = require('./AdvancedUsage/convertToHtmlWithAdvancedOptions')
const convertToPresentationWithAdvancedOptions = require('./AdvancedUsage/convertToPresentationWithAdvancedOptions')
const convertToSpreadsheetWithAdvancedOptions = require('./AdvancedUsage/convertToSpreadsheetWithAdvancedOptions')
const convertToWordProcessingWithAdvancedOptions = require('./AdvancedUsage/convertToWordProcessingWithAdvancedOptions')

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
}

module.exports = new ConversionExamples()
