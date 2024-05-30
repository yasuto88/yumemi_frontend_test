// PrefectureListのStateの型定義
export interface Prefecture {
  prefCode: number;
  prefName: string;
}

// PrefectureListのStateの型定義
export interface PrefecturesState {
  list: Prefecture[];
  loading: boolean;
  error: string | null;
}
