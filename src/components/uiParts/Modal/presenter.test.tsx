import { render, fireEvent } from '@testing-library/react';
import ModalPresentational, { ContainerProps } from './presenter';

describe('ModalPresentational component', () => {
  const mockProps: ContainerProps = {
    children: <div>Modal Content</div>,
    buttonText: 'Open Modal',
  };

  const renderComponent = (
    isOpen: boolean,
    openModal: jest.Mock,
    closeModal: jest.Mock,
  ) => {
    return render(
      <ModalPresentational
        {...mockProps}
        isOpen={isOpen}
        openModal={openModal}
        closeModal={closeModal}
      />,
    );
  };

  test('should render button with given text', () => {
    const { getByText } = renderComponent(false, jest.fn(), jest.fn());
    expect(getByText('Open Modal')).toBeInTheDocument();
  });

  test('should open modal on button click', () => {
    const openModalMock = jest.fn();
    const { getByText } = renderComponent(false, openModalMock, jest.fn());

    fireEvent.click(getByText('Open Modal'));
    expect(openModalMock).toHaveBeenCalledTimes(1);
  });

  test('should render modal with children when isOpen is true', () => {
    const { getByText } = renderComponent(true, jest.fn(), jest.fn());
    expect(getByText('Modal Content')).toBeInTheDocument();
  });

  test('should close modal on close button click', () => {
    const closeModalMock = jest.fn();
    const { getByText } = renderComponent(true, jest.fn(), closeModalMock);

    fireEvent.click(getByText('x'));
    expect(closeModalMock).toHaveBeenCalledTimes(1);
  });

  test('should close modal on background click', () => {
    const closeModalMock = jest.fn();
    const { container } = renderComponent(true, jest.fn(), closeModalMock);

    // closeというidを持つ要素をクリック
    // const closeButton = container.querySelector('.close');
    const closeButton = container.querySelector('#close');
    expect(closeButton).not.toBeNull();

    if (closeButton) {
      fireEvent.click(closeButton);
    }

    expect(closeModalMock).toHaveBeenCalledTimes(1);
  });
});
