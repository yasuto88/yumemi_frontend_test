import React from 'react';
import './presenter.css';

const Loading: React.FC = () => {
  return (
    <div id="loading-container">
      <div id="spinner"></div>
      <span>Loading...</span>
    </div>
  );
};

export default Loading;
