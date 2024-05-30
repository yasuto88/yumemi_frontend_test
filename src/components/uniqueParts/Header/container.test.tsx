import { render } from '@testing-library/react';
import HeaderContainer from './container';
import HeaderPresentational from './presenter';

jest.mock('./presenter', () => {
  const originalModule = jest.requireActual('./presenter');
  return {
    __esModule: true,
    ...originalModule,
    default: jest.fn((props) => (
      <div data-testid="header-presentational" {...props} />
    )),
  };
});

describe('HeaderContainer', () => {
  test('should pass props to HeaderPresentational', () => {
    const mockProps = { id: 'test-id' };

    render(<HeaderContainer {...mockProps} />);

    expect(HeaderPresentational).toHaveBeenCalledWith(
      expect.objectContaining(mockProps),
      {},
    );
  });

  test('should render HeaderPresentational component', () => {
    render(<HeaderContainer />);
    expect(HeaderPresentational).toHaveBeenCalled();
  });
});
