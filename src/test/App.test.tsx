import { describe, expect, it } from 'vitest';

import { render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { ThemeProvider } from '../app/providers/ThemeProvider';

import App from '../App';

describe('Personal Portfolio Application', () => {
  it('renders the main portfolio sections', () => {
    render(
      <ThemeProvider>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </ThemeProvider>,
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
      <ThemeProvider>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </ThemeProvider>,
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
      <ThemeProvider>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </ThemeProvider>,
    );

    expect(
      screen.getByRole('heading', {
        name: /let's build something meaningful together/i,
      }),
    ).toBeInTheDocument();

    const contactLinks = screen.getAllByRole('link', {
      name: /get in touch/i,
    });

    expect(
      contactLinks.some(
        (link) =>
          link.getAttribute('href') === 'mailto:angelnunez0008@gmail.com',
      ),
    ).toBe(true);
  });
});
it('renders all professional experiences', () => {
  render(
    <ThemeProvider>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </ThemeProvider>,
  );

  expect(
    screen.getByText(/Institute of Applied Sciences and Technology/i),
  ).toBeInTheDocument();

  expect(screen.getByText(/Immunoassay Center/i)).toBeInTheDocument();

  expect(screen.getByText(/Cuban Neuroscience Center/i)).toBeInTheDocument();
});

it('renders the scientific publication and DOI', () => {
  render(
    <ThemeProvider>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </ThemeProvider>,
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
