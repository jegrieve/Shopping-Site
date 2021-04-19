import { render, screen, cleanup } from '@testing-library/react';
import SideNav from '../SideNav';

afterEach(() => {
  cleanup();
});

test('should render the SideNav component', () => {
  render(<SideNav />);
  const sideNavElement = screen.getByTestId('SideNav');
  expect(sideNavElement).toBeInTheDocument();
});
