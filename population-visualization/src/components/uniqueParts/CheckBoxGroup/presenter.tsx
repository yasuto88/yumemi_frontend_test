import React from 'react';
import CheckBoxPresentational from './CheckBox/presenter';
import './presenter.css';
import { SelectedPrefecture } from '../../../../reducks/selectedPrefecture/types';
import { CheckBox } from './CheckBox';

export type CheckBoxOption = {
  label: SelectedPrefecture;
  checked: boolean;
};

type Props = {
  options: CheckBoxOption[];
  className?: string;
};

const CheckBoxGroupPresentational: React.FC<Props> = ({
  options,
  className,
}) => (
  <div className={`checkbox-group ${className}`}>
    {options.map((option) => (
      <CheckBox label={option.label} />
    ))}
  </div>
);

export default React.memo(CheckBoxGroupPresentational);
