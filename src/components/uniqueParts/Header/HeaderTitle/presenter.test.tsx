import { render, screen } from '@testing-library/react';
import HeaderTitle from './presenter';

describe('HeaderTitle', () => {
  it('renders the title text correctly', () => {
    const title = 'Test Title';
    render(<HeaderTitle title={title} />);
    const headerElement = screen.getByText(title);
    expect(headerElement).toBeInTheDocument();
  });

  it('applies the passed id', () => {
    const title = 'Test Title';
    const id = 'custom-id';
    render(<HeaderTitle title={title} id={id} />);
    const headerElement = screen.getByRole('heading', { name: title });
    expect(headerElement).toHaveAttribute('id', 'header-title custom-id');
  });
});
