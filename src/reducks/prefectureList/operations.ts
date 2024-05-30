import { AppThunk } from '../store';
import {
  fetchPrefecturesStart,
  fetchPrefecturesSuccess,
  fetchPrefecturesFailure,
} from './slices';
import { Prefecture } from './types';

const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

// 都道府県一覧を取得する非同期関数
export const fetchPrefectures = (): AppThunk => async (dispatch) => {
  try {
    dispatch(fetchPrefecturesStart());

    // RESASのAPIを叩いて都道府県一覧を取得
    const response = await fetch(
      'https://opendata.resas-portal.go.jp/api/v1/prefectures',
      {
        headers: { 'X-API-KEY': REACT_APP_API_KEY ?? '' },
      },
    );
    const data = await response.json();
    const prefectures: Prefecture[] = data.result;
    dispatch(fetchPrefecturesSuccess(prefectures));
  } catch (error) {
    if (error instanceof Error) {
      dispatch(fetchPrefecturesFailure(error.message));
    } else {
      dispatch(fetchPrefecturesFailure(String(error)));
    }
  }
};
