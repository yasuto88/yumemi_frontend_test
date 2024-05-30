// PopulationCompositionData: 人口構成データの型
export interface PopulationCompositionData {
  name: string;
  [key: string]: string | number;
}

// PopulationCompositionResponse: 人口構成APIのレスポンスの型
export interface PopulationCompositionResponse {
  message: string | null;
  result: {
    boundaryYear: number;
    data: PopulationCompositionData[];
  };
}

// TransformedData: データ変換後の型
export interface TransformedData {
  name: string;
  [key: string]: string | number;
}

// PopulationState: 人口構成のステートの型
export interface PopulationState {
  data: PopulationCompositionResponse | null;
  loading: boolean;
  error: string | null;
}
