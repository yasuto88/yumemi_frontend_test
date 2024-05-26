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
  const selectedPrefecture = useSelector(
    (state: RootState) => state.selectedPrefecture.selected,
  );

  const selectPrefectureHandler = (prefecture: SelectedPrefecture) => {
    dispatch(selectPrefecture(prefecture));
  };

  const handleCheckBoxChange = (
    prefecture: SelectedPrefecture,
    checked: boolean,
  ) => {
    if (checked) {
      selectPrefectureHandler(prefecture);
    }
  };

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
