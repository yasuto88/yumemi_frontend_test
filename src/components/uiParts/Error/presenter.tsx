import React from 'react';
import './presenter.css';

interface ErrorProps {
  message: string; // エラーメッセージ
}

// エラーメッセージを表示するコンポーネント
const Error: React.FC<ErrorProps> = ({ message }) => {
  return (
    <div id="error-container">
      <span>{message}</span>
    </div>
  );
};

export default Error;
