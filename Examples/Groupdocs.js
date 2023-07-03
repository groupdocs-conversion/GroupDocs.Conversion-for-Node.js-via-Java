require('dotenv').config()
const path = require('path')
const fs = require('fs')

const conversion = require('../../tools/GenJS/configs/groupdocs.conversion')

// Constant Variables 
const Constants = require('./Constans')

// Basic Methods
const getPossibleConversions = require('./BasicUsage/GetPossibleConversions')
const getSourceDocumentInfo = require('./BasicUsage/GetSourceDocument_info')
const setLicense = require('./QuickStart/SetLicense')

// Conversion Methods
const ConvertToPdf = require('./BasicUsage/ConvertToPdf')
const ConvertToWordProcessing = require('./BasicUsage/ConvertToWordProcessing')
const ConvertToSpreadsheet = require('./BasicUsage/ConvertToSpreadsheet')
const ConvertToPresentation = require('./BasicUsage/ConvertToPresentation')
const ConvertToHTML = require('./BasicUsage/ConvertToHtml')
const ConvertToPdfWithAdvancedOptions = require('./AdvancedUsage/ConvertToPdfWithAdvancedOptions')

class Groupdocs {
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

  async ConvertToHTML(inputFilePath = '') {
    return ConvertToHTML(this, inputFilePath || this.inputFiles.sampleDocx)
  }

  async ConvertToPdf(inputFilePath = '') {
    return ConvertToPdf(this, inputFilePath || this.inputFiles.sampleDocx)
  }

  async ConvertToPresentation(inputFilePath = '') {
    return ConvertToPresentation(this, inputFilePath || this.inputFiles.sampleDocx)
  }

  async ConvertToSpreadsheet(inputFilePath = '') {
    return ConvertToSpreadsheet(this, inputFilePath || this.inputFiles.sampleDocx)
  }

  async ConvertToWordProcessing(inputFilePath = '') {
    return ConvertToWordProcessing(this, inputFilePath || this.inputFiles.samplePdf)
  }

  async ConvertToPdfWithAdvancedOptions(inputFilePath = '') {
    return ConvertToPdfWithAdvancedOptions(
      this,
      inputFilePath || this.inputFiles.sampleDocxPasswordProtected
    )
  }
}

module.exports = new Groupdocs()
