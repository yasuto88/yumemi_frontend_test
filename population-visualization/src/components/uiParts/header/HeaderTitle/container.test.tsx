import { render, waitFor } from '@testing-library/react';
import HeaderTitleContainer from './container';
import { useTitle } from './hooks';

// モックのフックを作成
jest.mock('./hooks', () => ({
  useTitle: jest.fn(),
}));

describe('HeaderTitleContainer', () => {
  it('renders with initial title', () => {
    (useTitle as jest.Mock).mockReturnValue('初期タイトル');

    const { getByText } = render(<HeaderTitleContainer />);
    expect(getByText('初期タイトル')).toBeInTheDocument();
  });

  it('renders with fetched title', async () => {
    (useTitle as jest.Mock).mockReturnValue('取得したタイトル');

    const { getByText } = render(<HeaderTitleContainer />);

    // 非同期に取得されるタイトルを待つ
    await waitFor(() =>
      expect(getByText('取得したタイトル')).toBeInTheDocument(),
    );
  });
});
