import { RootState } from '../store';

// 選択中の都道府県を取得
export const selectSelectedPrefecture = (state: RootState) =>
  state.selectedPrefecture.selected;
