import React from 'react';
import './presenter.css';
import { HeaderTitle } from './HeaderTitle/index';

export type ContainerProps = {
  id?: string;
};

const HeaderPresentational: React.FC<ContainerProps> = ({ id }) => (
  <header
    id={`header${id ? ` ${id}` : ''}`}
    data-testid="header-presentational"
  >
    <HeaderTitle />
  </header>
);

export default React.memo(HeaderPresentational);
