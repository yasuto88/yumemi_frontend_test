import React from 'react';
import { PopulationType } from '../../../../reducks/populationType';
import './presenter.css';

export type ContainerProps = {
  id?: string;
};

type Props = {
  selectedType: PopulationType[]; // 選択されたチャートの種類
  onChange: (type: PopulationType) => void; // チェックボックスの状態を変更する関数
  checked: (type: PopulationType) => boolean; // チェックボックスの状態を取得する関数
} & ContainerProps;

const ChartTypeSelectPresentational: React.FC<Props> = ({
  id,
  onChange,
  checked,
}) => {
  const ChartTypeList: PopulationType[] = [
    '総人口',
    '年少人口',
    '生産年齢人口',
    '老年人口',
  ];
  return (
    <div id={`chart-type-select${id ? `-${id}` : ''}`}>
      {ChartTypeList.map((type, index) => (
        <div id={`checkbox-${index}`} key={type}>
          <input
            type="checkbox"
            id={`checkbox-${type}`}
            checked={checked(type)}
            onChange={() => onChange(type)}
            title={type}
            aria-label={type}
          />
          <label id={getLabelClass(type)} htmlFor={`checkbox-${type}`}>
            {type}
          </label>
        </div>
      ))}
    </div>
  );
};

const getLabelClass = (type: PopulationType) => {
  switch (type) {
    case '総人口':
      return 'general-population';
    case '年少人口':
      return 'young-population';
    case '生産年齢人口':
      return 'working-age-population';
    case '老年人口':
      return 'elderly-population';
    default:
      return '';
  }
};

export default React.memo(ChartTypeSelectPresentational);
