import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  window.localStorage.clear();
  document.documentElement.lang = 'id';
});

test('renders language controls', () => {
  render(<App />);

  expect(screen.getByRole('button', { name: 'Bahasa Indonesia' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'English' })).toBeInTheDocument();
});

test('switches and persists the selected language', () => {
  render(<App />);

  fireEvent.click(screen.getByRole('button', { name: 'English' }));

  expect(document.documentElement.lang).toBe('en');
  expect(window.localStorage.getItem('language')).toBe('en');
  expect(screen.getByRole('button', { name: 'English' })).toHaveAttribute('aria-pressed', 'true');
});
