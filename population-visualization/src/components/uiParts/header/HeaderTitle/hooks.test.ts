import { renderHook, act } from '@testing-library/react-hooks';
import { useTitle } from './hooks';

describe('useTitle', () => {
  it('should return the initial title', () => {
    const mockGetTitle = jest.fn().mockResolvedValue('人口データの可視化');
    const { result } = renderHook(() => useTitle(mockGetTitle));
    expect(result.current).toBe('初期タイトル');
  });

  it('should update the title after fetching', async () => {
    const mockGetTitle = jest.fn().mockResolvedValue('人口データの可視化');
    const { result, waitForNextUpdate } = renderHook(() =>
      useTitle(mockGetTitle),
    );

    // useEffectの完了を待つ
    await waitForNextUpdate();

    expect(result.current).toBe('人口データの可視化');
    expect(mockGetTitle).toHaveBeenCalled();
  });
});
