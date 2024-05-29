import React from 'react';
import useModal from './hooks';
import ModalPresentational, { ContainerProps } from './presenter';

const ModalContainer: React.FC<ContainerProps> = (props) => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <ModalPresentational
      buttonText={props.buttonText}
      isOpen={isOpen}
      openModal={openModal}
      closeModal={closeModal}
    >
      {props.children}
    </ModalPresentational>
  );
};

export default ModalContainer;
