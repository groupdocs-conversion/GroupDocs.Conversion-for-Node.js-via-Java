# GroupDocs.Conversion for Node.js via Java — Code Examples

This repository contains runnable code examples demonstrating how to use GroupDocs.Conversion for Node.js via Java to convert documents, spreadsheets, presentations, PDFs, images, emails, and more between various formats.

## Quick Start

### Prerequisites

- **Node.js** 20 LTS or later
- **Java** JRE/JDK 8+ (17 LTS recommended)
- **Java Environment**: Set `JAVA_HOME` and add to `PATH`

**Windows PowerShell:**
```powershell
$env:JAVA_HOME="C:\Program Files\Java\jdk-17"
$env:Path="$env:JAVA_HOME\bin;$env:Path"
```

**Linux/macOS:**
```bash
export JAVA_HOME=/usr/lib/jvm/java-17-openjdk
export PATH=$JAVA_HOME/bin:$PATH
```

For detailed installation instructions and platform-specific notes, refer to the documentation:

- [Installation](https://docs.groupdocs.com/conversion/nodejs-java/installation/)
- [System Requirements](https://docs.groupdocs.com/conversion/nodejs-java/system-requirements/)

### Installation

```bash
npm install
```

This installs the bundled package (`@groupdocs/groupdocs.conversion`) referenced in `package.json`.

## Running Examples

### Run All Examples

Execute all examples: 

```bash
npm start
```

Or directly:

```bash
node Examples/runExamples.js
```

Outputs are saved to `Examples/Output/<example-name>/`.

## Example Structure

Examples are organized into three categories:

### QuickStart

Minimal examples to get started:

- **`setLicense.js`** - License setup from stream (callback-based API)
- **`setLicenseFromFile.js`** - License setup from file path
- **`setLicenseFromStream.js`** - License setup from file stream

### BasicUsage

Core conversion functionality examples:

| File | What It Demonstrates |
|------|---------------------|
| `convertToPdf.js` | Convert DOCX to PDF |
| `convertToHtml.js` | Convert document to HTML |
| `convertToWordProcessing.js` | Convert PDF to DOCX |
| `convertToSpreadsheet.js` | Convert DOCX to XLSX |
| `convertToPresentation.js` | Convert DOCX to PPTX |
| `convertToImagePng.js` | Convert DOCX to PNG image |
| `getPossibleConversions.js` | Get all supported conversion formats for a document |
| `getSourceDocumenInfo.js` | Get document metadata and properties |

### AdvancedUsage

Advanced scenarios organized by feature:

#### Converting (`AdvancedUsage/Converting/`)

- **`convertToPdfWithAdvancedOptions.js`** - Convert password-protected document to PDF with page selection, rotation, DPI, and custom dimensions
- **`convertToHtmlWithAdvancedOptions.js`** - Convert password-protected document to HTML with fixed layout and page selection
- **`convertToImageWithAdvancedOptions.js`** - Convert PDF to PNG with image transformations (flip, brightness, contrast, gamma, grayscale, resolution)
- **`convertToWordProcessingWithAdvancedOptions.js`** - Convert PDF to DOCX with page selection and format specification
- **`convertToSpreadsheetWithAdvancedOptions.js`** - Convert password-protected document to XLS with page selection
- **`convertToPresentationWithAdvancedOptions.js`** - Convert password-protected document to PPT with page selection
- **`common/addWatermark.js`** - Add watermark text during conversion
- **`common/convertNConsecutivePages.js`** - Convert a range of consecutive pages
- **`common/convertSpecificPages.js`** - Convert specific pages by page numbers

#### Loading (`AdvancedUsage/Loading/`)

**LoadOptionsFromDifferentSources:**
- **`loadDocumentFromLocalDisk.js`** - Load document from local file system
- **`loadDocumentFromStream.js`** - Load document from file stream
- **`loadDocumentFromUrl.js`** - Download and convert document from URL

**LoadOptionsByDocumentType:**

**PDF:**
- **`Pdf/convertPdfAndFlattenAllFields.js`** - Flatten PDF form fields during conversion
- **`Pdf/convertPdfAndHideAnnotations.js`** - Hide PDF annotations during conversion
- **`Pdf/convertPdfAndRemoveEmbeddedFiles.js`** - Remove embedded files from PDF

**Word Processing:**
- **`WordProcessing/convertWordProcessingByHidingComments.js`** - Hide comments in Word documents
- **`WordProcessing/convertWordProcessingByHidingTrackedChanges.js`** - Hide tracked changes in Word documents
- **`WordProcessing/convertWordProcessingBySpecifyingFontSubstitution.js`** - Custom font substitution for Word documents

**Spreadsheet:**
- **`Spreadsheet/convertSpreadsheetAndHideComments.js`** - Hide comments in spreadsheets
- **`Spreadsheet/convertSpreadsheetByShowingGridLines.js`** - Show grid lines in spreadsheet conversion
- **`Spreadsheet/convertSpreadsheetBySkippingEmptyRowsAndColumns.js`** - Skip empty rows and columns
- **`Spreadsheet/convertSpreadsheetBySpecifyingRange.js`** - Convert specific row range (e.g., rows 10-30)
- **`Spreadsheet/convertSpreadsheetBySpecifyingFontsubstitution.js`** - Custom font substitution for spreadsheets
- **`Spreadsheet/convertSpreadsheetWithHiddenSheetsIncluded.js`** - Include hidden sheets in conversion

**Presentation:**
- **`Presentation/convertPresentationByHidingComments.js`** - Hide comments in presentations
- **`Presentation/convertPresentationBySpecifyingFontSubstitution.js`** - Custom font substitution for presentations
- **`Presentation/convertPresentationWithHiddenSlidesIncluded.js`** - Include hidden slides in conversion

**Text:**
- **`Txt/convertTxtBySpecifyingEncoding.js`** - Convert text files with specific encoding (e.g., Shift-JIS)
- **`Txt/convertTxtByControllingLeadingSpacesBehavior.js`** - Control leading spaces behavior (convert to indent)
- **`Txt/convertTxtByControllingTrailingSpacesBehavior.js`** - Control trailing spaces behavior (trim)

**CSV:**
- **`Csv/convertCsvBySpecifyingDelimiter.js`** - Convert CSV with custom delimiter
- **`Csv/convertCsvBySpecifyingEncoding.js`** - Convert CSV with specific encoding
- **`Csv/convertCsvByConvertingDateTimeAndNumericData.js`** - Automatic date/time and numeric data conversion

**XML:**
- **`Xml/convertXmlAsDataSourceToSpreadsheet.js`** - Convert XML as data source to spreadsheet

**Email:**
- **`Email/convertEmailWithAlteringFieldsVisibility.js`** - Control email field visibility (header, addresses, etc.)

**CAD:**
- **`Cad/convertCadAndSpecifyLayouts.js`** - Convert specific CAD layouts
- **`Cad/convertCadAndSpecifyWidthAndHeight.js`** - Convert CAD with custom dimensions

**Note:**
- **`Note/convertNoteBySpecifyingFontSubstitution.js`** - Custom font substitution for OneNote documents

## Example Code Snippets

### Basic Conversion (DOCX to PDF)

```javascript
// BasicUsage/convertToPdf.js
const converter = new groupdocs.Converter(Constants.SAMPLE_DOCX);
const convertOptions = new groupdocs.PdfConvertOptions();
const outputPath = `${Constants.OUTPUT_FOLDER}/ConvertToPdf.pdf`;
await converter.convert(outputPath, convertOptions);
```

### Basic Conversion (Document to HTML)

```javascript
// BasicUsage/convertToHtml.js
const converter = new groupdocs.Converter(Constants.SAMPLE_DOCX);
const convertOptions = new groupdocs.MarkupConvertOptions();
const outputPath = `${Constants.OUTPUT_FOLDER}/ConvertToHtml.html`;
await converter.convert(outputPath, convertOptions);
```

### Password-Protected Document

```javascript
// AdvancedUsage/Converting/convertToPdfWithAdvancedOptions.js
const loadOptions = new groupdocs.WordProcessingLoadOptions();
loadOptions.setPassword('12345');

const converter = new groupdocs.Converter(Constants.SAMPLE_DOCX_WITH_PASSWORD, loadOptions);
const convertOptions = new groupdocs.PdfConvertOptions();
convertOptions.setPageNumber(2);
convertOptions.setPagesCount(1);
convertOptions.setRotate(groupdocs.Rotation.On180);
convertOptions.setDpi(300);
convertOptions.setWidth(1024);
convertOptions.setHeight(768);

await converter.convert(outputPath, convertOptions);
```

### Add Watermark

```javascript
// AdvancedUsage/Converting/common/addWatermark.js
const converter = new groupdocs.Converter(Constants.SAMPLE_DOCX);
const convertOptions = new groupdocs.PdfConvertOptions();

const watermark = new groupdocs.WatermarkTextOptions("Sample watermark");
watermark.setColor("red");
watermark.setWidth(100);
watermark.setHeight(100);
watermark.setBackground(true);

convertOptions.setWatermark(watermark);
await converter.convert(outputPath, convertOptions);
```

### Convert Specific Pages

```javascript
// AdvancedUsage/Converting/common/convertSpecificPages.js
const ArrayList = require('java').import('java.util.ArrayList');

const converter = new groupdocs.Converter(Constants.SAMPLE_DOCX);
const convertOptions = new groupdocs.PdfConvertOptions();

const pages = new ArrayList();
pages.add(1); // First page
pages.add(3); // Third page
convertOptions.setPages(pages);

await converter.convert(outputPath, convertOptions);
```

### Load from Stream

```javascript
// AdvancedUsage/Loading/LoadOptionsFromDifferentSources/loadDocumentFromStream.js
const fs = require('fs');

const readStream = fs.createReadStream(Constants.SAMPLE_DOCX);
const stream = await groupdocs.readDataFromStream(readStream);
const converter = new groupdocs.Converter(stream);
const convertOptions = new groupdocs.PdfConvertOptions();

await converter.convert(outputPath, convertOptions);
```

### Load from URL

```javascript
// AdvancedUsage/Loading/LoadOptionsFromDifferentSources/loadDocumentFromUrl.js
const java = require('java');
const URL = java.import('java.net.URL');

const url = 'https://example.com/document.docx';
const stream = new URL(url).openStream();
const converter = new groupdocs.Converter(stream);
const convertOptions = new groupdocs.PdfConvertOptions();

await converter.convert(outputPath, convertOptions);
```

### Get Document Info

```javascript
// BasicUsage/getSourceDocumenInfo.js
const converter = new groupdocs.Converter(Constants.SAMPLE_DOCX);
const documentInfo = converter.getDocumentInfo();

console.log(`Author: ${documentInfo.getAuthor()}`);
console.log(`Pages count: ${documentInfo.getPagesCount()}`);
console.log(`Width: ${documentInfo.getWidth()}`);
console.log(`Height: ${documentInfo.getHeight()}`);
```

### Get Possible Conversions

```javascript
// BasicUsage/getPossibleConversions.js
const converter = new groupdocs.Converter(Constants.SAMPLE_DOCX);
const conversions = converter.getPossibleConversions();

console.log(`Source type: ${conversions.getSource().getExtension()}`);

const items = conversions.getAll();
for (let i = 0; i < items.size(); i += 1) {
  const item = items.get(i);
  console.log(`${item.getFormat().getExtension()} as ${item.isPrimary() ? 'primary' : 'secondary'} conversion`);
}
```

## Using the Examples Module

All examples are accessible through `Examples/examples.js`:

```javascript
const examples = require('./Examples/examples');

// Basic examples
await examples.getPossibleConversions();
await examples.getSourceDocumentInfo();
await examples.convertToHtml();
await examples.convertToPdf();
await examples.convertToWordProcessing();
await examples.convertToSpreadsheet();
await examples.convertToPresentation();
await examples.convertToImagePng();

// Advanced examples
await examples.convertToPdfWithAdvancedOptions();
await examples.addWatermark();
await examples.convertConsecutivePagesPdf();
await examples.convertSpecificPages();
await examples.loadDocumentFromStream();
await examples.loadDocumentFromUrl();
await examples.convertPdfAndFlattenAllFields();
await examples.convertWordProcessingByHidingComments();
```

## Project Structure

```
├── Examples/
│   ├── BasicUsage/              # Basic conversion examples
│   │   ├── convertToPdf.js
│   │   ├── convertToHtml.js
│   │   ├── convertToWordProcessing.js
│   │   ├── convertToSpreadsheet.js
│   │   ├── convertToPresentation.js
│   │   ├── convertToImagePng.js
│   │   ├── getPossibleConversions.js
│   │   └── getSourceDocumenInfo.js
│   │
│   ├── AdvancedUsage/          # Advanced features
│   │   ├── Converting/         # Advanced conversion scenarios
│   │   │   ├── convertToPdfWithAdvancedOptions.js
│   │   │   ├── convertToHtmlWithAdvancedOptions.js
│   │   │   ├── convertToImageWithAdvancedOptions.js
│   │   │   └── common/
│   │   │       ├── addWatermark.js
│   │   │       ├── convertNConsecutivePages.js
│   │   │       └── convertSpecificPages.js
│   │   │
│   │   └── Loading/           # Document loading options
│   │       ├── LoadOptionsFromDifferentSources/
│   │       │   ├── loadDocumentFromLocalDisk.js
│   │       │   ├── loadDocumentFromStream.js
│   │       │   └── loadDocumentFromUrl.js
│   │       │
│   │       └── LoadOptionsByDocumentType/
│   │           ├── Pdf/
│   │           ├── WordProcessing/
│   │           ├── Spreadsheet/
│   │           ├── Presentation/
│   │           ├── Txt/
│   │           ├── Csv/
│   │           ├── Xml/
│   │           ├── Email/
│   │           ├── Cad/
│   │           └── Note/
│   │
│   ├── QuickStart/            # Quick start examples
│   │   ├── setLicense.js
│   │   ├── setLicenseFromFile.js
│   │   └── setLicenseFromStream.js
│   │
│   ├── Resources/
│   │   └── SampleFiles/      # Sample input files
│   │       ├── sample.docx
│   │       ├── sample.pdf
│   │       ├── sample.xlsx
│   │       └── ...
│   │
│   ├── Output/                # Generated results (auto-created)
│   │
│   ├── constants.js           # File paths and configuration
│   ├── examples.js            # Example runner module
│   └── runExamples.js         # Run all examples
│
├── .env.example               # Environment variables template
├── package.json
└── README.md
```

## Input and Output

- **Input Files**: `Examples/Resources/SampleFiles/` (configured in `Examples/constants.js`)
- **Output Files**: `Examples/Output/<example-name>/` (auto-created per example)

Modify `Examples/constants.js` to change paths if needed.

## License Setup (Optional)

Examples run in trial mode by default. To use a license:

**Option 1: Environment variable**

Create `.env`:
```env
GROUPDOCS_LICENSE=C:\path\to\license.lic
```

**Option 2: Programmatic**

```javascript
const examples = require('./Examples/examples');
await examples.setLicenseFromFile(Constants.LICENSE_PATH);
```

**Get a temporary license**: [GroupDocs Temporary License](https://purchase.groupdocs.com/temporary-license)

## Supported Formats

GroupDocs.Conversion supports conversion between 50+ document formats including:

- **Word Processing**: DOC, DOCX, RTF, ODT, TXT
- **Spreadsheet**: XLS, XLSX, CSV, ODS
- **Presentation**: PPT, PPTX, ODP
- **PDF**: PDF
- **Images**: PNG, JPEG, BMP, TIFF, GIF, SVG
- **Markup**: HTML, XML
- **Email**: MSG, EML, EMLX
- **CAD**: DWG, DXF, DWF
- **Note**: ONE
- And more...

For a complete list, see: [Supported File Formats](https://docs.groupdocs.com/conversion/nodejs-java/supported-document-formats/)

## Troubleshooting

### Java Not Detected

Set `JAVA_HOME` and add to `PATH` (see Prerequisites above).

### Build Errors

Install build tools:
- **Windows**: Visual Studio Build Tools
- **Linux**: `sudo apt-get install build-essential`
- **macOS**: `xcode-select --install`

### Output Permission Errors

Ensure write access to `Examples/Output/` directory.

### Missing Fonts

Install common fonts (especially on Linux servers):
- Microsoft Core Fonts
- Liberation Fonts
- DejaVu Fonts

### License Errors

If you see license-related messages, ensure:
1. License file path is correct in `.env` or `Constants.LICENSE_PATH`
2. License file is valid and not expired
3. License matches the product version

## Resources

- **Documentation**: [docs.groupdocs.com/conversion/nodejs-java](https://docs.groupdocs.com/conversion/nodejs-java/)
- **API Reference**: [apireference.groupdocs.com/conversion/nodejs-java](https://apireference.groupdocs.com/conversion/nodejs-java)
- **Support Forum**: [forum.groupdocs.com/c/conversion](https://forum.groupdocs.com/c/conversion)
- **Product Page**: [products.groupdocs.com/conversion/nodejs-java](https://products.groupdocs.com/conversion/nodejs-java)

---

**Note**: These are code examples demonstrating GroupDocs.Conversion features. For production use, ensure you have a valid license.
