import React from 'react';
import HomePresentational from './presenter';
import { ContainerProps } from './presenter';
import { useFetchPrefectures } from './hooks';

const HomeContainer: React.FC<ContainerProps> = (props) => {
  const prefecturesState = useFetchPrefectures();

  return <HomePresentational {...props} />;
};

export default HomeContainer;
