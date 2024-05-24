import { renderHook, act } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import { useSelectedPrefecture } from './hooks';
import { selectPrefecture } from '../../../reducks/selectedPrefecture/slices';
import { SelectedPrefecture } from '../../../reducks/selectedPrefecture/types';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('useSelectedPrefecture', () => {
  const dispatch = jest.fn();
  const mockUseSelector = useSelector as jest.MockedFunction<
    typeof useSelector
  >;
  const mockUseDispatch = useDispatch as jest.MockedFunction<
    typeof useDispatch
  >;

  beforeEach(() => {
    mockUseDispatch.mockReturnValue(dispatch);
    jest.clearAllMocks();
  });

  test('should return initial selected prefecture', () => {
    const initialState: SelectedPrefecture = { prefCode: 1, prefName: 'Tokyo' };
    mockUseSelector.mockImplementation((selectorFn) =>
      selectorFn({ selectedPrefecture: { selected: initialState } }),
    );

    const { result } = renderHook(() => useSelectedPrefecture());
    expect(result.current.selectedPrefecture).toEqual(initialState);
  });

  test('should handle checkbox change', () => {
    const initialState: SelectedPrefecture = { prefCode: 1, prefName: 'Tokyo' };
    mockUseSelector.mockImplementation((selectorFn) =>
      selectorFn({ selectedPrefecture: { selected: initialState } }),
    );

    const { result } = renderHook(() => useSelectedPrefecture());
    const newPrefecture: SelectedPrefecture = {
      prefCode: 2,
      prefName: 'Osaka',
    };

    act(() => {
      result.current.handleCheckBoxChange(newPrefecture, true);
    });

    expect(dispatch).toHaveBeenCalledWith(selectPrefecture(newPrefecture));
  });

  test('should not handle checkbox change when unchecked', () => {
    const initialState: SelectedPrefecture = { prefCode: 1, prefName: 'Tokyo' };
    mockUseSelector.mockImplementation((selectorFn) =>
      selectorFn({ selectedPrefecture: { selected: initialState } }),
    );

    const { result } = renderHook(() => useSelectedPrefecture());
    const newPrefecture: SelectedPrefecture = {
      prefCode: 2,
      prefName: 'Osaka',
    };

    act(() => {
      result.current.handleCheckBoxChange(newPrefecture, false);
    });

    expect(dispatch).not.toHaveBeenCalled();
  });

  test('should check if prefecture is selected', () => {
    const initialState: SelectedPrefecture = { prefCode: 1, prefName: 'Tokyo' };
    mockUseSelector.mockImplementation((selectorFn) =>
      selectorFn({ selectedPrefecture: { selected: initialState } }),
    );

    const { result } = renderHook(() => useSelectedPrefecture());
    const newPrefecture: SelectedPrefecture = {
      prefCode: 1,
      prefName: 'Tokyo',
    };

    expect(result.current.isSelected(newPrefecture)).toBe(true);
  });

  test('should check if prefecture is not selected', () => {
    const initialState: SelectedPrefecture = { prefCode: 1, prefName: 'Tokyo' };
    mockUseSelector.mockImplementation((selectorFn) =>
      selectorFn({ selectedPrefecture: { selected: initialState } }),
    );

    const { result } = renderHook(() => useSelectedPrefecture());
    const newPrefecture: SelectedPrefecture = {
      prefCode: 2,
      prefName: 'Osaka',
    };

    expect(result.current.isSelected(newPrefecture)).toBe(false);
  });
});
