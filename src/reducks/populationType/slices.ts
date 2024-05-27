import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PopulationType, PopulationTypeState } from './types';
import { initialState } from './initializes';

const populationTypeSlice = createSlice({
  name: 'populationType',
  initialState: initialState,
  reducers: {
    togglePopulationType(state, action: PayloadAction<PopulationType>) {
      if (state.selectedType.includes(action.payload)) {
        state.selectedType = state.selectedType.filter(
          (type) => type !== action.payload,
        );
      } else {
        state.selectedType.push(action.payload);
      }
    },
  },
});

export const { togglePopulationType } = populationTypeSlice.actions;

export default populationTypeSlice.reducer;
