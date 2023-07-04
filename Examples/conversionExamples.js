const fs = require('fs')

const conversion = require('./groupdocs.conversion')

// Constant Variables 
const Constants = require('./constants')

// Basic Methods
const getPossibleConversions = require('./BasicUsage/getPossibleConversions')
const getSourceDocumentInfo = require('./BasicUsage/getSourceDocument_info')
const setLicense = require('./QuickStart/setLicense')

// Conversion Methods
const convertToPdf = require('./BasicUsage/convertToPdf')
const convertToWordProcessing = require('./BasicUsage/convertToWordProcessing')
const convertToSpreadsheet = require('./BasicUsage/convertToSpreadsheet')
const convertToPresentation = require('./BasicUsage/convertToPresentation')
const convertToHTML = require('./BasicUsage/convertToHtml')
const convertToPdfWithAdvancedOptions = require('./AdvancedUsage/convertToPdfWithAdvancedOptions')

class ConversionExamples {
  constructor() {
    // Initialize the License
    this.licensePath = Constants.LicensePath
    if (!this.licensePath) console.log('License is not found, continuing with demo version!')

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
    return getPossibleConversions(this, inputFilePath || this.inputFiles.samplePdf)
  }

  getSourceDocumentInfo(inputFilePath = '') {
    return getSourceDocumentInfo(this, inputFilePath || this.inputFiles.samplePdf)
  }

  async setLicense(licensePath = '') {
    return setLicense(this, licensePath || this.licensePath)
  }

  async convertToHTML(inputFilePath = '') {
    return convertToHTML(this, inputFilePath || this.inputFiles.sampleDocx)
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
}

module.exports = new ConversionExamples()
