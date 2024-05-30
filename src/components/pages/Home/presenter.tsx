import React from 'react';
import './presenter.css';
import { Header } from '../../uniqueParts/Header';
import { Chart } from '../../uniqueParts/Chart';
import { CheckBoxGroup } from '../../uniqueParts/CheckBoxGroup';
import { SideBar } from '../../uniqueParts/SideBar';
import { Modal } from '../../uiParts/Modal';

export type ContainerProps = {
  id?: string;
  isSp?: boolean; // スマホかどうか
  isTablet?: boolean; // タブレットかどうか
  isPc?: boolean; // PCかどうか
};

type Props = {} & ContainerProps;

const HomePresentational: React.FC<Props> = ({ id, isSp, isTablet, isPc }) => (
  <div id={id || 'home'}>
    {/* PCサイズの時のみ表示 */}
    {isPc && <SideBar id="side-bar" />}
    <div id="main-content">
      <Header />
      {(isSp || isTablet) && (
        <Modal children={<CheckBoxGroup />} buttonText="都道府県を選択" />
      )}
      <Chart />
    </div>
  </div>
);

export default React.memo(HomePresentational);
