import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../reducks/store';
import {
  PopulationType,
  selectPopulationType,
} from '../../../../reducks/populationType';
import { togglePopulationType } from '../../../../reducks/populationType/slices';

// 人口タイプを選択するためのカスタムフック
export const usePopulationType = () => {
  const dispatch: AppDispatch = useDispatch();
  const selectedTypes = useSelector(selectPopulationType);

  // 人口タイプの選択状態を切り替える
  const handleToggleType = (type: PopulationType) => {
    dispatch(togglePopulationType(type));
  };

  // 人口タイプが選択されているかどうかを返す
  const isChecked = (type: PopulationType) => {
    return selectedTypes.includes(type);
  };

  return {
    selectedTypes,
    handleToggleType,
    isChecked,
  };
};
