import { AppDispatch } from '../store';
import {
  fetchPopulationStart,
  fetchPopulationSuccess,
  fetchPopulationFailure,
} from './slices';
import { PopulationCompositionResponse } from './types';

// .envからAPIキーを取得する
const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

export const fetchPopulation =
  (prefCode: number) => async (dispatch: AppDispatch) => {
    try {
      dispatch(fetchPopulationStart());
      const response = await fetch(
        `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${prefCode}&cityCode=-`,
        {
          headers: { 'X-API-KEY': REACT_APP_API_KEY ?? '' },
        },
      );
      const data: PopulationCompositionResponse = await response.json();
      dispatch(fetchPopulationSuccess(data));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(fetchPopulationFailure(error.toString()));
      } else {
        dispatch(fetchPopulationFailure(String('エラーが発生しました。')));
      }
    }
  };
