const fs = require('fs');

/**
 * This example demonstrates how to set license from a file stream.
 *
 * @param {Object} groupdocs - The GroupDocs.Conversion library instance
 * @param {string} licensePath - Path to the license file
 * @returns {Promise<void>} Promise that resolves when license is set or error is handled
 */
async function setLicenseFromStream(groupdocs, licensePath) {
  try {
    // Create read stream from license file
    const licenseStream = fs.createReadStream(licensePath);

    // Read data from stream using GroupDocs API
    const stream = await groupdocs.readDataFromStream(licenseStream);

    // Create license instance and set license from stream
    const license = new groupdocs.License();
    await license.setLicense(stream);

    console.log('\n✓ License set successfully.');
  } catch (err) {
    console.log(err);
    console.log('\n' + '='.repeat(60));
    console.log('License file not found or invalid.');
    console.log('='.repeat(60));
    console.log('\nTo obtain a license:');
    console.log('  • Visit: https://purchase.groupdocs.com/');
    console.log('  • Request a temporary license: https://purchase.groupdocs.com/temporary-license');
    console.log('  • Learn more: https://purchase.groupdocs.com/faqs/licensing');
    console.log('='.repeat(60) + '\n');
  }
}

module.exports = setLicenseFromStream;
