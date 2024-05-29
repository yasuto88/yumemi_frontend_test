import React from 'react';
import { render, screen } from '@testing-library/react';
import Loading from './presenter';

describe('Loading component', () => {
  test('should render loading spinner and text', () => {
    render(<Loading />);

    // Loading...というテキストが正しくレンダリングされているか確認
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('should have correct class names', () => {
    const { container } = render(<Loading />);

    // コンテナが正しいクラス名を持っているか確認
    expect(container.firstChild).toHaveClass('loading-container');
  });
});
