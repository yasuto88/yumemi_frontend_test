import React from 'react';
import { PopulationType } from '../../../../reducks/populationType';

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
        <label key={type}>
          <input
            type="checkbox"
            value={type}
            checked={checked(type)}
            onChange={() => onChange(type)}
          />
          <span>{type}</span>
        </label>
      ))}
    </div>
  );
};

export default React.memo(ChartTypeSelectPresentational);
