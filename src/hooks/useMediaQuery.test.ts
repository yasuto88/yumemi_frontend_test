import { renderHook, act } from '@testing-library/react';
import { useMediaQuery, mediaQuery } from './useMediaQuery';

describe('useMediaQuery', () => {
  let matchMediaMock: jest.Mock;

  beforeAll(() => {
    matchMediaMock = jest.fn().mockImplementation((query) => {
      return {
        matches: false,
        media: query,
        onchange: null,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        addListener: jest.fn(),
        removeListener: jest.fn(),
        dispatchEvent: jest.fn(),
      };
    });
    global.matchMedia = matchMediaMock;
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  test('should update match state on change', () => {
    const addEventListenerMock = jest.fn();
    matchMediaMock.mockImplementation((query) => {
      return {
        matches: false,
        media: query,
        onchange: null,
        addEventListener: addEventListenerMock,
        removeEventListener: jest.fn(),
        addListener: addEventListenerMock, // addListenerは古いAPIのサポート用
        removeListener: jest.fn(),
        dispatchEvent: jest.fn(),
      };
    });

    const { result } = renderHook(() => useMediaQuery(mediaQuery.sp));

    act(() => {
      // メディアクエリリストイベントのモック
      const event = {
        matches: true,
        media: mediaQuery.sp,
      };

      // イベントリスナーを呼び出す
      const handler = addEventListenerMock.mock.calls[0][1];
      handler(event as MediaQueryListEvent);
    });

    expect(result.current).toBe(true); // メディアクエリの変更後の状態を確認
  });

  test('should clean up event listeners on unmount', () => {
    const addEventListenerMock = jest.fn();
    const removeEventListenerMock = jest.fn();

    matchMediaMock.mockImplementation((query) => {
      return {
        matches: false,
        media: query,
        onchange: null,
        addEventListener: addEventListenerMock,
        removeEventListener: removeEventListenerMock,
        addListener: addEventListenerMock, // addListenerは古いAPIのサポート用
        removeListener: removeEventListenerMock,
        dispatchEvent: jest.fn(),
      };
    });

    const { unmount } = renderHook(() => useMediaQuery(mediaQuery.sp));

    expect(addEventListenerMock).toHaveBeenCalledTimes(1);

    unmount();

    expect(removeEventListenerMock).toHaveBeenCalledTimes(1);
  });
});
