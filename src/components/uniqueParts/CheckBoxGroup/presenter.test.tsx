import React from 'react';
import { render, screen } from '@testing-library/react';
import CheckBoxGroupPresentational, { CheckBoxOption } from './presenter';
import { SelectedPrefecture } from '../../../reducks/selectedPrefecture';

jest.mock('./CheckBox', () => ({
  CheckBox: ({ label }: { label: SelectedPrefecture }) => (
    <div>{label.prefName}</div>
  ),
}));

describe('CheckBoxGroupPresentational', () => {
  const mockOptions: CheckBoxOption[] = [
    { label: { prefCode: 1, prefName: 'Tokyo' }, checked: true },
    { label: { prefCode: 2, prefName: 'Osaka' }, checked: false },
    { label: { prefCode: 3, prefName: 'Fukuoka' }, checked: true },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should render checkbox options', () => {
    render(<CheckBoxGroupPresentational options={mockOptions} id="test-id" />);

    mockOptions.forEach((option) => {
      const labelElement = screen.getByText(option.label.prefName);
      expect(labelElement).toBeInTheDocument();
    });
  });

  test('should render with custom id', () => {
    const { container } = render(
      <CheckBoxGroupPresentational options={mockOptions} id="custom-id" />,
    );

    const groupContainer = container.firstChild;
    expect(groupContainer).toHaveAttribute('id', 'checkbox-group custom-id');
  });
});
