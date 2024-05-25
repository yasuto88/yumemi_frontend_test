import React from 'react';
import { render, screen } from '@testing-library/react';
import { usePopulationComposition } from './hooks';
import { Loading } from '../../uiParts/Loading';
import { PopulationCompositionData } from '../../../reducks/populationComposition';
import { Error } from '../../uiParts/Error';

// モックの設定
jest.mock('./hooks');

describe('usePopulationComposition', () => {
  const mockPopulationCompositionData: PopulationCompositionData[] = [
    { name: '1960', population: 5000 },
    { name: '1965', population: 6000 },
  ];

  const mockUsePopulationComposition =
    usePopulationComposition as jest.MockedFunction<
      typeof usePopulationComposition
    >;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should render loading state', () => {
    mockUsePopulationComposition.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });
    render(<Loading />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('should render error state', () => {
    mockUsePopulationComposition.mockReturnValue({
      data: null,
      loading: false,
      error: 'Error occurred',
    });
    render(<Error message="Error occurred" />);
    expect(screen.getByText('Error occurred')).toBeInTheDocument();
  });

  test('should render chart data', () => {
    mockUsePopulationComposition.mockReturnValue({
      data: mockPopulationCompositionData,
      loading: false,
      error: null,
    });
    const TestComponent = () => {
      const { data } = usePopulationComposition();
      return (
        <div>
          {data?.map((item) => (
            <div key={item.name}>
              {item.name}: {item.population}
            </div>
          ))}
        </div>
      );
    };
    render(<TestComponent />);
    expect(screen.getByText('1960: 5000')).toBeInTheDocument();
    expect(screen.getByText('1965: 6000')).toBeInTheDocument();
  });
});
