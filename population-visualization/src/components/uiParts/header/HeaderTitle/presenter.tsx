import React from "react";
import './presenter.css';

export type ContainerProps = {
  className?: string;
};

type Props = {
  /** タイトルのテキスト */
  title: string;
} & ContainerProps;

const HeaderTitlePresentational: React.FC<Props> = ({ title, className }) => (
  <h1 className={`header-title ${className}`}>{title}</h1>
);

export default React.memo(HeaderTitlePresentational);
