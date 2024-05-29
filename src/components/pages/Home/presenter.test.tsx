import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePresentational, { ContainerProps } from './presenter';
import { SideBar } from '../../uniqueParts/SideBar';
import { Header } from '../../uniqueParts/Header';
import { Chart } from '../../uniqueParts/Chart';
import { CheckBoxGroup } from '../../uniqueParts/CheckBoxGroup';
import { Modal } from '../../uiParts/Modal';

jest.mock('../../uniqueParts/SideBar', () => ({
  SideBar: () => <div data-testid="sidebar">Sidebar</div>,
}));

jest.mock('../../uniqueParts/Header', () => ({
  Header: () => <div data-testid="header">Header</div>,
}));

jest.mock('../../uniqueParts/Chart', () => ({
  Chart: () => <div data-testid="chart">Chart</div>,
}));

jest.mock('../../uniqueParts/CheckBoxGroup', () => ({
  CheckBoxGroup: () => <div data-testid="checkbox-group">CheckBoxGroup</div>,
}));

jest.mock('../../uiParts/Modal', () => ({
  Modal: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="modal">{children}</div>
  ),
}));

describe('HomePresentational', () => {
  const renderComponent = (props: Partial<ContainerProps> = {}) => {
    render(<HomePresentational {...props} />);
  };

  test('renders Sidebar when isPc is true', () => {
    renderComponent({ isPc: true });
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('does not render Sidebar when isPc is false', () => {
    renderComponent({ isPc: false });
    expect(screen.queryByTestId('sidebar')).not.toBeInTheDocument();
  });

  test('renders Header and Chart', () => {
    renderComponent();
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('chart')).toBeInTheDocument();
  });

  test('renders Modal with CheckBoxGroup when isTablet is true', () => {
    renderComponent({ isTablet: true });
    expect(screen.getByTestId('modal')).toBeInTheDocument();
    expect(screen.getByTestId('checkbox-group')).toBeInTheDocument();
  });

  test('renders Modal with CheckBoxGroup when isSp is true', () => {
    renderComponent({ isSp: true });
    expect(screen.getByTestId('modal')).toBeInTheDocument();
    expect(screen.getByTestId('checkbox-group')).toBeInTheDocument();
  });

  test('does not render Modal when isTablet and isSp are false', () => {
    renderComponent({ isTablet: false, isSp: false });
    expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
  });
});
