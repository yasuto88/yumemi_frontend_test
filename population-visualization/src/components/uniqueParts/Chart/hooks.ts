import { useSelector } from 'react-redux';
import {
  selectPopulation,
  selectPopulationError,
  selectPopulationLoading,
} from '../../../reducks/populationComposition';
import {
  PopulationCompositionResponse,
  TransformedData,
} from '../../../reducks/populationComposition/types';
import { selectPopulationType } from '../../../reducks/populationType';
import { selectPrefecture } from '../../../reducks/selectedPrefecture/slices';
import { selectSelectedPrefecture } from '../../../reducks/selectedPrefecture';

export const usePopulationComposition = () => {
  const selectedTypes = useSelector(selectPopulationType);
  const selectedPrefecture = useSelector(selectSelectedPrefecture);
  const response: PopulationCompositionResponse | null =
    useSelector(selectPopulation);
  const loading: boolean = useSelector(selectPopulationLoading);
  const error: string | null = useSelector(selectPopulationError);

  const data = response ? response.result.data : null;
  const filteredData: TransformedData[] | null = data
    ? data.map((item) => {
        const filteredItem: TransformedData = { name: item.name };
        selectedTypes.forEach((type) => {
          if (item[type] !== undefined) {
            filteredItem[type] = item[type];
          }
        });
        return filteredItem;
      })
    : null;

  return {
    data: filteredData,
    loading,
    error,
    selectedTypes,
    selectedPrefecture,
  };
};
