import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { prefecturesReducer } from '../prefectureList';
import { selectedPrefectureReducer } from '../selectedPrefecture';
import { populationReducer } from '../populationComposition';
import { populationTypeReducer } from '../populationType';

// ストアを生成
export const store = configureStore({
  // リデューサーを指定
  reducer: {
    prefectures: prefecturesReducer,
    selectedPrefecture: selectedPrefectureReducer,
    population: populationReducer,
    populationType: populationTypeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
