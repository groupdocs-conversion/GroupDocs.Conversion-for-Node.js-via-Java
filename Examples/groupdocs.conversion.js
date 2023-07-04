const path = require('path')
const java = require('java')
const os = require('os')

if (os.platform() === 'darwin') {
  java.options.push('-Djava.awt.headless=true')
}

java.asyncOptions = {
  asyncSuffix: 'Async',
  syncSuffix: '',
}

java.classpath.push(path.join(__dirname, 'Resources/Dependencies/groupdocs-conversion-23.2.jar'))
java.classpath.push(path.join(__dirname, 'Resources/Dependencies/JavaClassBridge.jar'))

exports = module.exports

function __typeof__(objClass) {
  if (objClass !== undefined && objClass.constructor) {
    const strFun = objClass.constructor.toString()
    let className = strFun.substr(0, strFun.indexOf('('))
    className = className.replace('function', '')
    return className.replace(/(^\s*)|(\s*$)/gi, '')
  }
  return typeof objClass
}

/** STREAM HELPERS * */
exports.readDataFromStream = function (readStream, callback) {
  const inputStreamBuffer = new exports.StreamBuffer()
  readStream.on('data', chunk => {
    inputStreamBuffer.write(chunk)
  })
  readStream.on('end', () => {
    callback(inputStreamBuffer.toInputStream())
  })
}

exports.readBytesFromStream = function (readStream, callback) {
  const inputStreamBuffer = new exports.StreamBuffer()
  readStream.on('data', chunk => {
    inputStreamBuffer.write(chunk)
  })
  readStream.on('end', () => {
    const array = Array.from(inputStreamBuffer.toByteArray())
    const javaArray = java.newArray('byte', array)
    callback(javaArray)
  })
}

exports.StreamBuffer = class StreamBuffer {
  constructor() {
    const self = java.newInstanceSync('com.aspose.cells.wrapper.StreamBuffer')

    self.write = function (chunk) {
      const array = Array.from(chunk)
      const javaArray = java.newArray('byte', array)
      self.__proto__.write.call(self, javaArray, 0, javaArray.length)
    }
    return self
  }
}


