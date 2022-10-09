import { render, screen,fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />)
  const colorbutton = screen.getByRole('button', { name: 'Change to blue' });
  
  expect(colorbutton).toHaveStyle({ backgroundColor: 'red' })

  fireEvent.click(colorbutton)
  expect(colorbutton).toHaveStyle({ backgroundColor: 'blue' })
  expect(colorbutton.textContent).toBe('Change to red')


});

