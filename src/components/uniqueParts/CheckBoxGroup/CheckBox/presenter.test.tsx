import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CheckBoxPresentational from './presenter';
import { SelectedPrefecture } from '../../../../reducks/selectedPrefecture';

describe('CheckBoxPresentational', () => {
  const label: SelectedPrefecture = { prefCode: 1, prefName: 'Tokyo' };

  const setup = (checked = false) => {
    const onChange = jest.fn();
    const { container } = render(
      <CheckBoxPresentational
        label={label}
        checked={checked}
        onChange={onChange}
        id="test-id"
      />,
    );
    return { onChange, container };
  };

  test('renders the checkbox with label', () => {
    setup();
    const checkbox = screen.getByRole('checkbox');
    const labelText = screen.getByText(label.prefName);

    expect(checkbox).toBeInTheDocument();
    expect(labelText).toBeInTheDocument();
  });

  test('checkbox is initially checked or unchecked', () => {
    const { onChange } = setup(true);
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;

    expect(checkbox).toBeChecked();

    fireEvent.click(checkbox);
    expect(onChange).toHaveBeenCalledWith(false);
  });

  test('calls onChange when checkbox is clicked', () => {
    const { onChange } = setup();
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;

    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);
    expect(onChange).toHaveBeenCalledWith(true);
  });
});
