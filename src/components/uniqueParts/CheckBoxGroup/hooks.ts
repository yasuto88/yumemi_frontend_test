import { useSelector } from 'react-redux';
import { RootState } from '../../../reducks/store';
import {
  selectPrefectures,
  selectPrefecturesError,
  selectPrefecturesLoading,
} from '../../../reducks/prefectureList';

/**
 * 都道府県リストの状態を監視するカスタムフック
 * @returns 都道府県リスト、ロード状態、エラーメッセージを含むオブジェクト
 */
export function usePrefectures() {
  // 都道府県リスト、ロード状態、エラーメッセージを取得
  const prefectures = useSelector((state: RootState) => {
    return selectPrefectures(state);
  });

  // ロード状態を取得
  const loading = useSelector((state: RootState) =>
    selectPrefecturesLoading(state),
  );

  // エラーメッセージを取得
  const error = useSelector((state: RootState) =>
    selectPrefecturesError(state),
  );

  return {
    prefectures,
    loading,
    error,
  };
}
