import React from 'react';
import { usePopulationType } from './hooks';
import ChartTypeSelectPresentational, { ContainerProps } from './presenter';

const ChartContainer: React.FC<ContainerProps> = (props) => {
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
