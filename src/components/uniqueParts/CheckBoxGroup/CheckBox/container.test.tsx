import { render, screen, fireEvent } from '@testing-library/react';
import CheckBoxContainer from './container';
import { useSelectedPrefecture } from './hooks';
import { SelectedPrefecture } from '../../../../reducks/selectedPrefecture';

jest.mock('./hooks');

describe('CheckBoxContainer', () => {
  const mockUseSelectedPrefecture =
    useSelectedPrefecture as jest.MockedFunction<typeof useSelectedPrefecture>;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders the checkbox with the correct label and state', () => {
    const label: SelectedPrefecture = { prefCode: 1, prefName: 'Tokyo' };
    mockUseSelectedPrefecture.mockReturnValue({
      handleCheckBoxChange: jest.fn(),
      isSelected: jest.fn().mockReturnValue(true),
      selectedPrefecture: label,
    });

    render(<CheckBoxContainer id="test-id" label={label} />);

    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    const labelText = screen.getByText(label.prefName);

    expect(checkbox).toBeInTheDocument();
    expect(checkbox.checked).toBe(true);
    expect(labelText).toBeInTheDocument();
  });

  test('calls handleCheckBoxChange when checkbox is clicked', () => {
    const label: SelectedPrefecture = { prefCode: 1, prefName: 'Tokyo' };
    const handleCheckBoxChange = jest.fn();
    mockUseSelectedPrefecture.mockReturnValue({
      handleCheckBoxChange,
      isSelected: jest.fn().mockReturnValue(false),
      selectedPrefecture: label,
    });

    render(<CheckBoxContainer id="test-id" label={label} />);

    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    fireEvent.click(checkbox);

    expect(handleCheckBoxChange).toHaveBeenCalledWith(label, true);
  });
});
