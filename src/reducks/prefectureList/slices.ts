import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Prefecture } from './types';
import { initialState } from './initializes';

const prefecturesSlice = createSlice({
  name: 'prefectures',
  initialState,
  reducers: {
    // 都道府県一覧取得開始
    fetchPrefecturesStart(state) {
      state.loading = true;
      state.error = null;
    },

    // 都道府県一覧取得成功
    fetchPrefecturesSuccess(state, action: PayloadAction<Prefecture[]>) {
      state.loading = false;
      state.list = action.payload;
    },

    // 都道府県一覧取得失敗
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
