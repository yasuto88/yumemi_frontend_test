import React from 'react';
import { PopulationType } from '../../../../reducks/populationType';
import './presenter.css';

export type ContainerProps = {
  className?: string;
};

type Props = {
  selectedType: PopulationType[];
  onChange: (type: PopulationType) => void;
  checked: (type: PopulationType) => boolean;
} & ContainerProps;

const ChartTypeSelectPresentational: React.FC<Props> = ({
  className,
  selectedType,
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
    <div className={`chart-type-select ${className}`}>
      {ChartTypeList.map((type) => (
        <div className="checkbox" key={type}>
          <input
            type="checkbox"
            id={`checkbox-${type}`}
            checked={checked(type)}
            onChange={() => onChange(type)}
            title={type}
            aria-label={type}
          />
          <label
            className={`sample_label ${getLabelClass(type)}`}
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
