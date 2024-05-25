import React from 'react';
import HomePresentational from './presenter';
import { ContainerProps } from './presenter';
import { useFetchPopulation, useFetchPrefectures } from './hooks';

const HomeContainer: React.FC<ContainerProps> = (props) => {
  const prefecturesState = useFetchPrefectures();
  const data = useFetchPopulation();

  return <HomePresentational {...props} />;
};

export default HomeContainer;