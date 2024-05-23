import React from 'react';
import './presenter.css';
import { HeaderTitle } from './HeaderTitle/index';

export type ContainerProps = {
  className?: string;
};

type Props = {} & ContainerProps;

const HeaderPresentational: React.FC<Props> = ({ className }) => (
  <header className={`header ${className}`}>
    <HeaderTitle />
  </header>
);

export default React.memo(HeaderPresentational);
