# GroupDocs.Conversion-for-Node.js-via-Java

![GitHub release (latest by date)](https://img.shields.io/github/v/release/groupdocs-conversion/GroupDocs.conversion-for-Java) ![GitHub](https://img.shields.io/github/license/groupdocs-conversion/GroupDocs.Conversion-for-Java)

GroupDocs.Conversion for Node.js via Java is a [Document Conversion Library](https://products.groupdocs.com/conversion/java) designed to convert back and forth between over [50 types of documents and images](https://docs.groupdocs.com/conversion/java/supported-document-formats/), including all Microsoft Office and OpenDocument file formats, PDF documents, HTML, CAD, raster images (TIFF, JPEG, GIF, PNG, BMP) and more. 

<p align="center">

  <a title="Download complete GroupDocs.Conversion for Java source code" href="https://github.com/groupdocs-conversion/GroupDocs.Conversion-for-Node.js-via-Java/archive/refs/heads/master.zip">
	<img src="https://raw.github.com/AsposeExamples/java-examples-dashboard/master/images/downloadZip-Button-Large.png" />
  </a>
</p>

Directory | Description
--------- | -----------
[Docs](https://github.com/groupdocs-conversion/GroupDocs.Conversion-Docs)  | Product documentation containing the Developer's Guide, Release Notes and more.
[Examples](https://github.com/groupdocs-conversion/GroupDocs.Conversion-for-Node.js-via-Java/tree/demo/Examples)  | Node.js examples and sample documents for you to get started quickly. 
[Demos](https://github.com/groupdocs-conversion/GroupDocs.Conversion-for-Node.js-via-Java/tree/demo/Demos)  | Build Document Conversion applications using GroupDocs.Conversion for Node.js via Java. 

## Universal Document Converter 

- Convert whole document to desired target format.
- [Convert specific document page(s) or page ranges](https://docs.groupdocs.com/conversion/java/convert-specific-pages/).
- Auto-detect source document format on the fly without requiring the file extension.
- Obtain a list of all supported conversion formats.
- Replace missing fonts.
- Add text or image watermarks to any page.
- Extract document's basic information.
- Load source document with extended options;
   - [Specify password for password-protected documents](https://docs.groupdocs.com/conversion/java/load-password-protected-document/).
   - Load specific part or pages of the document.
   - Hide or show document comments.

## Get Started with GroupDocs.Conversion for Node.js via Java

GroupDocs.Conversion for Node.js via Java requires J2SE 7.0 (1.7), J2SE 8.0 (1.8) or above. Please install Java first if you do not have it already. 

## Convert DOCX to HTML

```js
const converter = new groupdocs.conversion.Converter("sample.docx")
const options = new groupdocs.conversion.MarkupConvertOptions()
converter.convert("ConvertToHtml.html", options);
```

## Convert PDF to DOCX

```js
const converter = new groupdocs.conversion.Converter("sample.pdf")
const options = new groupdocs.conversion.WordProcessingConvertOptions()
converter.convert("output.docx", options)
```

## Convert Word to Presentation

```js
const converter = new groupdocs.conversion.Converter(inputFilePath)
const options = new groupdocs.conversion.PresentationConvertOptions()
converter.convert("output.pptx", options)
```

[Home](https://www.groupdocs.com/) | [Product Page](https://products.groupdocs.com/conversion/java) | [Documentation](https://docs.groupdocs.com/conversion/java/) | [Demos](https://products.groupdocs.app/conversion/family) | [API Reference](https://apireference.groupdocs.com/java/conversion) | [Examples](https://github.com/groupdocs-conversion/GroupDocs.Conversion-for-Node.js-via-Java/tree/demo/Examples) | [Blog](https://blog.groupdocs.com/category/annotation/) | [Free Support](https://forum.groupdocs.com/c/conversion) | [Temporary License](https://purchase.groupdocs.com/temporary-license)
