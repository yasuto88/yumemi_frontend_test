import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../reducks/store';
import {
  PopulationType,
  selectPopulationType,
} from '../../../../reducks/populationType';
import { togglePopulationType } from '../../../../reducks/populationType/slices';

export const usePopulationType = () => {
  const dispatch: AppDispatch = useDispatch();
  const selectedTypes = useSelector(selectPopulationType);

  const handleToggleType = (type: PopulationType) => {
    dispatch(togglePopulationType(type));
  };

  const isChecked = (type: PopulationType) => {
    return selectedTypes.includes(type);
  };

  return {
    selectedTypes,
    handleToggleType,
    isChecked,
  };
};
