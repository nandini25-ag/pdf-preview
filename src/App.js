import React, { useState } from 'react';
import PdfViewer from './components/PdfViewer';
import './App.css';
import documentPdf from './assets/document.pdf'; // Import the PDF file

const App = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState(null);

  const handlePdfLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
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
    <div className="container">
      <div className="app">
        <div className="card">
          <header className="app-header">
            <button className="app-button" onClick={handlePreviousPage}>Previous</button>
            <button className="app-button" onClick={handleNextPage}>Next</button>
          </header>
          <main className="app-main">
            <PdfViewer file={documentPdf} pageNumber={pageNumber} onPdfLoadSuccess={handlePdfLoadSuccess} />
          </main>
          <footer className="app-footer">
            <div className="page-status">
              {numPages ? `Page ${pageNumber} of ${numPages}` : 'Loading...'}
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default App;
