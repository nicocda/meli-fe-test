import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Main Page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Main Page/i);
  expect(linkElement).toBeInTheDocument();
});
