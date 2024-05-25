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
import { usePopulationComposition } from './hooks';
import { PopulationCompositionData } from '../../../reducks/populationComposition';

export type ContainerProps = {
  className?: string;
};

type Props = {
  data: PopulationCompositionData[] | null;
} & ContainerProps;

const ChartPresentational: React.FC<Props> = ({ className, data }) => {
  return (
    <div className={`chart ${className}`}>
      <h1>Population Composition</h1>
      {data && data.length > 0 ? (
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
                  stroke={`#${Math.floor(Math.random() * 16777215).toString(
                    16,
                  )}`}
                  activeDot={{ r: 8 }}
                />
              ))}
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default React.memo(ChartPresentational);
