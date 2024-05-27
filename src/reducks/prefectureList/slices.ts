import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Prefecture } from './types';
import { initialState } from './initializes';

const prefecturesSlice = createSlice({
  name: 'prefectures',
  initialState,
  reducers: {
    fetchPrefecturesStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchPrefecturesSuccess(state, action: PayloadAction<Prefecture[]>) {
      state.loading = false;
      state.list = action.payload;
    },
    fetchPrefecturesFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchPrefecturesStart,
  fetchPrefecturesSuccess,
  fetchPrefecturesFailure,
} = prefecturesSlice.actions;

export default prefecturesSlice.reducer;
