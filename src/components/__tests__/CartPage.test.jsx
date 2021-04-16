import { render, screen, cleanup } from '@testing-library/react';
import CartPage from '../CartPage';

afterEach(() => {
  cleanup();
});

test('should render CartPage component', () => {
  render(<CartPage />);
  const cartPageElement = screen.getByTestId('CartPage');
  expect(cartPageElement).toBeInTheDocument();
});
