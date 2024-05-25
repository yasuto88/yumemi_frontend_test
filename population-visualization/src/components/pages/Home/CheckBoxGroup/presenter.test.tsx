import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CheckBoxGroupPresentational, { CheckBoxOption } from './presenter';

describe('CheckBoxGroupPresentational', () => {
  const mockOptions: CheckBoxOption[] = [
    { label: { prefCode: 1, prefName: 'Tokyo' }, checked: true },
    { label: { prefCode: 2, prefName: 'Osaka' }, checked: false },
    { label: { prefCode: 3, prefName: 'Fukuoka' }, checked: true },
  ];

  const mockOnChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should render checkbox options', () => {
    const { getAllByRole } = render(
      <CheckBoxGroupPresentational
        options={mockOptions}
        onChange={mockOnChange}
        className="test-class"
      />,
    );
    const checkboxes = getAllByRole('checkbox');
    expect(checkboxes).toHaveLength(mockOptions.length);
    checkboxes.forEach((checkbox, index) => {
      const option = mockOptions[index];
      const checkboxElement = checkbox as HTMLInputElement;
      expect(checkboxElement).toBeInTheDocument();
      expect(checkboxElement.checked).toBe(option.checked);
      expect((checkbox.nextSibling as HTMLElement).textContent).toBe(
        option.label.prefName,
      );
    });
  });

  test('should call onChange handler when checkbox is clicked', () => {
    const { getAllByRole } = render(
      <CheckBoxGroupPresentational
        options={mockOptions}
        onChange={mockOnChange}
      />,
    );
    const checkboxes = getAllByRole('checkbox');
    fireEvent.click(checkboxes[0]);
    expect(mockOnChange).toHaveBeenCalledWith(
      mockOptions[0].label.prefName,
      false,
    );
    fireEvent.click(checkboxes[1]);
    expect(mockOnChange).toHaveBeenCalledWith(
      mockOptions[1].label.prefName,
      true,
    );
  });

  test('should render with custom className', () => {
    const { container } = render(
      <CheckBoxGroupPresentational
        options={mockOptions}
        onChange={mockOnChange}
        className="custom-class"
      />,
    );
    const groupContainer = container.firstChild;
    expect(groupContainer).toHaveClass('checkbox-group', 'custom-class');
  });
});
