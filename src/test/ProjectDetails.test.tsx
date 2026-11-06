import { describe, expect, it } from 'vitest';

import { render, screen } from '@testing-library/react';

import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { ProjectDetailsPage } from '../pages/ProjectDetailsPage';

describe('ProjectDetailsPage', () => {
  it('renders the requested project details', () => {
    render(
      <MemoryRouter initialEntries={['/projects/medlab-platform']}>
        <Routes>
          <Route path="/projects/:slug" element={<ProjectDetailsPage />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(
      screen.getByRole('heading', {
        name: /medlab platform/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: /project overview/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: /key features/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: /technologies/i,
      }),
    ).toBeInTheDocument();
  });

  it('renders a repository link', () => {
    render(
      <MemoryRouter initialEntries={['/projects/medlab-platform']}>
        <Routes>
          <Route path="/projects/:slug" element={<ProjectDetailsPage />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(
      screen.getByRole('link', {
        name: /repository/i,
      }),
    ).toHaveAttribute('href', 'https://github.com/Davidn00/medlab-platform');
  });
});
