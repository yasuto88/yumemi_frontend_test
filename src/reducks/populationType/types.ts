// Purpose: 人口データの種類を管理するための型
export type PopulationType =
  | '総人口'
  | '年少人口'
  | '生産年齢人口'
  | '老年人口';

// Purpose: 人口データの種類を管理するための型
export interface PopulationTypeState {
  selectedType: PopulationType[];
}
