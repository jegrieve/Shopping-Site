import { render, screen, cleanup } from '@testing-library/react';
import Navbar from '../Navbar';

afterEach(() => {
  cleanup();
});

test('should render Navbar component', () => {
  render(<Navbar />);
  const homepageElement = screen.getByTestId('Navbar');
  expect(homepageElement).toBeInTheDocument();
});
