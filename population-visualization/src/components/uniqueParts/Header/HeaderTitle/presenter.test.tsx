import React from 'react';
import { render } from '@testing-library/react';
import HeaderTitle, { ContainerProps } from './presenter';

describe('HeaderTitle', () => {
  it('renders the title text correctly', () => {
    const title = 'Test Title';
    const { getByText } = render(<HeaderTitle title={title} />);
    const headerElement = getByText(title);
    expect(headerElement).toBeInTheDocument();
  });

  it('applies the passed className', () => {
    const title = 'Test Title';
    const className = 'custom-class';
    const { container } = render(
      <HeaderTitle title={title} className={className} />,
    );
    const headerElement = container.querySelector('h1');
    expect(headerElement).toHaveClass('header-title');
    expect(headerElement).toHaveClass(className);
  });
});
