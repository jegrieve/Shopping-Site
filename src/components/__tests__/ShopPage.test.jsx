import { render, screen, cleanup } from '@testing-library/react';
import ShopPage from '../ShopPage';

afterEach(() => {
  cleanup();
});

test('should render the ShopPage component', () => {
  render(<ShopPage />);
  const shopPageElement = screen.getByTestId('ShopPage');
  expect(shopPageElement).toBeInTheDocument();
});
