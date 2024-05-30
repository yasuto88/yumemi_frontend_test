import React from 'react';
import { usePopulationComposition } from './hooks';
import ChartPresentational, { ContainerProps } from './presenter';
import { Loading } from '../../uiParts/Loading';
import { Error } from '../../uiParts/Error';

const ChartContainer: React.FC<ContainerProps> = (props) => {
  // 人口構成データを取得するカスタムフック
  const { data, loading, error, selectedPrefecture } =
    usePopulationComposition();

  // ローディング中はローディングコンポーネントを表示
  if (loading) {
    return <Loading />;
  }

  // エラーが発生した場合はエラーコンポーネントを表示
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
