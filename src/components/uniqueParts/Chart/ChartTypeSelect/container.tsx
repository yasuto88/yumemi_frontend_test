import React from 'react';
import { usePopulationType } from './hooks';
import ChartTypeSelectPresentational, { ContainerProps } from './presenter';

const ChartContainer: React.FC<ContainerProps> = (props) => {
  // チャートの種類を管理するカスタムフック
  const { selectedTypes, handleToggleType, isChecked } = usePopulationType();

  return (
    <ChartTypeSelectPresentational
      id={props.id}
      checked={isChecked}
      onChange={handleToggleType}
      selectedType={selectedTypes}
    />
  );
};

export default ChartContainer;
