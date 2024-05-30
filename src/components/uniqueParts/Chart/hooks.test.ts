import { renderHook } from '@testing-library/react';
import { useSelector } from 'react-redux';
import { usePopulationComposition } from './hooks';
import {
  PopulationCompositionResponse,
  TransformedData,
} from '../../../reducks/populationComposition/types';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('usePopulationComposition', () => {
  const mockUseSelector = useSelector as jest.MockedFunction<
    typeof useSelector
  >;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should return loading state when loading is true', () => {
    mockUseSelector
      .mockReturnValueOnce(['総人口', '年少人口', '生産年齢人口', '老年人口']) // selectedTypes
      .mockReturnValueOnce(null) // selectedPrefecture
      .mockReturnValueOnce(null) // response
      .mockReturnValueOnce(true) // loading
      .mockReturnValueOnce(null); // error

    const { result } = renderHook(() => usePopulationComposition());

    expect(result.current.data).toBeNull();
    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBeNull();
  });

  test('should return error state when an error occurs', () => {
    mockUseSelector
      .mockReturnValueOnce(['総人口', '年少人口', '生産年齢人口', '老年人口']) // selectedTypes
      .mockReturnValueOnce(null) // selectedPrefecture
      .mockReturnValueOnce(null) // response
      .mockReturnValueOnce(false) // loading
      .mockReturnValueOnce('Error occurred'); // error

    const { result } = renderHook(() => usePopulationComposition());

    expect(result.current.data).toBeNull();
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe('Error occurred');
  });

  test('should return population composition data when data is available', () => {
    const mockResponse: PopulationCompositionResponse = {
      message: 'success',
      result: {
        data: [
          {
            name: '1960',
            総人口: 5000,
            年少人口: 1000,
            生産年齢人口: 3000,
            老年人口: 1000,
          },
          {
            name: '1965',
            総人口: 6000,
            年少人口: 1200,
            生産年齢人口: 3600,
            老年人口: 1200,
          },
        ],
        boundaryYear: 2020,
      },
    };

    const expectedData: TransformedData[] = [
      {
        name: '1960',
        総人口: 5000,
        年少人口: 1000,
        生産年齢人口: 3000,
        老年人口: 1000,
      },
      {
        name: '1965',
        総人口: 6000,
        年少人口: 1200,
        生産年齢人口: 3600,
        老年人口: 1200,
      },
    ];

    mockUseSelector
      .mockReturnValueOnce(['総人口', '年少人口', '生産年齢人口', '老年人口']) // selectedTypes
      .mockReturnValueOnce(null) // selectedPrefecture
      .mockReturnValueOnce(mockResponse) // response
      .mockReturnValueOnce(false) // loading
      .mockReturnValueOnce(null); // error

    const { result } = renderHook(() => usePopulationComposition());

    expect(result.current.data).toEqual(expectedData);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
  });
});
