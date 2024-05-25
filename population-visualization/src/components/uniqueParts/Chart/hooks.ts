import { useSelector } from 'react-redux';
import {
  selectPopulation,
  selectPopulationError,
  selectPopulationLoading,
} from '../../../reducks/populationComposition';
import { PopulationCompositionResponse } from '../../../reducks/populationComposition/types';

export const usePopulationComposition = () => {
  const response: PopulationCompositionResponse | null =
    useSelector(selectPopulation);
  const loading: boolean = useSelector(selectPopulationLoading);
  const error: string | null = useSelector(selectPopulationError);

  const data = response ? response.result.data : null;

  return { data, loading, error };
};
