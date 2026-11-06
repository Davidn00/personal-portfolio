import { describe, expect, it } from 'vitest';

import { render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import App from '../App';

describe('Personal Portfolio Application', () => {
  it('renders the main portfolio sections', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole('heading', {
        name: /building software/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: /technical skills/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: /featured projects/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: /education/i,
      }),
    ).toBeInTheDocument();
  });

  it('renders all featured projects', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole('heading', {
        name: /medlab platform/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: /instrumenthub/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: /digital thermometer/i,
      }),
    ).toBeInTheDocument();
  });

  it('renders the contact section', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole('heading', {
        name: /let's build something meaningful together/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('link', {
        name: /contact me/i,
      }),
    ).toBeInTheDocument();
  });
});
it('renders all professional experiences', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );

  expect(
    screen.getByText(/Institute of Applied Sciences and Technology/i),
  ).toBeInTheDocument();

  expect(screen.getByText(/Immunoassay Center/i)).toBeInTheDocument();

  expect(screen.getByText(/Cuban Neuroscience Center/i)).toBeInTheDocument();
});

it('renders the scientific publication and DOI', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );

  expect(
    screen.getByRole('heading', {
      name: /^Publications$/i,
    }),
  ).toBeInTheDocument();

  expect(
    screen.getByText(
      /State-estimation as a virtual sensing scheme in a heat conduction experiment/i,
    ),
  ).toBeInTheDocument();

  expect(
    screen.getByRole('link', {
      name: /10.58571\/CNCA.AMCA.2025.051/i,
    }),
  ).toHaveAttribute('href', 'https://doi.org/10.58571/CNCA.AMCA.2025.051');
});