exports.Converter = java.import("com.groupdocs.conversion.Converter");
exports.ConverterSettings = java.import("com.groupdocs.conversion.ConverterSettings");
exports.FileCache = java.import("com.groupdocs.conversion.caching.FileCache");
exports.MemoryCache = java.import("com.groupdocs.conversion.caching.MemoryCache");
exports.Pair = java.import("com.groupdocs.conversion.contracts.Pair");
exports.SequenceHelpers = java.import("com.groupdocs.conversion.contracts.SequenceHelpers");
exports.AudioDocumentInfo = java.import("com.groupdocs.conversion.contracts.documentinfo.AudioDocumentInfo");
exports.Bzip2DocumentInfo = java.import("com.groupdocs.conversion.contracts.documentinfo.Bzip2DocumentInfo");
exports.CabDocumentInfo = java.import("com.groupdocs.conversion.contracts.documentinfo.CabDocumentInfo");
exports.CadDocumentInfo = java.import("com.groupdocs.conversion.contracts.documentinfo.CadDocumentInfo");
exports.CgmDocumentInfo = java.import("com.groupdocs.conversion.contracts.documentinfo.CgmDocumentInfo");
exports.CpioDocumentInfo = java.import("com.groupdocs.conversion.contracts.documentinfo.CpioDocumentInfo");
exports.CsvDocumentInfo = java.import("com.groupdocs.conversion.contracts.documentinfo.CsvDocumentInfo");
exports.DiagramDocumentInfo = java.import("com.groupdocs.conversion.contracts.documentinfo.DiagramDocumentInfo");
exports.DjVuDocumentInfo = java.import("com.groupdocs.conversion.contracts.documentinfo.DjVuDocumentInfo");
exports.EmailDocumentInfo = java.import("com.groupdocs.conversion.contracts.documentinfo.EmailDocumentInfo");
exports.EmptyDocumentInfo = java.import("com.groupdocs.conversion.contracts.documentinfo.EmptyDocumentInfo");
exports.EpsDocumentInfo = java.import("com.groupdocs.conversion.contracts.documentinfo.EpsDocumentInfo");
exports.EpubDocumentInfo = java.import("com.groupdocs.conversion.contracts.documentinfo.EpubDocumentInfo");
exports.GzipDocumentInfo = java.import("com.groupdocs.conversion.contracts.documentinfo.GzipDocumentInfo");
exports.IcoDocumentInfo = java.import("com.groupdocs.conversion.contracts.documentinfo.IcoDocumentInfo");
exports.ImageDocumentInfo = java.import("com.groupdocs.conversion.contracts.documentinfo.ImageDocumentInfo");
exports.JsonDocumentInfo = java.import("com.groupdocs.conversion.contracts.documentinfo.JsonDocumentInfo");
exports.LzipDocumentInfo = java.import("com.groupdocs.conversion.contracts.documentinfo.LzipDocumentInfo");
exports.LzmaDocumentInfo = java.import("com.groupdocs.conversion.contracts.documentinfo.LzmaDocumentInfo");
exports.MarkdownDocumentInfo = java.import("com.groupdocs.conversion.contracts.documentinfo.MarkdownDocumentInfo");
exports.MarkupDocumentInfo = java.import("com.groupdocs.conversion.contracts.documentinfo.MarkupDocumentInfo");
exports.NoteDocumentInfo = java.import("com.groupdocs.conversion.contracts.documentinfo.NoteDocumentInfo");
exports.PasswordProtectedDocumentInfo = java.import("com.groupdocs.conversion.contracts.documentinfo.PasswordProtectedDocumentInfo");
exports.PclDocumentInfo = java.import("com.groupdocs.conversion.contracts.documentinfo.PclDocumentInfo");
exports.PdfDocumentInfo = java.import("com.groupdocs.conversion.contracts.documentinfo.PdfDocumentInfo");
exports.PersonalStorageDocumentInfo = java.import("com.groupdocs.conversion.contracts.documentinfo.PersonalStorageDocumentInfo");
exports.PresentationDocumentInfo = java.import("com.groupdocs.conversion.contracts.documentinfo.PresentationDocumentInfo");
exports.ProjectManagementDocumentInfo = java.import("com.groupdocs.conversion.contracts.documentinfo.ProjectManagementDocumentInfo");
exports.PsdDocumentInfo = java.import("com.groupdocs.conversion.contracts.documentinfo.PsdDocumentInfo");
exports.PsDocumentInfo = java.import("com.groupdocs.conversion.contracts.documentinfo.PsDocumentInfo");
exports.RarDocumentInfo = java.import("com.groupdocs.conversion.contracts.documentinfo.RarDocumentInfo");
exports.SevenZipDocumentInfo = java.import("com.groupdocs.conversion.contracts.documentinfo.SevenZipDocumentInfo");
exports.SpreadsheetDocumentInfo = java.import("com.groupdocs.conversion.contracts.documentinfo.SpreadsheetDocumentInfo");
exports.SvgDocumentInfo = java.import("com.groupdocs.conversion.contracts.documentinfo.SvgDocumentInfo");
exports.TableOfContentsItem = java.import("com.groupdocs.conversion.contracts.documentinfo.TableOfContentsItem");
exports.TarDocumentInfo = java.import("com.groupdocs.conversion.contracts.documentinfo.TarDocumentInfo");
exports.TexDocumentInfo = java.import("com.groupdocs.conversion.contracts.documentinfo.TexDocumentInfo");
exports.ThreeDDocumentInfo = java.import("com.groupdocs.conversion.contracts.documentinfo.ThreeDDocumentInfo");
exports.TsvDocumentInfo = java.import("com.groupdocs.conversion.contracts.documentinfo.TsvDocumentInfo");
exports.TxtDocumentInfo = java.import("com.groupdocs.conversion.contracts.documentinfo.TxtDocumentInfo");
exports.UnknownDocumentInfo = java.import("com.groupdocs.conversion.contracts.documentinfo.UnknownDocumentInfo");
exports.VcfDocumentInfo = java.import("com.groupdocs.conversion.contracts.documentinfo.VcfDocumentInfo");
exports.VideoDocumentInfo = java.import("com.groupdocs.conversion.contracts.documentinfo.VideoDocumentInfo");
exports.WordProcessingDocumentInfo = java.import("com.groupdocs.conversion.contracts.documentinfo.WordProcessingDocumentInfo");
exports.XmlDocumentInfo = java.import("com.groupdocs.conversion.contracts.documentinfo.XmlDocumentInfo");
exports.XpsDocumentInfo = java.import("com.groupdocs.conversion.contracts.documentinfo.XpsDocumentInfo");
exports.XslFoDocumentInfo = java.import("com.groupdocs.conversion.contracts.documentinfo.XslFoDocumentInfo");
exports.XzDocumentInfo = java.import("com.groupdocs.conversion.contracts.documentinfo.XzDocumentInfo");
exports.ZDocumentInfo = java.import("com.groupdocs.conversion.contracts.documentinfo.ZDocumentInfo");
exports.ZipDocumentInfo = java.import("com.groupdocs.conversion.contracts.documentinfo.ZipDocumentInfo");
exports.ConversionNotSupportedException = java.import("com.groupdocs.conversion.exceptions.ConversionNotSupportedException");
exports.CorruptOrDamagedFileException = java.import("com.groupdocs.conversion.exceptions.CorruptOrDamagedFileException");
exports.FileTypeNotSupportedException = java.import("com.groupdocs.conversion.exceptions.FileTypeNotSupportedException");
exports.FontSubstituteException = java.import("com.groupdocs.conversion.exceptions.FontSubstituteException");
exports.GroupDocsConversionException = java.import("com.groupdocs.conversion.exceptions.GroupDocsConversionException");
exports.IncorrectPasswordException = java.import("com.groupdocs.conversion.exceptions.IncorrectPasswordException");
exports.InvalidConverterSettingsException = java.import("com.groupdocs.conversion.exceptions.InvalidConverterSettingsException");
exports.InvalidConvertOptionsException = java.import("com.groupdocs.conversion.exceptions.InvalidConvertOptionsException");
exports.PasswordRequiredException = java.import("com.groupdocs.conversion.exceptions.PasswordRequiredException");
exports.SourceDocumentFactoryNotProvidedException = java.import("com.groupdocs.conversion.exceptions.SourceDocumentFactoryNotProvidedException");
exports.AudioFileType = java.import("com.groupdocs.conversion.filetypes.AudioFileType");
exports.CadFileType = java.import("com.groupdocs.conversion.filetypes.CadFileType");
exports.DataFileType = java.import("com.groupdocs.conversion.filetypes.DataFileType");
exports.DiagramFileType = java.import("com.groupdocs.conversion.filetypes.DiagramFileType");
exports.EmailFileType = java.import("com.groupdocs.conversion.filetypes.EmailFileType");
exports.FileType = java.import("com.groupdocs.conversion.filetypes.FileType");
exports.ImageFileType = java.import("com.groupdocs.conversion.filetypes.ImageFileType");
exports.MarkupFileType = java.import("com.groupdocs.conversion.filetypes.MarkupFileType");
exports.NoteFileType = java.import("com.groupdocs.conversion.filetypes.NoteFileType");
exports.PdfFileType = java.import("com.groupdocs.conversion.filetypes.PdfFileType");
exports.PersonalStorageFileType = java.import("com.groupdocs.conversion.filetypes.PersonalStorageFileType");
exports.PresentationFileType = java.import("com.groupdocs.conversion.filetypes.PresentationFileType");
exports.ProjectManagementFileType = java.import("com.groupdocs.conversion.filetypes.ProjectManagementFileType");
exports.SpreadsheetFileType = java.import("com.groupdocs.conversion.filetypes.SpreadsheetFileType");
exports.ThreeDFileType = java.import("com.groupdocs.conversion.filetypes.ThreeDFileType");
exports.VideoFileType = java.import("com.groupdocs.conversion.filetypes.VideoFileType");
exports.WordProcessingFileType = java.import("com.groupdocs.conversion.filetypes.WordProcessingFileType");
exports.License = java.import("com.groupdocs.conversion.licensing.License");
exports.Metered = java.import("com.groupdocs.conversion.licensing.Metered");
exports.ConsoleLogger = java.import("com.groupdocs.conversion.logging.ConsoleLogger");
exports.AudioConvertOptions = java.import("com.groupdocs.conversion.options.convert.AudioConvertOptions");
exports.CadConvertOptions = java.import("com.groupdocs.conversion.options.convert.CadConvertOptions");
exports.ConvertOptionsHelpers = java.import("com.groupdocs.conversion.options.convert.ConvertOptionsHelpers");
exports.DataConvertOptions = java.import("com.groupdocs.conversion.options.convert.DataConvertOptions");
exports.DiagramConvertOptions = java.import("com.groupdocs.conversion.options.convert.DiagramConvertOptions");
exports.EmailConvertOptions = java.import("com.groupdocs.conversion.options.convert.EmailConvertOptions");
exports.Font = java.import("com.groupdocs.conversion.options.convert.Font");
exports.ImageConvertOptions = java.import("com.groupdocs.conversion.options.convert.ImageConvertOptions");
exports.ImageFlipModes = java.import("com.groupdocs.conversion.options.convert.ImageFlipModes");
exports.JpegOptions = java.import("com.groupdocs.conversion.options.convert.JpegOptions");
exports.JpgColorModes = java.import("com.groupdocs.conversion.options.convert.JpgColorModes");
exports.JpgCompressionMethods = java.import("com.groupdocs.conversion.options.convert.JpgCompressionMethods");
exports.MarkupConvertOptions = java.import("com.groupdocs.conversion.options.convert.MarkupConvertOptions");
exports.NoConvertOptions = java.import("com.groupdocs.conversion.options.convert.NoConvertOptions");
exports.PdfConvertOptions = java.import("com.groupdocs.conversion.options.convert.PdfConvertOptions");
exports.PdfDirection = java.import("com.groupdocs.conversion.options.convert.PdfDirection");
exports.PdfFormats = java.import("com.groupdocs.conversion.options.convert.PdfFormats");
exports.PdfFormattingOptions = java.import("com.groupdocs.conversion.options.convert.PdfFormattingOptions");
exports.PdfOptimizationOptions = java.import("com.groupdocs.conversion.options.convert.PdfOptimizationOptions");
exports.PdfOptions = java.import("com.groupdocs.conversion.options.convert.PdfOptions");
exports.PdfPageLayout = java.import("com.groupdocs.conversion.options.convert.PdfPageLayout");
exports.PdfPageMode = java.import("com.groupdocs.conversion.options.convert.PdfPageMode");
exports.PresentationConvertOptions = java.import("com.groupdocs.conversion.options.convert.PresentationConvertOptions");
exports.ProjectManagementConvertOptions = java.import("com.groupdocs.conversion.options.convert.ProjectManagementConvertOptions");
exports.PsdColorModes = java.import("com.groupdocs.conversion.options.convert.PsdColorModes");
exports.PsdCompressionMethods = java.import("com.groupdocs.conversion.options.convert.PsdCompressionMethods");
exports.PsdOptions = java.import("com.groupdocs.conversion.options.convert.PsdOptions");
exports.Rotation = java.import("com.groupdocs.conversion.options.convert.Rotation");
exports.RtfOptions = java.import("com.groupdocs.conversion.options.convert.RtfOptions");
exports.SpreadsheetConvertOptions = java.import("com.groupdocs.conversion.options.convert.SpreadsheetConvertOptions");
exports.ThreeDConvertOptions = java.import("com.groupdocs.conversion.options.convert.ThreeDConvertOptions");
exports.TiffCompressionMethods = java.import("com.groupdocs.conversion.options.convert.TiffCompressionMethods");
exports.TiffOptions = java.import("com.groupdocs.conversion.options.convert.TiffOptions");
exports.VideoConvertOptions = java.import("com.groupdocs.conversion.options.convert.VideoConvertOptions");
exports.WatermarkImageOptions = java.import("com.groupdocs.conversion.options.convert.WatermarkImageOptions");
exports.WatermarkTextOptions = java.import("com.groupdocs.conversion.options.convert.WatermarkTextOptions");
exports.WebpOptions = java.import("com.groupdocs.conversion.options.convert.WebpOptions");
exports.WordProcessingConvertOptions = java.import("com.groupdocs.conversion.options.convert.WordProcessingConvertOptions");
exports.AudioLoadOptions = java.import("com.groupdocs.conversion.options.load.AudioLoadOptions");
exports.CadDrawTypeMode = java.import("com.groupdocs.conversion.options.load.CadDrawTypeMode");
exports.CadLoadOptions = java.import("com.groupdocs.conversion.options.load.CadLoadOptions");
exports.CsvLoadOptions = java.import("com.groupdocs.conversion.options.load.CsvLoadOptions");
exports.DataLoadOptions = java.import("com.groupdocs.conversion.options.load.DataLoadOptions");
exports.DiagramLoadOptions = java.import("com.groupdocs.conversion.options.load.DiagramLoadOptions");
exports.EmailField = java.import("com.groupdocs.conversion.options.load.EmailField");
exports.EmailLoadOptions = java.import("com.groupdocs.conversion.options.load.EmailLoadOptions");
exports.EmptyLoadOptions = java.import("com.groupdocs.conversion.options.load.EmptyLoadOptions");
exports.EpubLoadOptions = java.import("com.groupdocs.conversion.options.load.EpubLoadOptions");
exports.ImageLoadOptions = java.import("com.groupdocs.conversion.options.load.ImageLoadOptions");
exports.ImageRecognitionLanguage = java.import("com.groupdocs.conversion.options.load.ImageRecognitionLanguage");
exports.MarkupLoadOptions = java.import("com.groupdocs.conversion.options.load.MarkupLoadOptions");
exports.MboxLoadOptions = java.import("com.groupdocs.conversion.options.load.MboxLoadOptions");
exports.NoteLoadOptions = java.import("com.groupdocs.conversion.options.load.NoteLoadOptions");
exports.NsfLoadOptions = java.import("com.groupdocs.conversion.options.load.NsfLoadOptions");
exports.PdfLoadOptions = java.import("com.groupdocs.conversion.options.load.PdfLoadOptions");
exports.PersonalStorageLoadOptions = java.import("com.groupdocs.conversion.options.load.PersonalStorageLoadOptions");
exports.PresentationLoadOptions = java.import("com.groupdocs.conversion.options.load.PresentationLoadOptions");
exports.SpreadsheetLoadOptions = java.import("com.groupdocs.conversion.options.load.SpreadsheetLoadOptions");
exports.ThreeDLoadOptions = java.import("com.groupdocs.conversion.options.load.ThreeDLoadOptions");
exports.TsvLoadOptions = java.import("com.groupdocs.conversion.options.load.TsvLoadOptions");
exports.TxtLeadingSpacesOptions = java.import("com.groupdocs.conversion.options.load.TxtLeadingSpacesOptions");
exports.TxtLoadOptions = java.import("com.groupdocs.conversion.options.load.TxtLoadOptions");
exports.TxtTrailingSpacesOptions = java.import("com.groupdocs.conversion.options.load.TxtTrailingSpacesOptions");
exports.VcfLoadOptions = java.import("com.groupdocs.conversion.options.load.VcfLoadOptions");
exports.VideoLoadOptions = java.import("com.groupdocs.conversion.options.load.VideoLoadOptions");
exports.WordProcessingBookmarksOptions = java.import("com.groupdocs.conversion.options.load.WordProcessingBookmarksOptions");
exports.WordProcessingLoadOptions = java.import("com.groupdocs.conversion.options.load.WordProcessingLoadOptions");
exports.XmlLoadOptions = java.import("com.groupdocs.conversion.options.load.XmlLoadOptions");

exports.ConversionPair = java.import("com.groupdocs.conversion.contracts.ConversionPair");
exports.Enumeration = java.import("com.groupdocs.conversion.contracts.Enumeration");
exports.FontSubstitute = java.import("com.groupdocs.conversion.contracts.FontSubstitute");
exports.PageOrientation = java.import("com.groupdocs.conversion.options.convert.PageOrientation");
exports.PageSize = java.import("com.groupdocs.conversion.options.convert.PageSize");
exports.PdfRecognitionMode = java.import("com.groupdocs.conversion.options.convert.PdfRecognitionMode");


/** STREAM METHODS * */
exports.License.setLicenseFromStream = function (license, licenseStream, callback) {
  const inputStreamBuffer = new exports.StreamBuffer()
  licenseStream.on('data', chunk => {
    inputStreamBuffer.write(chunk)
  })
  licenseStream.on('end', () => {
    let error
    try {
      license.setLicense(inputStreamBuffer.toInputStream())
    } catch (err) {
      error = err
    }
    callback(error)
  })
}
