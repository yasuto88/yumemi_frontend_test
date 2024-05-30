import React from 'react';
import { render, screen } from '@testing-library/react';
import SideBarPresentational from './presenter';
import { CheckBoxGroup } from '../CheckBoxGroup';

// モック設定
jest.mock('../CheckBoxGroup', () => ({
  __esModule: true,
  CheckBoxGroup: jest.fn(() => (
    <div data-testid="checkbox-group">CheckBoxGroup</div>
  )),
}));

describe('SideBarPresentational', () => {
  test('should render with given className', () => {
    const mockProps = { className: 'test-class' };

    render(<SideBarPresentational {...mockProps} />);

    const sidebarElement = screen.getByTestId('side-bar');
    expect(sidebarElement).toBeInTheDocument();
    expect(sidebarElement).toHaveClass('side-bar test-class');
  });

  test('should render title and CheckBoxGroup component', () => {
    render(<SideBarPresentational className="test-class" />);

    // タイトルが正しくレンダリングされているか確認
    expect(screen.getByText('都道府県')).toBeInTheDocument();

    // CheckBoxGroupコンポーネントが正しくレンダリングされているか確認
    expect(CheckBoxGroup).toHaveBeenCalled();
  });
});