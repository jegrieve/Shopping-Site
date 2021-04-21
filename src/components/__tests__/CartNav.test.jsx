import { render, screen, cleanup } from '@testing-library/react';
import CartNav from '../CartNav';

afterEach(() => {
  cleanup();
});

test('should render CartNav component', () => {
  render(<CartNav />);
  const cartNavElement = screen.getByTestId('CartNav');
  expect(cartNavElement).toBeInTheDocument();
});
