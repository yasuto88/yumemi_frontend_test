import React from 'react';
import './presenter.css';
import { SelectedPrefecture } from '../../../../reducks/selectedPrefecture';

export type ContainerProps = {
  id?: string;
  label: SelectedPrefecture;
};

type Props = {
  checked: boolean;
  id?: string;
  onChange: (checked: boolean) => void;
} & ContainerProps;

const CheckBoxPresentational: React.FC<Props> = ({
  label,
  checked,
  onChange,
  id,
}) => (
  <div id={`checkbox ${id}`}>
    <input
      type="checkbox"
      id={`checkbox-${label.prefCode}`}
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
      key={label.prefCode}
      title={label.prefName}
      aria-label={label.prefName}
    />
    <label id="sample_label" htmlFor={`checkbox-${label.prefCode}`}>
      {label.prefName}
    </label>
  </div>
);

export default React.memo(CheckBoxPresentational);
