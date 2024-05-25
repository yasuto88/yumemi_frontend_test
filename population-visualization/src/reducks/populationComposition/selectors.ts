import { RootState } from '../store';

export const selectPopulation = (state: RootState) => state.population.data;
export const selectPopulationLoading = (state: RootState) =>
  state.population.loading;
export const selectPopulationError = (state: RootState) =>
  state.population.error;
