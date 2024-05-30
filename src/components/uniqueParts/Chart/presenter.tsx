import React, { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import './presenter.css';
import { PopulationCompositionData } from '../../../reducks/populationComposition';
import { ChartTypeSelect } from './ChartTypeSelect';
import { SelectedPrefecture } from '../../../reducks/selectedPrefecture';

export type ContainerProps = {
  id?: string;
};

type Props = {
  data: PopulationCompositionData[] | null; // グラフに表示するデータ
  selectedPrefecture: SelectedPrefecture | null; // 選択された都道府県
} & ContainerProps;

// グラフの色を設定
const colorMap: { [key: string]: string } = {
  総人口: '#36cfc9',
  年少人口: '#a0d911',
  生産年齢人口: '#4096ff',
  老年人口: '#9254de',
};

const ChartPresentational: React.FC<Props> = ({
  id,
  data,
  selectedPrefecture,
}) => {
  const [fontSize, setFontSize] = useState(12);

  useEffect(() => {
    const handleResize = () => {
      const newFontSize = window.innerWidth < 600 ? 10 : 12;
      setFontSize(newFontSize);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // 初回実行

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div id={id}>
      {selectedPrefecture ? (
        <h2>{selectedPrefecture.prefName}の人口推移グラフ</h2>
      ) : (
        <h2>都道府県を選択してください</h2>
      )}
      {data && data.length > 0 ? (
        <div id="chart-wrapper" data-testid="chart-wrapper">
          <ChartTypeSelect />
          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              data={data}
              margin={{ top: 5, right: 16, left: 8, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tick={{ fontSize }} />
              <YAxis tick={{ fontSize }} />
              <Tooltip />
              <Legend />
              {Object.keys(data[0])
                .filter((key) => key !== 'name')
                .map((label) => (
                  <Line
                    key={label}
                    type="monotone"
                    dataKey={label}
                    name={label}
                    stroke={colorMap[label] || '#000000'}
                    activeDot={{ r: 8 }}
                  />
                ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default React.memo(ChartPresentational);
