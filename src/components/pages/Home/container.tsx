import React from 'react';
import HomePresentational from './presenter';
import { ContainerProps } from './presenter';
import { useFetchPopulation, useFetchPrefectures } from './hooks';
import { useMediaQuery, mediaQuery } from '../../../hooks/useMediaQuery';

const HomeContainer: React.FC<ContainerProps> = (props) => {
  useFetchPrefectures();
  useFetchPopulation();
  const isSp = useMediaQuery(mediaQuery.sp);
  const isTablet = useMediaQuery(mediaQuery.tablet);
  const isPc = useMediaQuery(mediaQuery.pc);

  return (
    <HomePresentational
      {...props}
      isSp={isSp}
      isTablet={isTablet}
      isPc={isPc}
    />
  );
};

export default HomeContainer;
