import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../reducks/store';
import { SelectedPrefecture } from '../../../../reducks/selectedPrefecture';
import { selectPrefecture } from '../../../../reducks/selectedPrefecture/slices';

/**
 * 都道府県の選択状態を管理するカスタムフック
 * @returns 選択された都道府県と選択変更関数を含むオブジェクト
 */
export function useSelectedPrefecture() {
  const dispatch = useDispatch();

  // 選択された都道府県を取得
  const selectedPrefecture = useSelector(
    (state: RootState) => state.selectedPrefecture.selected,
  );

  // 都道府県を選択する関数
  const selectPrefectureHandler = (prefecture: SelectedPrefecture) => {
    dispatch(selectPrefecture(prefecture));
  };

  // チェックボックスの状態が変更された時の処理
  const handleCheckBoxChange = (
    prefecture: SelectedPrefecture,
    checked: boolean,
  ) => {
    if (checked) {
      selectPrefectureHandler(prefecture);
    }
  };

  // 選択された都道府県かどうかを判定する関数
  const isSelected = (prefecture: SelectedPrefecture) => {
    return (
      selectedPrefecture?.prefCode === prefecture.prefCode &&
      selectedPrefecture?.prefName === prefecture.prefName
    );
  };

  return {
    selectedPrefecture,
    handleCheckBoxChange,
    isSelected,
  };
}
