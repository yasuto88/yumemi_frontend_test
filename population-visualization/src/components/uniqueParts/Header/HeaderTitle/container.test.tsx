import { render, screen } from '@testing-library/react';
import HeaderTitleContainer from './container';

describe('HeaderTitleContainer', () => {
  it('renders the HeaderTitlePresentational with the correct title', () => {
    render(<HeaderTitleContainer />);

    // タイトルが正しくレンダリングされているか確認
    expect(
      screen.getByText('都道府県別の総人口推移グラフ'),
    ).toBeInTheDocument();
  });
});
