import { describe, expect, it, vi } from 'vitest';

import { render, screen, fireEvent } from '@testing-library/react';

import { I18nextProvider } from 'react-i18next';

import i18n from '../i18n';

import { ProjectFilter } from '../components/projects/ProjectFilter';

describe('ProjectFilter', () => {
  it('renders all category filters', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <ProjectFilter selected="all" onChange={vi.fn()} />
      </I18nextProvider>,
    );

    expect(screen.getByRole('button', { name: 'All' })).toBeInTheDocument();

    expect(screen.getByRole('button', { name: 'Backend' })).toBeInTheDocument();

    expect(
      screen.getByRole('button', { name: 'Instrumentation' }),
    ).toBeInTheDocument();
  });

  it('calls onChange with the selected category', () => {
    const onChange = vi.fn();

    render(
      <I18nextProvider i18n={i18n}>
        <ProjectFilter selected="all" onChange={onChange} />
      </I18nextProvider>,
    );

    fireEvent.click(screen.getByRole('button', { name: 'Backend' }));

    expect(onChange).toHaveBeenCalledWith('backend');
  });

  it('exposes the selected filter through aria-pressed', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <ProjectFilter selected="instrumentation" onChange={vi.fn()} />
      </I18nextProvider>,
    );

    expect(
      screen.getByRole('button', { name: 'Instrumentation' }),
    ).toHaveAttribute('aria-pressed', 'true');
  });
});
