const util = require('util');
const path = require('path');

/**
 * This example demonstrates how to get all possible conversion formats for a source document.
 *
 * @param {Object} groupdocs - The GroupDocs.Conversion library instance
 * @param {string} inputFilePath - Path to the input document file
 */
function getPossibleConversions(groupdocs, inputFilePath) {
  // Initialize converter with input file
  const converter = new groupdocs.Converter(inputFilePath);

  // Get all possible conversions for the document
  const conversions = converter.getPossibleConversions();

  // Display source document information
  console.log(
    util.format(
      '\n✓ `%s` file is of type %s and could be converted to:\n',
      path.basename(inputFilePath),
      conversions.getSource().getExtension().toUpperCase(),
    ),
  );

  // Get all available conversion formats
  const items = conversions.getAll();

  // Initialize spliterator for iteration
  items.spliterator().getExactSizeIfKnown();

  // Separate primary and secondary conversions
  const primary = [];
  const secondary = [];

  for (let i = 0; i < items.size(); i += 1) {
    const item = items.get(i);
    const extension = item.getFormat().getExtension();
    if (item.isPrimary()) {
      primary.push(extension);
    } else {
      secondary.push(extension);
    }
  }

  // Display conversions as arrays
  console.log(`Primary: [${primary.join(', ')}]`);
  console.log(`Secondary: [${secondary.join(', ')}]`);
}

module.exports = getPossibleConversions;
