import React from 'react';
import './presenter.css';
import { Header } from '../../uniqueParts/Header';
import { CheckBoxGroup } from './CheckBoxGroup';
import { Chart } from '../../uniqueParts/Chart';

export type ContainerProps = {
  className?: string;
};

type Props = {} & ContainerProps;

const HomePresentational: React.FC<Props> = ({ className }) => (
  <div className={className}>
    <Header />
    <CheckBoxGroup />
    <Chart />
  </div>
);

export default React.memo(HomePresentational);
