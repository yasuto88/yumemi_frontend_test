import React from 'react';
import { usePopulationComposition } from './hooks';
import ChartPresentational, { ContainerProps } from './presenter';
import { Loading } from '../../uiParts/Loading';
import { Error } from '../../uiParts/Error';

const ChartContainer: React.FC<ContainerProps> = (props) => {
  const { data, loading, error, selectedPrefecture } =
    usePopulationComposition();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <ChartPresentational
      id="chart"
      data={data}
      selectedPrefecture={selectedPrefecture}
    />
  );
};

export default ChartContainer;
