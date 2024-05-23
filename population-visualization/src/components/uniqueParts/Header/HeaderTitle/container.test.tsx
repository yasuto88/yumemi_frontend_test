import { render } from '@testing-library/react';
import HeaderTitleContainer from './container';

describe('HeaderTitleContainer', () => {
  it('renders the HeaderTitlePresentational with the correct title', () => {
    const { getByText } = render(<HeaderTitleContainer />);
    
    // タイトルが正しくレンダリングされているか確認
    expect(getByText('都道府県別の総人口推移グラフ')).toBeInTheDocument();
  });
});
