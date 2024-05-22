<<<<<<< HEAD
import { RootState } from '../store';
=======
import { RootState } from "../store";
>>>>>>> 78a6833 (chore: Add prefecture list feature to Redux store)

export const selectPrefectures = (state: RootState) => state.prefectures.list;
export const selectPrefecturesLoading = (state: RootState) =>
  state.prefectures.loading;
export const selectPrefecturesError = (state: RootState) =>
  state.prefectures.error;
