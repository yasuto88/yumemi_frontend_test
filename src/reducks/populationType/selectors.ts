import { RootState } from '../store';

export const selectPopulationType = (state: RootState) =>
  state.populationType.selectedType;
