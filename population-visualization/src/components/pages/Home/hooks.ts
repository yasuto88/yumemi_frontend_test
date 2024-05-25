import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  PrefecturesState,
  fetchPrefectures,
} from '../../../reducks/prefectureList';
import { AppDispatch, RootState } from '../../../reducks/store';

export const useFetchPrefectures = (): PrefecturesState => {
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPrefectures());
  }, [dispatch]);

  const prefecturesState = useSelector((state: RootState) => state.prefectures);

  return prefecturesState;
};
