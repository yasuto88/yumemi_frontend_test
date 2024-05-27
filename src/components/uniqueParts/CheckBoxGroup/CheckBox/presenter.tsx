import React from 'react';
import './presenter.css';
import { SelectedPrefecture } from '../../../../reducks/selectedPrefecture';

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
      id={`checkbox-${label.prefCode}`}
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
      key={label.prefCode}
      title={label.prefName}
      aria-label={label.prefName}
    />
    <label className="sample_label" htmlFor={`checkbox-${label.prefCode}`}>
      {label.prefName}
    </label>
  </div>
);

export default React.memo(CheckBoxPresentational);
