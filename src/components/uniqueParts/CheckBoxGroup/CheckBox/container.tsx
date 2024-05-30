import React from 'react';
import { useSelectedPrefecture } from './hooks';
import CheckBoxPresentational, { ContainerProps } from './presenter';

const CheckBoxContainer: React.FC<ContainerProps> = (props) => {
  // 都道府県の選択状態を管理するカスタムフック
  const { handleCheckBoxChange, isSelected } = useSelectedPrefecture();

  return (
    <CheckBoxPresentational
      {...props}
      id={`checkbox-${props.label.prefCode}`}
      onChange={(checked) => handleCheckBoxChange(props.label, checked)}
      label={props.label}
      checked={isSelected(props.label)}
    />
  );
};

export default CheckBoxContainer;
