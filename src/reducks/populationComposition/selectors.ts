import { RootState } from '../store';

// 人口構成データを取得
export const selectPopulation = (state: RootState) => state.population.data;
export const selectPopulationLoading = (state: RootState) =>
  state.population.loading;
export const selectPopulationError = (state: RootState) =>
  state.population.error;
