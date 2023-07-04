require('dotenv').config()
const groupdocs = require('../Examples/Groupdocs')

// CALL EXAMPLES

groupdocs.getPossibleConversions()
groupdocs.getSourceDocumentInfo()
;(async () => {
  try {
    console.log('Start conversion. \nIn Main() method uncomment the example that you want to run.')
    await groupdocs.setLicense() // You can pass the licensePath as an argument, it's optional

    await Promise.all([
      // NOTE: Please uncomment the example you want to try out
      // Basic usage
      groupdocs.converToHTML(),
      groupdocs.convertToPdf(),
      groupdocs.convertToPresentation(),
      groupdocs.convertToSpreadsheet(),
      groupdocs.convertToWordProcessing(),
      // Advanced usage
      groupdocs.convertToPdfWithAdvancedOptions(),
    ])
    console.log('The end of process.')
    process.exit(0)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
})()