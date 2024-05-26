import React from 'react';
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

export type ContainerProps = {
  className?: string;
};

type Props = {
  data: PopulationCompositionData[] | null;
} & ContainerProps;

const colorMap: { [key: string]: string } = {
  総人口: '#36cfc9', // general population
  年少人口: '#a0d911', // young population
  生産年齢人口: '#4096ff', // working age population
  老年人口: '#9254de', // elderly population
};

const ChartPresentational: React.FC<Props> = ({ className, data }) => {
  return (
    <div className={`chart ${className}`}>
      <h1>Population Composition</h1>
      {data && data.length > 0 ? (
        <div className="chart-wrapper" data-testid="chart-wrapper">
          <ChartTypeSelect />
          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
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
                    stroke={colorMap[label] || '#000000'} // Use the mapped color or default to black
                    activeDot={{ r: 8 }}
                  />
                ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default React.memo(ChartPresentational);
