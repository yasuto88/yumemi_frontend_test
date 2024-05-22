import { RootState } from "../store";

export const selectPrefectures = (state: RootState) => state.prefectures.list;
export const selectPrefecturesLoading = (state: RootState) =>
  state.prefectures.loading;
export const selectPrefecturesError = (state: RootState) =>
  state.prefectures.error;
