// 選択された都道府県の情報を管理するための型定義
export interface SelectedPrefecture {
  prefCode: number;
  prefName: string;
}

// 選択された都道府県の情報を管理するためのStateの型定義
export interface SelectedPrefectureState {
  selected: SelectedPrefecture | null;
}
