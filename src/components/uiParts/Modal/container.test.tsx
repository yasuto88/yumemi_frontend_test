import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ModalContainer from './container';
import ModalPresentational from './presenter';
import useModal from './hooks';

// useModalをモック
jest.mock('./hooks', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('ModalContainer', () => {
  beforeEach(() => {
    // モックをリセット
    (useModal as jest.Mock).mockClear();
  });

  it('should render ModalPresentational component', () => {
    (useModal as jest.Mock).mockReturnValue({ isOpen: false });

    const { getByTestId } = render(
      <ModalContainer buttonText="Open Modal">Modal Content</ModalContainer>,
    );
    const presentationalComponent = getByTestId('modal-presentational');

    expect(presentationalComponent).toBeInTheDocument();
  });

  it('should call openModal when button is clicked', () => {
    const openModal = jest.fn();
    (useModal as jest.Mock).mockReturnValue({
      isOpen: false,
      openModal,
      closeModal: jest.fn(),
    });

    const { getByText } = render(
      <ModalContainer buttonText="Open Modal">Modal Content</ModalContainer>,
    );
    const button = getByText('Open Modal');

    fireEvent.click(button);
    expect(openModal).toHaveBeenCalled();
  });

  it('should call closeModal when close button is clicked', () => {
    const closeModal = jest.fn();
    (useModal as jest.Mock).mockReturnValue({
      isOpen: true,
      openModal: jest.fn(),
      closeModal,
    });

    const { getByText } = render(
      <ModalContainer buttonText="Open Modal">Modal Content</ModalContainer>,
    );
    const closeButton = getByText('x');

    fireEvent.click(closeButton);
    expect(closeModal).toHaveBeenCalled();
  });
});
