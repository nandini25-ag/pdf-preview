import React from 'react';
import { FaFileAlt } from 'react-icons/fa';

const StatusBar = ({ pageNumber, numPages }) => {
  return (
    <div className="status-bar">
      <div className="file-info">
        <FaFileAlt />
        <span>Document Name</span>
      </div>
      <div className="page-info">
        <div className="page-number">
          <span>{pageNumber}</span>
          <span>/</span>
          <span>{numPages}</span>
        </div>
        <div className="zoom-level">
          Zoom: <span>100%</span>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
