import React from 'react';
import { useSelectedPrefecture } from './hooks';
import CheckBoxPresentational, { ContainerProps } from './presenter';

const CheckBoxContainer: React.FC<ContainerProps> = (props) => {
  const { handleCheckBoxChange, isSelected } = useSelectedPrefecture();

  return (
    <CheckBoxPresentational
      {...props}
      checked={isSelected(props.label)}
      onChange={(checked) => handleCheckBoxChange(props.label, checked)}
      label={props.label}
    />
  );
};

export default CheckBoxContainer;
