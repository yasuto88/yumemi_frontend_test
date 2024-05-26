import React from 'react';
import './presenter.css';
import { CheckBoxGroup } from '../CheckBoxGroup';

export type ContainerProps = {
  className?: string;
};

type Props = {} & ContainerProps;

const SideBarPresentational: React.FC<Props> = ({ className }) => {
  return (
    <div className={`side-bar ${className}`}>
      <h3>都道府県</h3>
      <CheckBoxGroup />
    </div>
  );
};

export default React.memo(SideBarPresentational);
