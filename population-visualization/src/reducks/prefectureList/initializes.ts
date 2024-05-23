import { PrefecturesState } from './types';

export const initialState: PrefecturesState = {
  list: [
    { prefCode: 1, prefName: 'Hokkaido' },
    { prefCode: 2, prefName: 'Aomori' },
  ],
  loading: false,
  error: null,
};
