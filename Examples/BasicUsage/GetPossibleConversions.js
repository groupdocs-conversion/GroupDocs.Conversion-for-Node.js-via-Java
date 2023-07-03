const util = require('util')

function getPossibleConversions(groupdocs, inputFilePath) {
  const converter = new groupdocs.conversion.Converter(inputFilePath)
  const conversions = converter.getPossibleConversions()
  console.log(
    util.format(
      '%s is of type %s and could be converted to:\n',
      inputFilePath,
      conversions.getSource().getExtension()
    )
  )

  const items = conversions.getAll()
  console.log(items)

  items.spliterator().getExactSizeIfKnown()

  for (let i = 0; i < items.size(); i += 1) {
    const item = items.get(i)
    console.log(
      `\t ${item.getFormat().getExtension()} as ${
        item.isPrimary() ? 'primary' : 'secondary'
      } conversion.\n`
    )
  }
}

module.exports = getPossibleConversions
