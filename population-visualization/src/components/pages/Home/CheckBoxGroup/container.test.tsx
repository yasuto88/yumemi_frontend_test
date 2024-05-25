import React from 'react';
import { render, fireEvent } from '@testing-library/react';
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
    const { getByText } = render(<CheckBoxContainer />);
    expect(getByText('Loading...')).toBeInTheDocument();
  });

  test('should render error state', () => {
    mockUsePrefectures.mockReturnValue({
      prefectures: [],
      loading: false,
      error: 'Error occurred',
    });
    const { getByText } = render(<CheckBoxContainer />);
    expect(getByText('Error: Error occurred')).toBeInTheDocument();
  });

  test('should render checkbox options', () => {
    mockUsePrefectures.mockReturnValue({
      prefectures: mockPrefectures,
      loading: false,
      error: null,
    });
    const { getAllByRole } = render(<CheckBoxContainer />);
    const checkboxes = getAllByRole('checkbox');
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
    const { getAllByRole } = render(<CheckBoxContainer />);
    const checkboxes = getAllByRole('checkbox');

    // チェックボックスの id や name 属性を使ってラベルを特定する
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
