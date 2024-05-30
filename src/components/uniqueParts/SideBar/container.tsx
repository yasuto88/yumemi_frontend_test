import React from 'react';
import SideBarPresentational, { ContainerProps } from './presenter';

const SideBarContainer: React.FC<ContainerProps> = (props) => {
  return <SideBarPresentational {...props} />;
};

export default SideBarContainer;
