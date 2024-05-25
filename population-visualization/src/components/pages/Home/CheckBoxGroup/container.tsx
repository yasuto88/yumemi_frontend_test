import React from 'react';
import { usePrefectures } from './hooks';
import CheckBoxGroupPresentational, { CheckBoxOption } from './presenter';
import { SelectedPrefecture } from '../../../../reducks/selectedPrefecture/types';
import { Prefecture } from '../../../../reducks/prefectureList/types';
import { Loading } from '../../../uiParts/Loading';
import { Error } from '../../../uiParts/Error';

const CheckBoxContainer: React.FC = () => {
  const { prefectures, loading, error } = usePrefectures();
  const [selectedPrefecture, setSelectedPrefecture] =
    React.useState<SelectedPrefecture | null>(null);

  const handleCheckBoxChange = (label: string, checked: boolean) => {
    if (checked) {
      const selectedPref = prefectures.find(
        (pref: Prefecture) => pref.prefName === label,
      );
      if (selectedPref) {
        setSelectedPrefecture(selectedPref);
      }
    } else {
      setSelectedPrefecture(null);
    }
  };

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

  return (
    <CheckBoxGroupPresentational
      options={options}
      className="checkbox-group"
      onChange={handleCheckBoxChange}
    />
  );
};

export default CheckBoxContainer;
