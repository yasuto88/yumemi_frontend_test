import React from 'react';
import './presenter.css';
import { CheckBoxGroup } from '../CheckBoxGroup';

export type ContainerProps = {
  id?: string;
};

type Props = {} & ContainerProps;

const SideBarPresentational: React.FC<Props> = ({ id }) => {
  return (
    <div id={`side-bar ${id}`} data-testid="side-bar">
      <h3>都道府県</h3>
      <CheckBoxGroup />
    </div>
  );
};

export default React.memo(SideBarPresentational);
