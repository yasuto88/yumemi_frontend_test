import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CheckBoxContainer from './container';
import { usePrefectures } from './hooks';
import { Prefecture } from '../../../../reducks/prefectureList/types';

jest.mock('./hooks');

describe('CheckBoxContainer', () => {
  const mockPrefectures: Prefecture[] = [
    { prefCode: 1, prefName: 'Tokyo' },
    { prefCode: 2, prefName: 'Osaka' },
    { prefCode: 3, prefName: 'Fukuoka' },
  ];

  const mockUsePrefectures = usePrefectures as jest.MockedFunction<
    typeof usePrefectures
  >;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should render loading state', () => {
    mockUsePrefectures.mockReturnValue({
      prefectures: [],
      loading: true,
      error: null,
    });
    render(<CheckBoxContainer />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('should render error state', () => {
    mockUsePrefectures.mockReturnValue({
      prefectures: [],
      loading: false,
      error: 'Error occurred',
    });
    render(<CheckBoxContainer />);
    expect(screen.getByText('Error: Error occurred')).toBeInTheDocument();
  });

  test('should render checkbox options', () => {
    mockUsePrefectures.mockReturnValue({
      prefectures: mockPrefectures,
      loading: false,
      error: null,
    });
    render(<CheckBoxContainer />);
    const checkboxes = screen.getAllByRole('checkbox');
    expect(checkboxes).toHaveLength(mockPrefectures.length);
    checkboxes.forEach((checkbox, index) => {
      expect(checkbox).toBeInTheDocument();
      expect((checkbox.nextSibling as HTMLElement).textContent).toBe(
        mockPrefectures[index].prefName,
      );
    });
  });

  test('should update selected prefectures on checkbox change', () => {
    mockUsePrefectures.mockReturnValue({
      prefectures: mockPrefectures,
      loading: false,
      error: null,
    });
    render(<CheckBoxContainer />);
    const checkboxes = screen.getAllByRole('checkbox');

    // チェックボックスのラベルを特定する
    const tokyoCheckbox = checkboxes.find(
      (checkbox) =>
        (checkbox.nextSibling as HTMLElement).textContent === 'Tokyo',
    ) as HTMLInputElement;
    const osakaCheckbox = checkboxes.find(
      (checkbox) =>
        (checkbox.nextSibling as HTMLElement).textContent === 'Osaka',
    ) as HTMLInputElement;

    fireEvent.click(tokyoCheckbox);
    expect(tokyoCheckbox.checked).toBe(true);

    fireEvent.click(osakaCheckbox);
    expect(osakaCheckbox.checked).toBe(true);
  });
});
