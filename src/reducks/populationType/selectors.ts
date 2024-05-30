import { RootState } from '../store';

// 人口タイプを取得
export const selectPopulationType = (state: RootState) =>
  state.populationType.selectedType;
