import { render, screen } from '@testing-library/react';
import BoDChalkboard from './BoDChalkboard';

test('renders BoDChalkboard component without crashing', () => {
  render(<BoDChalkboard />);
  const chalkboardElement = screen.getByTestId('chalkboard');
  expect(chalkboardElement).toBeInTheDocument();
});
