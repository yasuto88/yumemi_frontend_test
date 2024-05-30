import React from 'react';
import { render } from '@testing-library/react';
import HeaderPresentational from './presenter';

// モックの設定
jest.mock('./HeaderTitle/index', () => ({
  HeaderTitle: () => <div data-testid="header-title">HeaderTitle</div>,
}));

describe('HeaderPresentational', () => {
  test('renders HeaderTitle component', () => {
    const { getByTestId } = render(<HeaderPresentational id="test-id" />);

    const headerTitle = getByTestId('header-title');
    expect(headerTitle).toBeInTheDocument();
  });

  test('applies the default id', () => {
    const { container } = render(<HeaderPresentational />);
    const header = container.querySelector('#header');

    expect(header).toBeInTheDocument();
  });
});
