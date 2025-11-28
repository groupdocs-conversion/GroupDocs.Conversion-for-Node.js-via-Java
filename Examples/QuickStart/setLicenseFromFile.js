/**
 * This example demonstrates how to set license from a file path.
 *
 * @param {Object} groupdocs - The GroupDocs.Conversion library instance
 * @param {string} licensePath - Path to the license file
 * @returns {Promise<void>} Promise that resolves when license is set or error is handled
 */
async function setLicenseFromFile(groupdocs, licensePath) {
  try {
    const license = new groupdocs.License();
    await license.setLicense(licensePath);

    console.log('\n✓ License set successfully.');
  } catch (err) {
    console.log(err);
    console.log('\n' + '='.repeat(60));
    console.log('License file not found or invalid.');
    console.log('='.repeat(60));
    console.log('To obtain a license:');
    console.log('  • Visit: https://purchase.groupdocs.com/');
    console.log('  • Request a temporary license: https://purchase.groupdocs.com/temp-license/104266');
    console.log('  • Learn more: https://purchase.groupdocs.com/faqs/licensing/');
    console.log('='.repeat(60) + '\n');
  }
}

module.exports = setLicenseFromFile;
