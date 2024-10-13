import { FaFilePdf, FaEye, FaDownload } from 'react-icons/fa';

const PDFItem = ({ pdfName, pdfCategory, viewLink, downloadLink }) => {
  return (
    <div className="flex items-center bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300 w-full max-w-lg">
      {/* Red PDF Icon */}
      <div className="text-red-500 text-4xl">
        <FaFilePdf />
      </div>

      {/* PDF Info */}
      <div className="ml-4 flex-grow">
        {/* PDF Name */}
        <h2 className="text-lg font-bold text-gray-800">{pdfName}</h2>
        {/* PDF Category */}
        <p className="text-gray-500">{pdfCategory}</p>
      </div>

      {/* Action Buttons */}
      <div className="ml-4 flex space-x-2">
        {/* View Button with Icon */}
        <a
          href={viewLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center"
        >
          <FaEye className="text-white text-lg hover:scale-110 transition-transform duration-300" />
        </a>

        {/* Download Button with Icon */}
        <a
          href={downloadLink}
          download
          className="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition-colors duration-300 flex items-center justify-center"
        >
          <FaDownload className="text-white text-lg hover:scale-110 transition-transform duration-300" />
        </a>
      </div>
    </div>
  );
};

export default PDFItem;
