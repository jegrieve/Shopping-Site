import { render, screen, cleanup } from '@testing-library/react';
import HomePage from '../HomePage';

afterEach(() => {
  cleanup();
});

test('should render HomePage component', () => {
  render(<HomePage />);
  const homepageElement = screen.getByTestId('HomePage');
  expect(homepageElement).toBeInTheDocument();
});
