export interface PopulationData {
  year: number;
  value: number;
}

export interface PopulationCompositionData {
  label: string;
  data: PopulationData[];
}

export interface PopulationCompositionResponse {
  message: string | null;
  result: {
    boundaryYear: number;
    data: PopulationCompositionData[];
  };
}

export interface PopulationState {
  data: PopulationCompositionResponse | null;
  loading: boolean;
  error: string | null;
}