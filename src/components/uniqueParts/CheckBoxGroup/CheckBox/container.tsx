import React from 'react';
import { useSelectedPrefecture } from './hooks';
import CheckBoxPresentational, { ContainerProps } from './presenter';

const CheckBoxContainer: React.FC<ContainerProps> = (props) => {
  const { handleCheckBoxChange, isSelected } = useSelectedPrefecture();

  return (
    <CheckBoxPresentational
      {...props}
      onChange={(checked) => handleCheckBoxChange(props.label, checked)}
      label={props.label}
      checked={isSelected(props.label)}
    />
  );
};

export default CheckBoxContainer;
