import { renderHook, act } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import { usePrefectures } from './hooks';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('usePrefectures', () => {
  const mockUseSelector = useSelector as jest.MockedFunction<
    typeof useSelector
  >;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should return prefectures, loading, and error from selectors', () => {
    const prefectures = [
      { prefCode: 1, prefName: 'Tokyo' },
      { prefCode: 2, prefName: 'Osaka' },
    ];
    const loading = false;
    const error = null;

    mockUseSelector
      .mockReturnValueOnce(prefectures)
      .mockReturnValueOnce(loading)
      .mockReturnValueOnce(error);

    const { result } = renderHook(() => usePrefectures());

    expect(result.current.prefectures).toEqual(prefectures);
    expect(result.current.loading).toBe(loading);
    expect(result.current.error).toBe(error);
  });

  test('should return initial loading state as true', () => {
    mockUseSelector.mockImplementation(() => true);

    const { result } = renderHook(() => usePrefectures());

    expect(result.current.loading).toBe(true);
  });

  test('should return initial error state as null', () => {
    mockUseSelector.mockImplementation(() => null);

    const { result } = renderHook(() => usePrefectures());

    expect(result.current.error).toBe(null);
  });
});
