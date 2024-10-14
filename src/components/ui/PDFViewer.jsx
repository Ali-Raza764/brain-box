// "use client";

// import React, { useState } from "react";
// import { Document, Page, pdfjs } from "react-pdf";

// // Set the worker source for react-pdf
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// const PDFViewer = ({ url }) => {
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//   }

//   return (
//     <div className="pdf-viewer">
//       <Document
//         file={url}
//         onLoadSuccess={onDocumentLoadSuccess}
//         className="pdf-document"
//       >
//         <Page pageNumber={pageNumber} className="pdf-page" />
//       </Document>
//       <div className="pdf-controls">
//         <p>
//           Page {pageNumber} of {numPages}
//         </p>
//         <button
//           onClick={() => setPageNumber(pageNumber - 1)}
//           disabled={pageNumber <= 1}
//         >
//           Previous
//         </button>
//         <button
//           onClick={() => setPageNumber(pageNumber + 1)}
//           disabled={pageNumber >= numPages}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PDFViewer;
