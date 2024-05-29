import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ChartContainer from './container';
import { usePopulationType } from './hooks';
import ChartTypeSelectPresentational from './presenter';

// モックの設定
jest.mock('./hooks', () => ({
  usePopulationType: jest.fn(),
}));

jest.mock('./presenter', () => ({
  __esModule: true,
  default: jest.fn(() => null),
}));

describe('ChartContainer', () => {
  const mockUsePopulationType = usePopulationType as jest.Mock;
  const mockChartTypeSelectPresentational =
    ChartTypeSelectPresentational as unknown as jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should pass props to ChartTypeSelectPresentational', () => {
    const mockSelectedTypes = ['総人口', '年少人口'];
    const mockHandleToggleType = jest.fn();
    const mockIsChecked = jest
      .fn()
      .mockImplementation((type) => mockSelectedTypes.includes(type));

    mockUsePopulationType.mockReturnValue({
      selectedTypes: mockSelectedTypes,
      handleToggleType: mockHandleToggleType,
      isChecked: mockIsChecked,
    });

    render(<ChartContainer className="test-class" />);

    expect(mockChartTypeSelectPresentational).toHaveBeenCalledWith(
      expect.objectContaining({
        className: 'test-class',
        checked: mockIsChecked,
        onChange: mockHandleToggleType,
        selectedType: mockSelectedTypes,
      }),
      {},
    );
  });

  test('should call handleToggleType when a type is toggled', () => {
    const mockSelectedTypes = ['総人口', '年少人口'];
    const mockHandleToggleType = jest.fn();
    const mockIsChecked = jest
      .fn()
      .mockImplementation((type) => mockSelectedTypes.includes(type));

    mockUsePopulationType.mockReturnValue({
      selectedTypes: mockSelectedTypes,
      handleToggleType: mockHandleToggleType,
      isChecked: mockIsChecked,
    });

    mockChartTypeSelectPresentational.mockImplementation(({ onChange }) => (
      <button onClick={() => onChange('総人口')}>Toggle 総人口</button>
    ));

    render(<ChartContainer className="test-class" />);

    fireEvent.click(screen.getByText('Toggle 総人口'));

    expect(mockHandleToggleType).toHaveBeenCalledWith('総人口');
  });
});
