import { render, screen, cleanup } from '@testing-library/react';
import DropDown from '../DropDown';

afterEach(() => {
  cleanup();
});

test('should render DropDown component', () => {
  render(<DropDown />);
  const dropDownElement = screen.getByTestId('DropDown');
  expect(dropDownElement).toBeInTheDocument();
});
