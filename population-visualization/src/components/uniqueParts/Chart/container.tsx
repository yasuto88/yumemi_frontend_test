import React from 'react';
import { usePopulationComposition } from './hooks';
import ChartPresentational, { ContainerProps } from './presenter';
import { Loading } from '../../uiParts/Loading';
import { Error } from '../../uiParts/Error';

const ChartContainer: React.FC<ContainerProps> = (props) => {
  const { data, loading, error } = usePopulationComposition();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return <ChartPresentational className="chart" data={data} />;
};

export default ChartContainer;
