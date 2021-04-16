import { render, screen, cleanup } from '@testing-library/react';
import Navbar from '../Navbar';

afterEach(() => {
  cleanup();
});

test('should render Navbar component', () => {
  render(<Navbar />);
  const navbarElement = screen.getByTestId('Navbar');
  expect(navbarElement).toBeInTheDocument();
});
