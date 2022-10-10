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


test("initial conditions",()=>{
  render(<App/>)
const colorbutton=screen.getByRole("button",{name:"Change to blue"})
expect(colorbutton).toBeEnabled()
const checkbox=screen.getByRole("checkbox")
expect(checkbox).not.toBeChecked()
})


test('checkbox disabled on fireEvent click and enables on second click', () => {
  render(<App />)
  const colorbutton=screen.getByRole('button')
  const checkbox=screen.getByRole('checkbox')

  fireEvent.click(checkbox)
  expect(colorbutton).toBeDisabled()
  fireEvent.click(checkbox)

  expect(colorbutton).toBeEnabled()
})