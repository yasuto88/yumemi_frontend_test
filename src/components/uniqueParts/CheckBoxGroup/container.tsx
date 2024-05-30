import React from 'react';
import { usePrefectures } from './hooks';
import CheckBoxGroupPresentational, { CheckBoxOption } from './presenter';
import { SelectedPrefecture } from '../../../reducks/selectedPrefecture';
import { Loading } from '../../uiParts/Loading';
import { Error } from '../../uiParts/Error';
import { Prefecture } from '../../../reducks/prefectureList';

const CheckBoxContainer: React.FC = () => {
  // 都道府県一覧を取得するカスタムフック
  const { prefectures, loading, error } = usePrefectures();

  // 選択中の都道府県
  const [selectedPrefecture] = React.useState<SelectedPrefecture | null>(null);

  // ロード中はローディングコンポーネントを表示
  if (loading) {
    return <Loading />;
  }

  // エラーが発生した場合はエラーコンポーネントを表示
  if (error) {
    return <Error message={`Error: ${error}`} />;
  }

  // 都道府県一覧をチェックボックスのオプションに変換
  const options: CheckBoxOption[] = prefectures.map((pref: Prefecture) => ({
    label: pref,
    checked: selectedPrefecture?.prefName === pref.prefName,
  }));

  return <CheckBoxGroupPresentational options={options} id="checkbox-group" />;
};

export default CheckBoxContainer;
