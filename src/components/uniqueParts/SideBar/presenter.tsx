import React from 'react';
import './presenter.css';
import { CheckBoxGroup } from '../CheckBoxGroup';

export type ContainerProps = {
  id?: string;
};

const SideBarPresentational: React.FC<ContainerProps> = ({ id }) => {
  return (
    <div id={id} data-testid="side-bar">
      <h3>都道府県</h3>
      <CheckBoxGroup />
    </div>
  );
};

export default React.memo(SideBarPresentational);
