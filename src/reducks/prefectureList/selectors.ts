import { RootState } from '../store';

// 都道府県一覧を取得
export const selectPrefectures = (state: RootState) => state.prefectures.list;
export const selectPrefecturesLoading = (state: RootState) =>
  state.prefectures.loading;
export const selectPrefecturesError = (state: RootState) =>
  state.prefectures.error;
