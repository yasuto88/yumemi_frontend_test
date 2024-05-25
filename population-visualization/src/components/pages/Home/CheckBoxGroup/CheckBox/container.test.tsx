import { render, screen, fireEvent } from '@testing-library/react';
import CheckBoxContainer from './container';
import { useSelectedPrefecture } from './hooks';
import { SelectedPrefecture } from '../../../../../reducks/selectedPrefecture/types';

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
      selectedPrefecture: label,
      handleCheckBoxChange: jest.fn(),
      isSelected: jest.fn().mockReturnValue(true),
    });

    render(
      <CheckBoxContainer
        className="test-class"
        label={label}
        checked={false}
        onChange={function (checked: boolean): void {
          throw new Error('Function not implemented.');
        }}
      />,
    );

    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    const labelText = screen.getByText(label.prefName);

    expect(checkbox).toBeInTheDocument();
    expect(checkbox.checked).toBe(true);
    expect(labelText).toBeInTheDocument();
    expect(labelText).toHaveClass('test-class');
  });

  test('calls handleCheckBoxChange when checkbox is clicked', () => {
    const label: SelectedPrefecture = { prefCode: 1, prefName: 'Tokyo' };
    const handleCheckBoxChange = jest.fn();
    mockUseSelectedPrefecture.mockReturnValue({
      selectedPrefecture: label,
      handleCheckBoxChange,
      isSelected: jest.fn().mockReturnValue(false),
    });

    render(
      <CheckBoxContainer
        className="test-class"
        label={label}
        checked={false}
        onChange={function (checked: boolean): void {
          throw new Error('Function not implemented.');
        }}
      />,
    );

    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    fireEvent.click(checkbox);

    expect(handleCheckBoxChange).toHaveBeenCalledWith(label, true);
  });
});
