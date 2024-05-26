import React from 'react';
import './presenter.css';
import { SelectedPrefecture } from '../../../../../reducks/selectedPrefecture/types';

export type ContainerProps = {
  className?: string;
  label: SelectedPrefecture;
};

type Props = {
  checked: boolean;
  className?: string;
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
      key={label.prefCode}
    />
    {label.prefName}
  </div>
);

export default React.memo(CheckBoxPresentational);
