import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  PopulationCompositionResponse,
  PopulationCompositionData,
} from './types';
import { initialState } from './initializes';

// データ変換関数
const transformApiResponse = (apiData: any): PopulationCompositionData[] => {
  const transformed = apiData.result.data.reduce(
    (acc: Record<string, any>, composition: any) => {
      composition.data.forEach((item: any) => {
        const year = item.year.toString();
        if (!acc[year]) {
          acc[year] = { name: year };
        }
        acc[year][composition.label] = item.value;
      });
      return acc;
    },
    {},
  );

  return Object.values(transformed);
};

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

      // データ変換を実施
      const transformedData: PopulationCompositionData[] = transformApiResponse(
        action.payload,
      );
      state.data = {
        message: action.payload.message,
        result: {
          boundaryYear: action.payload.result.boundaryYear,
          data: transformedData,
        },
      };
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
