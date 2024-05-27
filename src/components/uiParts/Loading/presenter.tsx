import React from 'react';
import './presenter.css';

const Loading: React.FC = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <span>Loading...</span>
    </div>
  );
};

export default Loading;
