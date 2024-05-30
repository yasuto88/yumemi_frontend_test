import React from 'react';
import './presenter.css';

export type ContainerProps = {
  children: React.ReactNode; // モーダル内に表示するコンテンツ
  buttonText: string; // モーダルを開くためのボタンのテキスト
};

type Props = {
  isOpen: boolean; // モーダルが開いているかどうか
  openModal: () => void; // モーダルを開く関数
  closeModal: () => void; // モーダルを閉じる関数
} & ContainerProps;

const ModalPresentational: React.FC<Props> = ({
  buttonText,
  children,
  isOpen,
  openModal,
  closeModal,
}) => {
  return (
    <div data-testid="modal-presentational">
      <button id="open-modal-button" onClick={openModal}>
        {buttonText}
      </button>
      {isOpen && (
        <div id="modal">
          <div id="message-wrapper">
            <a href="#" id="close" onClick={closeModal}></a>
            <div id="message-box">
              <div id="close-button" onClick={closeModal}>
                x
              </div>
              {children}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(ModalPresentational);
