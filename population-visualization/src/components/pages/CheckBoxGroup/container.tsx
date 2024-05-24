import React from 'react';
import { usePrefectures } from './hooks';
import CheckBoxGroupPresentational, { CheckBoxOption } from './presenter';
import { SelectedPrefecture } from '../../../reducks/selectedPrefecture/types';
import { Prefecture } from '../../../reducks/prefectureList/types';

const CheckBoxContainer: React.FC = () => {
  const { prefectures, loading, error } = usePrefectures();
  const [selectedPrefectures, setSelectedPrefectures] = React.useState<
    SelectedPrefecture[]
  >([]);

  const handleCheckBoxChange = (label: string, checked: boolean) => {
    setSelectedPrefectures((prevSelected) => {
      if (checked) {
        const selectedPref = prefectures.find(
          (pref: Prefecture) => pref.prefName === label,
        );
        if (selectedPref) {
          return [...prevSelected, selectedPref];
        }
      } else {
        return prevSelected.filter((pref) => pref.prefName !== label);
      }
      return prevSelected;
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const options: CheckBoxOption[] = prefectures.map((pref: Prefecture) => ({
    label: pref,
    checked: selectedPrefectures.some(
      (selected) => selected.prefName === pref.prefName,
    ),
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
