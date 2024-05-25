import { renderHook, act } from '@testing-library/react';
import { useSelector } from 'react-redux';
import { usePopulationComposition } from './hooks';
import { PopulationCompositionResponse } from '../../../reducks/populationComposition/types';

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

  test('should return loading state', () => {
    mockUseSelector
      .mockReturnValueOnce(null)
      .mockReturnValueOnce(true)
      .mockReturnValueOnce(null);

    const { result } = renderHook(() => usePopulationComposition());

    expect(result.current.data).toBeNull();
    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBeNull();
  });

  test('should return error state', () => {
    mockUseSelector
      .mockReturnValueOnce(null)
      .mockReturnValueOnce(false)
      .mockReturnValueOnce('Error occurred');

    const { result } = renderHook(() => usePopulationComposition());

    expect(result.current.data).toBeNull();
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe('Error occurred');
  });

  test('should return population composition data', () => {
    const mockResponse: PopulationCompositionResponse = {
      message: 'success',
      result: {
        data: [
          { name: '1960', population: 5000 },
          { name: '1965', population: 6000 },
        ],
        boundaryYear: 2020,
      },
    };

    mockUseSelector
      .mockReturnValueOnce(mockResponse)
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(null);

    const { result } = renderHook(() => usePopulationComposition());

    expect(result.current.data).toEqual(mockResponse.result.data);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
  });
});
