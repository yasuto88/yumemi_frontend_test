import { useSelector } from 'react-redux';
import { RootState } from '../../../../reducks/store';
import {
  selectPrefectures,
  selectPrefecturesError,
  selectPrefecturesLoading,
} from '../../../../reducks/prefectureList/selectors';

/**
 * 都道府県リストの状態を監視するカスタムフック
 * @returns 都道府県リスト、ロード状態、エラーメッセージを含むオブジェクト
 */
export function usePrefectures() {
  const prefectures = useSelector((state: RootState) =>
    selectPrefectures(state),
  );
  const loading = useSelector((state: RootState) =>
    selectPrefecturesLoading(state),
  );
  const error = useSelector((state: RootState) =>
    selectPrefecturesError(state),
  );

  return {
    prefectures,
    loading,
    error,
  };
}
