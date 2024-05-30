import React from 'react';
import './presenter.css';
import { SelectedPrefecture } from '../../../../reducks/selectedPrefecture';

export type ContainerProps = {
  id?: string;
  label: SelectedPrefecture; // 都道府県の情報
};

type Props = {
  checked: boolean; // チェックボックスの選択状態
  id?: string;
  onChange: (checked: boolean) => void; // チェックボックスの選択状態を変更する関数
} & ContainerProps;

const CheckBoxPresentational: React.FC<Props> = ({
  label,
  checked,
  onChange,
  id,
}) => (
  <div id={id}>
    <input
      type="checkbox"
      id={`checkbox-input-${label.prefCode}`}
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
      key={label.prefCode}
      title={label.prefName}
      aria-label={label.prefName}
    />
    <label
      id={`label-${label.prefName}`}
      htmlFor={`checkbox-input-${label.prefCode}`}
    >
      {label.prefName}
    </label>
  </div>
);

export default React.memo(CheckBoxPresentational);
