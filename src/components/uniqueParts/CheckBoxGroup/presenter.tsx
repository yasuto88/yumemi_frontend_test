import React from 'react';
import CheckBoxPresentational from './CheckBox/presenter';
import './presenter.css';
import { CheckBox } from './CheckBox';
import { SelectedPrefecture } from '../../../reducks/selectedPrefecture';

export type CheckBoxOption = {
  label: SelectedPrefecture; // 都道府県の情報
  checked: boolean; // チェックボックスの選択状態
};

type Props = {
  options: CheckBoxOption[]; //
  id?: string;
};

const CheckBoxGroupPresentational: React.FC<Props> = ({ options, id }) => (
  <div id={id}>
    {options.map((option) => (
      <CheckBox label={option.label} key={option.label.prefCode} />
    ))}
  </div>
);

export default React.memo(CheckBoxGroupPresentational);
