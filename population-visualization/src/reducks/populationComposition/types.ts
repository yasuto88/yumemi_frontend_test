export interface PopulationCompositionData {
  name: string;
  [key: string]: string | number;
}

export interface PopulationCompositionResponse {
  message: string | null;
  result: {
    boundaryYear: number;
    data: PopulationCompositionData[];
  };
}

export interface TransformedData {
  name: string;
  [key: string]: string | number;
}

export interface PopulationState {
  data: PopulationCompositionResponse | null;
  loading: boolean;
  error: string | null;
}
