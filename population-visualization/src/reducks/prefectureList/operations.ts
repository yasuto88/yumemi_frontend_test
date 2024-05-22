import { AppThunk } from "../store";
import {
  fetchPrefecturesStart,
  fetchPrefecturesSuccess,
  fetchPrefecturesFailure,
} from "./slices";
import { Prefecture } from "./types";

const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

export const fetchPrefectures = (): AppThunk => async (dispatch) => {
  try {
    console.log("API_KEY:", REACT_APP_API_KEY);
    dispatch(fetchPrefecturesStart());
    const response = await fetch(
      "https://opendata.resas-portal.go.jp/api/v1/prefectures",
      {
        headers: { "X-API-KEY": REACT_APP_API_KEY ?? "" },
      }
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
