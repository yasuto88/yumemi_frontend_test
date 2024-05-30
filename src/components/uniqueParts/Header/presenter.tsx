import React from 'react';
import './presenter.css';
import { HeaderTitle } from './HeaderTitle/index';

export type ContainerProps = {
  id?: string;
};

type Props = {} & ContainerProps;

const HeaderPresentational: React.FC<Props> = ({ id }) => (
  <header
    id={`header${id ? ` ${id}` : ''}`}
    data-testid="header-presentational"
  >
    <HeaderTitle />
  </header>
);

export default React.memo(HeaderPresentational);
