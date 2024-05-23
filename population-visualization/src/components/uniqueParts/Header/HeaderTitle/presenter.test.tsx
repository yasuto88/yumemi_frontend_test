import { render, screen } from '@testing-library/react';
import HeaderTitle from './presenter';

describe('HeaderTitle', () => {
  it('renders the title text correctly', () => {
    const title = 'Test Title';
    render(<HeaderTitle title={title} />);
    const headerElement = screen.getByText(title);
    expect(headerElement).toBeInTheDocument();
  });

  it('applies the passed className', () => {
    const title = 'Test Title';
    const className = 'custom-class';
    render(<HeaderTitle title={title} className={className} />);
    const headerElement = screen.getByRole('heading', { name: title });
    expect(headerElement).toHaveClass('header-title');
    expect(headerElement).toHaveClass(className);
  });
});