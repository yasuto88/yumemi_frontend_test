import React from 'react';
import './presenter.css';

export type ContainerProps = {
  id?: string;
};

type Props = {
  /** タイトルのテキスト */
  title: string;
} & ContainerProps;

const HeaderTitlePresentational: React.FC<Props> = ({ title, id }) => (
  <h1 id={`header-title ${id}`}>{title}</h1>
);

export default React.memo(HeaderTitlePresentational);
