import { render } from '@testing-library/react';
import HomeContainer from './container';
import { useFetchPrefectures, useFetchPopulation } from './hooks';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import HomePresentational from './presenter';

// モックの設定
jest.mock('./hooks', () => ({
  useFetchPrefectures: jest.fn(),
  useFetchPopulation: jest.fn(),
}));

jest.mock('../../../hooks/useMediaQuery', () => ({
  useMediaQuery: jest.fn(),
  mediaQuery: {
    sp: 'max-width: 751px',
    tablet: '(min-width: 752px) and (max-width: 1121px)',
    pc: 'min-width: 1122px',
  },
}));

jest.mock('./presenter', () => ({
  __esModule: true,
  default: jest.fn(() => null),
}));

describe('HomeContainer', () => {
  const mockUseFetchPrefectures = useFetchPrefectures as jest.Mock;
  const mockUseFetchPopulation = useFetchPopulation as jest.Mock;
  const mockUseMediaQuery = useMediaQuery as jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should call useFetchPrefectures and useFetchPopulation on mount', () => {
    render(<HomeContainer className="test-class" />);

    expect(mockUseFetchPrefectures).toHaveBeenCalled();
    expect(mockUseFetchPopulation).toHaveBeenCalled();
  });

  test('should pass isSp, isTablet, and isPc to HomePresentational based on media queries', () => {
    mockUseMediaQuery
      .mockReturnValueOnce(true)  // isSp
      .mockReturnValueOnce(false) // isTablet
      .mockReturnValueOnce(false); // isPc

    render(<HomeContainer className="test-class" />);

    expect(HomePresentational).toHaveBeenCalledWith(
      expect.objectContaining({
        isSp: true,
        isTablet: false,
        isPc: false,
        className: 'test-class',
      }),
      {}
    );

    mockUseMediaQuery
      .mockReturnValueOnce(false) // isSp
      .mockReturnValueOnce(true)  // isTablet
      .mockReturnValueOnce(false); // isPc

    render(<HomeContainer className="test-class" />);

    expect(HomePresentational).toHaveBeenCalledWith(
      expect.objectContaining({
        isSp: false,
        isTablet: true,
        isPc: false,
        className: 'test-class',
      }),
      {}
    );

    mockUseMediaQuery
      .mockReturnValueOnce(false) // isSp
      .mockReturnValueOnce(false) // isTablet
      .mockReturnValueOnce(true); // isPc

    render(<HomeContainer className="test-class" />);

    expect(HomePresentational).toHaveBeenCalledWith(
      expect.objectContaining({
        isSp: false,
        isTablet: false,
        isPc: true,
        className: 'test-class',
      }),
      {}
    );
  });
});
