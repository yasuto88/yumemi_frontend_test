import { renderHook, act } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import { usePopulationType } from './hooks';
import { togglePopulationType } from '../../../../reducks/populationType/slices';
import { PopulationType } from '../../../../reducks/populationType';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock('../../../../reducks/populationType/slices', () => ({
  togglePopulationType: jest.fn(),
}));

describe('usePopulationType', () => {
  const mockUseDispatch = useDispatch as jest.MockedFunction<
    typeof useDispatch
  >;
  const mockUseSelector = useSelector as jest.MockedFunction<
    typeof useSelector
  >;
  const mockTogglePopulationType = togglePopulationType as jest.MockedFunction<
    typeof togglePopulationType
  >;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should return selectedTypes from selector', () => {
    const selectedTypes: PopulationType[] = ['総人口', '年少人口'];
    mockUseSelector.mockReturnValue(selectedTypes);

    const { result } = renderHook(() => usePopulationType());

    expect(result.current.selectedTypes).toEqual(selectedTypes);
  });

  test('should dispatch togglePopulationType on handleToggleType', () => {
    const dispatch = jest.fn();
    mockUseDispatch.mockReturnValue(dispatch);
    mockUseSelector.mockReturnValue([]);

    const { result } = renderHook(() => usePopulationType());
    const type: PopulationType = '総人口';

    act(() => {
      result.current.handleToggleType(type);
    });

    expect(dispatch).toHaveBeenCalledWith(togglePopulationType(type));
  });

  test('should return true if type is selected in isChecked', () => {
    const selectedTypes: PopulationType[] = ['総人口', '年少人口'];
    mockUseSelector.mockReturnValue(selectedTypes);

    const { result } = renderHook(() => usePopulationType());
    const type: PopulationType = '総人口';

    expect(result.current.isChecked(type)).toBe(true);
  });

  test('should return false if type is not selected in isChecked', () => {
    const selectedTypes: PopulationType[] = ['年少人口'];
    mockUseSelector.mockReturnValue(selectedTypes);

    const { result } = renderHook(() => usePopulationType());
    const type: PopulationType = '総人口';

    expect(result.current.isChecked(type)).toBe(false);
  });
});
