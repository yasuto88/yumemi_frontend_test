import React from 'react';
import { usePrefectures } from './hooks';
import CheckBoxGroupPresentational, { CheckBoxOption } from './presenter';
import { SelectedPrefecture } from '../../../reducks/selectedPrefecture';
import { Loading } from '../../uiParts/Loading';
import { Error } from '../../uiParts/Error';
import { Prefecture } from '../../../reducks/prefectureList';

const CheckBoxContainer: React.FC = () => {
  const { prefectures, loading, error } = usePrefectures();
  const [selectedPrefecture, setSelectedPrefecture] =
    React.useState<SelectedPrefecture | null>(null);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={`Error: ${error}`} />;
  }

  const options: CheckBoxOption[] = prefectures.map((pref: Prefecture) => ({
    label: pref,
    checked: selectedPrefecture?.prefName === pref.prefName,
  }));

  return <CheckBoxGroupPresentational options={options} id="checkbox-group" />;
};

export default CheckBoxContainer;
