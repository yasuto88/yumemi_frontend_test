import { renderHook, act } from '@testing-library/react';
import useModal from './hooks';

describe('useModal', () => {
  test('should initialize with isOpen as false', () => {
    const { result } = renderHook(() => useModal());
    expect(result.current.isOpen).toBe(false);
  });

  test('should set isOpen to true when openModal is called', () => {
    const { result } = renderHook(() => useModal());
    act(() => {
      result.current.openModal();
    });
    expect(result.current.isOpen).toBe(true);
  });

  test('should set isOpen to false when closeModal is called', () => {
    const { result } = renderHook(() => useModal());

    act(() => {
      result.current.openModal();
    });

    act(() => {
      result.current.closeModal();
    });

    expect(result.current.isOpen).toBe(false);
  });
});
