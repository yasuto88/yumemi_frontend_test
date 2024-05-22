import { SelectedPrefecture } from "./types";

interface SelectedPrefectureState {
  selected: SelectedPrefecture | null;
}

export const initialState: SelectedPrefectureState = {
  selected: null,
};
