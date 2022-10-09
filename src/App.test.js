import { render, screen } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />)
  const colorbutton = screen.getByRole('button', { name: 'Change to blue' });
  expect(colorbutton).toHaveStyle({ backgroundColor: 'red' })
});

