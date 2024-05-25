import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../reducks/store';
import { PopulationType } from '../../../../reducks/populationType';
import { togglePopulationType } from '../../../../reducks/populationType/slices';

export const selectPopulationType = (state: RootState) =>
  state.populationType.selectedType;

export const usePopulationType = () => {
  const dispatch = useDispatch();
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
