import React from 'react';
import { render, screen } from '@testing-library/react';
import Error from './presenter';

describe('Error component', () => {
  test('should render with given message', () => {
    const message = 'An error occurred';
    render(<Error message={message} />);

    // メッセージが正しくレンダリングされているか確認
    expect(screen.getByText(message)).toBeInTheDocument();
  });

  test('should have correct id name', () => {
    const message = 'An error occurred';
    const { container } = render(<Error message={message} />);

    // コンポーネントが正しいidを持っているか確認
    expect(container.firstChild).toHaveAttribute('id', 'error-container');
  });
});
