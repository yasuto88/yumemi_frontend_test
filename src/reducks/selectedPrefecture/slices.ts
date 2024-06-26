import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SelectedPrefecture } from './types';
import { initialState } from './initializes';

const selectedPrefectureSlice = createSlice({
  name: 'selectedPrefecture',
  initialState,
  reducers: {
    // 選択中の都道府県を設定
    selectPrefecture(state, action: PayloadAction<SelectedPrefecture>) {
      state.selected = action.payload;
    },
  },
});

export const { selectPrefecture } = selectedPrefectureSlice.actions;

export default selectedPrefectureSlice.reducer;
