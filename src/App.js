import React, { useState, useEffect, useRef } from 'react';
import PdfViewer from './components/PdfViewer';
import './App.css';
import documentPdf from './assets/document.pdf'; // Import the PDF file

const App = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState(null);
  const pdfContainerRef = useRef(null);

  useEffect(() => {
    const container = pdfContainerRef.current;
    const handleScroll = () => {
      const totalPages = numPages || 1;
      const maxScrollTop = container.scrollHeight - container.clientHeight;
      const pageHeight = maxScrollTop / totalPages;
      const currentPage = Math.ceil(container.scrollTop / pageHeight) + 1;
      if (currentPage !== pageNumber) {
        setPageNumber(currentPage);
      }
    };

    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [pageNumber, numPages]);

  const handlePdfLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const handlePreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const handleNextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <button className="app-button" onClick={handlePreviousPage}>
          Go Back
        </button>
        <button className="app-button" onClick={handleNextPage}>
          Export
        </button>
      </header>
      <main className="app-main" ref={pdfContainerRef}>
        <PdfViewer file={documentPdf} pageNumber={pageNumber} onPdfLoadSuccess={handlePdfLoadSuccess} />
      </main>
      <footer className="app-footer">
        <div className="page-status">
          Page {pageNumber} of {numPages || 'Loading...'}
        </div>
      </footer>
    </div>
  );
};

export default App;
