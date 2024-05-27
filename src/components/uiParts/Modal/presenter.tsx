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
    <div>
      <button className="open-modal-button" onClick={openModal}>
        {buttonText}
      </button>
      {isOpen && (
        <div id="modal">
          <div className="message-wrapper">
            <a href="#" className="close" onClick={closeModal}></a>
            <div className="message-box">
              <div className="close-button" onClick={closeModal}>
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
