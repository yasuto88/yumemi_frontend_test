import React from 'react';
import { render, screen } from '@testing-library/react';
import ChartPresentational, { ContainerProps } from './presenter';
import { PopulationCompositionData } from '../../../reducks/populationComposition/types';

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
      population: 5000,
    },
    {
      name: '1965',
      population: 6000,
    },
  ];

  test('renders chart with data', () => {
    render(<ChartPresentational className="test-class" data={mockData} />);

    expect(screen.getByText('Population Composition')).toBeInTheDocument();
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
    render(<ChartPresentational className="test-class" data={null} />);

    expect(screen.getByText('Population Composition')).toBeInTheDocument();
    expect(screen.getByText('No data available')).toBeInTheDocument();
  });

  test('renders no data message when data is empty', () => {
    render(<ChartPresentational className="test-class" data={[]} />);

    expect(screen.getByText('Population Composition')).toBeInTheDocument();
    expect(screen.getByText('No data available')).toBeInTheDocument();
  });
});
