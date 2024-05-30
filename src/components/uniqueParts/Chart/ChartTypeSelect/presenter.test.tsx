import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ChartTypeSelectPresentational from './presenter';
import { PopulationType } from '../../../../reducks/populationType';

describe('ChartTypeSelectPresentational', () => {
  const selectedType: PopulationType[] = ['総人口'];
  const mockOnChange = jest.fn();
  const mockChecked = (type: PopulationType) => selectedType.includes(type);

  const setup = (id?: string) => {
    render(
      <ChartTypeSelectPresentational
        id={id}
        onChange={mockOnChange}
        checked={mockChecked}
        selectedType={selectedType}
      />,
    );
  };

  test('renders all checkboxes', () => {
    setup();
    const types: PopulationType[] = [
      '総人口',
      '年少人口',
      '生産年齢人口',
      '老年人口',
    ];

    types.forEach((type) => {
      const checkbox = screen.getByLabelText(type);
      expect(checkbox).toBeInTheDocument();
    });
  });

  test('checkboxes are initially checked or unchecked', () => {
    setup();
    const generalPopulationCheckbox = screen.getByLabelText(
      '総人口',
    ) as HTMLInputElement;
    const youngPopulationCheckbox = screen.getByLabelText(
      '年少人口',
    ) as HTMLInputElement;

    expect(generalPopulationCheckbox).toBeChecked();
    expect(youngPopulationCheckbox).not.toBeChecked();
  });

  test('calls onChange when checkbox is clicked', () => {
    setup();
    const generalPopulationCheckbox = screen.getByLabelText(
      '総人口',
    ) as HTMLInputElement;

    fireEvent.click(generalPopulationCheckbox);
    expect(mockOnChange).toHaveBeenCalledWith('総人口');
  });
});
