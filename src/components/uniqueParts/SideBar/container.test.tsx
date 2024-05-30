import { render } from '@testing-library/react';
import SideBarContainer from './container';
import SideBarPresentational from './presenter';

jest.mock('./presenter', () => {
  const originalModule = jest.requireActual('./presenter');
  return {
    __esModule: true,
    ...originalModule,
    default: jest.fn((props) => (
      <div data-testid="side-bar-presentational" {...props} />
    )),
  };
});

describe('SideBarContainer', () => {
  test('should pass props to SideBarPresentational', () => {
    const mockProps = { id: 'test-id' };

    render(<SideBarContainer {...mockProps} />);

    expect(SideBarPresentational).toHaveBeenCalledWith(
      expect.objectContaining(mockProps),
      {},
    );
  });

  test('should render SideBarPresentational component', () => {
    render(<SideBarContainer />);
    expect(SideBarPresentational).toHaveBeenCalled();
  });
});
