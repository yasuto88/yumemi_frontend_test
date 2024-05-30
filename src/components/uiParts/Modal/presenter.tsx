import React from 'react';
import './presenter.css';

export type ContainerProps = {
  children: React.ReactNode;
  buttonText: string;
};

type Props = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
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
