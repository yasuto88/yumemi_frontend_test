import React from 'react';
import { PopulationType } from '../../../../reducks/populationType';
import './presenter.css';

export type ContainerProps = {
  id?: string;
};

type Props = {
  selectedType: PopulationType[];
  onChange: (type: PopulationType) => void;
  checked: (type: PopulationType) => boolean;
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
    <div id={`chart-type-select${id ? ` ${id}` : ''}`}>
      {ChartTypeList.map((type) => (
        <div id="checkbox" key={type}>
          <input
            type="checkbox"
            id={`checkbox-${type}`}
            checked={checked(type)}
            onChange={() => onChange(type)}
            title={type}
            aria-label={type}
          />
          <label
            id={`sample_label ${getLabelClass(type)}`}
            htmlFor={`checkbox-${type}`}
          >
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
