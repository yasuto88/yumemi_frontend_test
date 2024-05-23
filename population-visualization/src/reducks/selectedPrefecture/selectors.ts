import { RootState } from '../store';

export const selectSelectedPrefecture = (state: RootState) =>
  state.selectedPrefecture.selected;
