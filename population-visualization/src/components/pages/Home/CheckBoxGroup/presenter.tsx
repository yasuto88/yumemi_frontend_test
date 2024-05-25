import React from 'react';
import CheckBoxPresentational from './CheckBox/presenter';
import './presenter.css';
import { SelectedPrefecture } from '../../../../reducks/selectedPrefecture/types';

export type CheckBoxOption = {
  label: SelectedPrefecture;
  checked: boolean;
};

type Props = {
  options: CheckBoxOption[];
  onChange: (label: string, checked: boolean) => void;
  className?: string;
};

const CheckBoxGroupPresentational: React.FC<Props> = ({
  options,
  onChange,
  className,
}) => (
  <div className={`checkbox-group ${className}`}>
    {options.map((option) => (
      <CheckBoxPresentational
        key={option.label.prefCode}
        label={option.label}
        checked={option.checked}
        onChange={(checked) => onChange(option.label.prefName, checked)}
        className="checkbox-item"
      />
    ))}
  </div>
);

export default React.memo(CheckBoxGroupPresentational);
