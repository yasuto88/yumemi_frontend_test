import React from 'react';
import { render, screen } from '@testing-library/react';
import ChartContainer from './container';
import { usePopulationComposition } from './hooks';
import { Provider } from 'react-redux';
import store from '../../../reducks/store';

jest.mock('./hooks');

describe('ChartContainer', () => {
  const mockUsePopulationComposition =
    usePopulationComposition as jest.MockedFunction<
      typeof usePopulationComposition
    >;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderWithProvider = (ui: React.ReactElement) => {
    return render(<Provider store={store}>{ui}</Provider>);
  };

  test('should render loading state', () => {
    mockUsePopulationComposition.mockReturnValue({
      data: null,
      loading: true,
      error: null,
      selectedTypes: [],
    });
    render(<ChartContainer />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('should render error state', () => {
    const errorMessage = 'Error occurred';
    mockUsePopulationComposition.mockReturnValue({
      data: null,
      loading: false,
      error: errorMessage,
      selectedTypes: [],
    });
    render(<ChartContainer />);
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });

  test('should render chart presentational component', () => {
    const mockData = [
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
    mockUsePopulationComposition.mockReturnValue({
      data: mockData,
      loading: false,
      error: null,
      selectedTypes: ['総人口', '年少人口', '生産年齢人口', '老年人口'],
    });
    renderWithProvider(<ChartContainer />);
    expect(screen.getByText('Population Composition')).toBeInTheDocument();

    // Check that the chart wrapper is present
    const chartWrapper = screen.getByTestId('chart-wrapper');
    expect(chartWrapper).toBeInTheDocument();

    // Check that the labels are rendered
    ['総人口', '年少人口', '生産年齢人口', '老年人口'].forEach((key) => {
      expect(screen.getByText(key)).toBeInTheDocument();
    });
  });
});
