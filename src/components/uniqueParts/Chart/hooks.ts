import { useSelector } from 'react-redux';
import {
  selectPopulation,
  selectPopulationError,
  selectPopulationLoading,
} from '../../../reducks/populationComposition';
import {
  PopulationCompositionResponse,
  TransformedData,
} from '../../../reducks/populationComposition/types';
import { selectPopulationType } from '../../../reducks/populationType';
import { selectSelectedPrefecture } from '../../../reducks/selectedPrefecture';

// 人口構成データを取得するためのカスタムフック
export const usePopulationComposition = () => {
  // 選択された人口タイプを取得
  const selectedTypes = useSelector(selectPopulationType);

  // 選択された都道府県を取得
  const selectedPrefecture = useSelector(selectSelectedPrefecture);

  // 人口構成データを取得
  const response: PopulationCompositionResponse | null =
    useSelector(selectPopulation);
  const loading: boolean = useSelector(selectPopulationLoading);
  const error: string | null = useSelector(selectPopulationError);

  const data = response ? response.result.data : null;

  // 選択された人口タイプのデータのみを抽出
  const filteredData: TransformedData[] | null = data
    ? data.map((item) => {
        const filteredItem: TransformedData = { name: item.name };
        selectedTypes.forEach((type) => {
          if (item[type] !== undefined) {
            filteredItem[type] = item[type];
          }
        });
        return filteredItem;
      })
    : null;

  return {
    data: filteredData,
    loading,
    error,
    selectedTypes,
    selectedPrefecture,
  };
};
