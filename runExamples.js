const conversion = require('@groupdocs/groupdocs.conversion')
const createConversionExamples = require('./Examples/conversionExamples')
const getExampleList = require('./Examples/examplesToRun')

const examples = createConversionExamples(conversion)
const exampleList = getExampleList(examples)

// CALL EXAMPLES
examples.getPossibleConversions()
examples.getSourceDocumentInfo()

;(async () => {
  try {
    console.log('Start conversion. \nIn Main() method uncomment the example that you want to run.')
    await examples.setLicense() // You can pass the licensePath as an argument, it's optional

    await Promise.all(exampleList.map(i => i.bind(examples)()))
    console.log('The end of process.')
    process.exit(0)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
})()