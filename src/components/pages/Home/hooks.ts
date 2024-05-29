import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  PrefecturesState,
  fetchPrefectures,
} from '../../../reducks/prefectureList';
import { AppDispatch, RootState } from '../../../reducks/store';
import { selectSelectedPrefecture } from '../../../reducks/selectedPrefecture';
import {
  selectPopulation,
  selectPopulationError,
  selectPopulationLoading,
} from '../../../reducks/populationComposition';
import { fetchPopulation } from '../../../reducks/populationComposition/operations';

export const useFetchPrefectures = (): PrefecturesState => {
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPrefectures());
  }, [dispatch]);

  const prefecturesState = useSelector((state: RootState) => state.prefectures);

  return prefecturesState;
};

export const useFetchPopulation = () => {
  const dispatch: AppDispatch = useDispatch();
  const selectedPrefecture = useSelector(selectSelectedPrefecture);
  const data = useSelector(selectPopulation);
  const loading = useSelector(selectPopulationLoading);
  const error = useSelector(selectPopulationError);

  useEffect(() => {
    if (selectedPrefecture) {
      dispatch(fetchPopulation(selectedPrefecture.prefCode));
    }
  }, [dispatch, selectedPrefecture]);

  return { data, loading, error, selectedPrefecture };
};
