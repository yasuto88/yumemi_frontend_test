import React from 'react';
import './presenter.css';

// ローディング中に表示するコンポーネント
const Loading: React.FC = () => {
  return (
    <div id="loading-container">
      {/* ローディングインジケーター */}
      <div id="spinner"></div>
      <span>Loading...</span>
    </div>
  );
};

export default Loading;
