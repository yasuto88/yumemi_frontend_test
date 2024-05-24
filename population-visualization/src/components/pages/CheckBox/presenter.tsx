import React from 'react';
import './presenter.css';
import { SelectedPrefecture } from '../../../reducks/selectedPrefecture';

export type ContainerProps = {
  className?: string;
  label: SelectedPrefecture;
};

type Props = {
  checked: boolean;
  onChange: (checked: boolean) => void;
} & ContainerProps;

const CheckBoxPresentational: React.FC<Props> = ({
  label,
  checked,
  onChange,
  className,
}) => (
  <div className={`checkbox ${className}`}>
    <input
      type="checkbox"
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
    />
    {label.prefName}
  </div>
);

export default React.memo(CheckBoxPresentational);
