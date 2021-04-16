import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Navbar from '../Navbar';

afterEach(() => {
  cleanup();
});

test('should render Navbar component', () => {
  render(<BrowserRouter><Navbar /></BrowserRouter>);
  const navbarElement = screen.getByTestId('Navbar');
  expect(navbarElement).toBeInTheDocument();
});
