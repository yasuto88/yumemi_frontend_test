import { renderHook, act } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import { useFetchPrefectures, useFetchPopulation } from './hooks';
import { fetchPrefectures } from '../../../reducks/prefectureList';
import { fetchPopulation } from '../../../reducks/populationComposition/operations';
import { selectSelectedPrefecture } from '../../../reducks/selectedPrefecture';
import {
  selectPopulation,
  selectPopulationError,
  selectPopulationLoading,
} from '../../../reducks/populationComposition';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock('../../../reducks/prefectureList', () => ({
  fetchPrefectures: jest.fn(),
}));

jest.mock('../../../reducks/populationComposition/operations', () => ({
  fetchPopulation: jest.fn(),
}));

describe('useFetchPrefectures', () => {
  const mockUseSelector = useSelector as jest.MockedFunction<
    typeof useSelector
  >;
  const mockDispatch = useDispatch as jest.MockedFunction<typeof useDispatch>;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should dispatch fetchPrefectures on mount', () => {
    const dispatch = jest.fn();
    mockDispatch.mockReturnValue(dispatch);
    mockUseSelector.mockReturnValue({ prefectures: [] });

    renderHook(() => useFetchPrefectures());

    expect(dispatch).toHaveBeenCalledWith(fetchPrefectures());
  });

  test('should return prefectures state', () => {
    const mockPrefecturesState = { prefectures: ['Tokyo', 'Osaka'] };
    mockDispatch.mockReturnValue(jest.fn());
    mockUseSelector.mockReturnValue(mockPrefecturesState);

    const { result } = renderHook(() => useFetchPrefectures());

    expect(result.current).toEqual(mockPrefecturesState);
  });
});

describe('useFetchPopulation', () => {
  const mockUseSelector = useSelector as jest.MockedFunction<
    typeof useSelector
  >;
  const mockDispatch = useDispatch as jest.MockedFunction<typeof useDispatch>;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should dispatch fetchPopulation when selectedPrefecture changes', () => {
    const selectedPrefecture = { prefCode: 1, prefName: 'Tokyo' };
    const dispatch = jest.fn();
    mockDispatch.mockReturnValue(dispatch);
    mockUseSelector.mockImplementation((selector) => {
      if (selector === selectSelectedPrefecture) return selectedPrefecture;
      if (selector === selectPopulation) return [];
      if (selector === selectPopulationLoading) return false;
      if (selector === selectPopulationError) return null;
      return null;
    });

    renderHook(() => useFetchPopulation());

    expect(dispatch).toHaveBeenCalledWith(
      fetchPopulation(selectedPrefecture.prefCode),
    );
  });

  test('should return population state', () => {
    const selectedPrefecture = { prefCode: 1, prefName: 'Tokyo' };
    const mockPopulationData = [{ year: 2020, value: 1000 }];
    const mockLoading = false;
    const mockError = null;

    mockDispatch.mockReturnValue(jest.fn());
    mockUseSelector.mockImplementation((selector) => {
      if (selector === selectSelectedPrefecture) return selectedPrefecture;
      if (selector === selectPopulation) return mockPopulationData;
      if (selector === selectPopulationLoading) return mockLoading;
      if (selector === selectPopulationError) return mockError;
      return null;
    });

    const { result } = renderHook(() => useFetchPopulation());

    expect(result.current.data).toEqual(mockPopulationData);
    expect(result.current.loading).toEqual(mockLoading);
    expect(result.current.error).toEqual(mockError);
    expect(result.current.selectedPrefecture).toEqual(selectedPrefecture);
  });
});
