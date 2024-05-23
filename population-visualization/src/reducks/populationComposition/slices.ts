import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PopulationCompositionResponse } from './types';
import { initialState } from './initializes';

const populationSlice = createSlice({
  name: 'population',
  initialState,
  reducers: {
    fetchPopulationStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchPopulationSuccess(
      state,
      action: PayloadAction<PopulationCompositionResponse>,
    ) {
      state.loading = false;
      state.data = action.payload;
    },
    fetchPopulationFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchPopulationStart,
  fetchPopulationSuccess,
  fetchPopulationFailure,
} = populationSlice.actions;

export default populationSlice.reducer;
