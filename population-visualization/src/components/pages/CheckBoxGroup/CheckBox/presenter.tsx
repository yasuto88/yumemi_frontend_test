import React from 'react';
import './presenter.css';
import { SelectedPrefecture } from '../../../../reducks/selectedPrefecture/types';

export type ContainerProps = {
  className?: string;
  label: SelectedPrefecture;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

const CheckBoxPresentational: React.FC<ContainerProps> = ({
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
