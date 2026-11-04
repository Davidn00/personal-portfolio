import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App component', () => {
  it('should render the portfolio application', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', {
        name: /personal portfolio/i,
      }),
    ).toBeInTheDocument();
  });
});
