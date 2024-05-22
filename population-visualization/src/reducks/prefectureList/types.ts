export interface Prefecture {
  prefCode: number;
  prefName: string;
}

export interface PrefecturesState {
  list: Prefecture[];
  loading: boolean;
  error: string | null;
}
