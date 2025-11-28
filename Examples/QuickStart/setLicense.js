const fs = require('fs');

/**
 * This example demonstrates how to set license from a file stream using callback-based API.
 *
 * @param {Object} groupdocs - The GroupDocs.Conversion library instance
 * @param {string} licensePath - Path to the license file
 * @returns {Promise<void>} Promise that resolves when license is set or error is handled
 */
async function setLicense(groupdocs, licensePath) {
  // Create license instance
  const lic = new groupdocs.License();

  // Create read stream from license file
  const readStream = fs.createReadStream(licensePath);

  // Set license from stream using callback-based API
  return new Promise((resolve) => {
    // eslint-disable-next-line no-promise-executor-return
    groupdocs.License.setLicenseFromStream(lic, readStream, (err) => {
      if (err) {
        console.log('\n' + '='.repeat(60));
        console.log('License file not found or invalid.');
        console.log('='.repeat(60));
        console.log('To obtain a license:');
        console.log('  • Visit: https://purchase.groupdocs.com/');
        console.log('  • Request a temporary license: https://purchase.groupdocs.com/temp-license/104266');
        console.log('  • Learn more: https://purchase.groupdocs.com/faqs/licensing/');
        console.log('='.repeat(60) + '\n');
        resolve();
      } else {
        console.log('\n✓ License set successfully.');
        resolve();
      }
    });
  });
}

module.exports = setLicense;
