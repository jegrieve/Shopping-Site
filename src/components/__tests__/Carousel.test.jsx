import { render, screen, cleanup } from '@testing-library/react';
import Carousel from '../Carousel';

afterEach(() => {
  cleanup();
});

test('should render Carousel component', () => {
  render(<Carousel />);
  const carouselElement = screen.getByTestId('Carousel');
  expect(carouselElement).toBeInTheDocument();
});
