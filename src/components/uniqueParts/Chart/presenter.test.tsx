import React from 'react';
import { render, screen } from '@testing-library/react';
import ChartPresentational from './presenter';
import { PopulationCompositionData } from '../../../reducks/populationComposition/types';
import { Provider } from 'react-redux';
import store from '../../../reducks/store';

// モックの設定
jest.mock('recharts', () => ({
  LineChart: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="line-chart">{children}</div>
  ),
  Line: () => <div data-testid="line" />,
  XAxis: () => <div data-testid="x-axis" />,
  YAxis: () => <div data-testid="y-axis" />,
  CartesianGrid: () => <div data-testid="cartesian-grid" />,
  Tooltip: () => <div data-testid="tooltip" />,
  Legend: () => <div data-testid="legend" />,
  ResponsiveContainer: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="responsive-container">{children}</div>
  ),
}));

describe('ChartPresentational', () => {
  const mockData: PopulationCompositionData[] = [
    {
      name: '1960',
      総人口: 5000,
      年少人口: 1000,
      生産年齢人口: 3000,
      老年人口: 1000,
    },
    {
      name: '1965',
      総人口: 6000,
      年少人口: 1200,
      生産年齢人口: 3600,
      老年人口: 1200,
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders chart with data', () => {
    render(
      <Provider store={store}>
        <ChartPresentational
          className="test-class"
          data={mockData}
          selectedPrefecture={{
            prefCode: 1,
            prefName: '北海道',
          }}
        />
      </Provider>,
    );

    expect(screen.getByText('北海道の人口推移グラフ')).toBeInTheDocument();
    expect(screen.getByTestId('responsive-container')).toBeInTheDocument();
    expect(screen.getByTestId('line-chart')).toBeInTheDocument();
    expect(screen.getByTestId('cartesian-grid')).toBeInTheDocument();
    expect(screen.getByTestId('x-axis')).toBeInTheDocument();
    expect(screen.getByTestId('y-axis')).toBeInTheDocument();
    expect(screen.getByTestId('tooltip')).toBeInTheDocument();
    expect(screen.getByTestId('legend')).toBeInTheDocument();
    expect(screen.getAllByTestId('line')).toHaveLength(
      Object.keys(mockData[0]).filter((key) => key !== 'name').length,
    );
  });

  test('renders no data message when data is null', () => {
    render(
      <ChartPresentational
        className="test-class"
        data={null}
        selectedPrefecture={null}
      />,
    );

    expect(screen.getByText('都道府県を選択してください')).toBeInTheDocument();
    expect(screen.queryByTestId('responsive-container')).toBeNull();
  });

  test('renders no data message when data is empty', () => {
    render(
      <ChartPresentational
        className="test-class"
        data={[]}
        selectedPrefecture={null}
      />,
    );

    expect(screen.getByText('都道府県を選択してください')).toBeInTheDocument();
    expect(screen.queryByTestId('responsive-container')).toBeNull();
  });
});
