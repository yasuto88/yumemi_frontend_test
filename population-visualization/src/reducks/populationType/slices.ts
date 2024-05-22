import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PopulationType } from "./types";
import { initialState } from "./initializes";

const populationTypeSlice = createSlice({
  name: "populationType",
  initialState,
  reducers: {
    selectPopulationType(state, action: PayloadAction<PopulationType>) {
      state.selectedType = action.payload;
    },
  },
});

export const { selectPopulationType } = populationTypeSlice.actions;

export default populationTypeSlice.reducer;
