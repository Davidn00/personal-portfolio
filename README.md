# Personal Portfolio

Professional portfolio website developed by Angel David Núñez Paredes.

## Overview

A modern, responsive and accessible personal portfolio
showcasing software engineering, biomedical instrumentation,
technical projects, academic background and research.

The application is designed for international recruiters,
engineering teams and technology companies.

## Tech Stack

### Frontend

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Lucide React
- React Router

### Internationalization

- i18next
- react-i18next

### Code Quality

- Oxlint
- Prettier
- TypeScript

## Quality Assurance

The project includes an automated testing
and quality assurance infrastructure.

### Testing

- Vitest for unit tests.
- React Testing Library for component tests.
- Playwright for end-to-end testing.
- axe-core for accessibility validation.
- Lighthouse CI for performance auditing.

### Quality Checks

Run static analysis:

```bash
npm run lint
```

Check formatting:

```bash
npm run format:check
```

TypeScript validation:

```bash
npm run typecheck
```

Run unit tests:

```bash
npm run test:run
```

Run tests with coverage:

```bash
npm run test:coverage
```

Run end-to-end tests:

```bash
npm run test:e2e
```

Run Chromium tests only:

```bash
npm run test:e2e:chromium
```

Run accessibility tests:

```bash
npm run test:a11y
```

Generate production build:

```bash
npm run build
```

Run Lighthouse:

```bash
npm run lighthouse
```

### QA Documentation

Detailed QA reports are available in:

```text
docs/qa/
├── QA_REPORT.md
├── RESPONSIVE_MATRIX.md
└── ACCESSIBILITY_REPORT.md
```

### Browser Compatibility

Automated testing includes:

- Chromium
- Firefox
- WebKit
- Mobile Chromium
- Mobile WebKit

Actual device validation remains part
of the manual QA process.

### Testing

- Vitest
- React Testing Library
- jsdom

### Planned Infrastructure

- Amazon S3
- Amazon CloudFront
- GitHub Actions
- AWS OIDC

## Features

- Responsive professional portfolio.
- React 19 + TypeScript architecture.
- Spanish and English internationalization with i18next.
- Persistent language selection.
- Light, Dark and System themes.
- Persistent theme preferences.
- System theme detection through prefers-color-scheme.
- Flash-free initial theme application.
- Dynamic project category filtering.
- Individual project detail routes.
- Bilingual project descriptions.
- Spanish and English CV downloads.
- Dynamic SEO metadata.
- Open Graph and Twitter Cards.
- Canonical URLs.
- Sitemap and robots.txt.
- Accessible keyboard navigation.
- Reduced-motion support.
- Professional profile and experience presentation.
- Academic background and research publications.
- Automated testing with Vitest and React Testing Library.
- Code quality with Oxlint and Prettier.

## Internationalization

The portfolio supports:

- Spanish (es)
- English (en)

Language preferences are persisted using localStorage.

Translations are managed through:

src/i18n/locales/

## Theme System

Available themes:

- Light
- Dark
- System

The selected preference is persisted locally.

System mode automatically follows the operating system
color scheme.

## SEO

SEO metadata is dynamically managed for the homepage
and individual project pages.

Public SEO resources:

- /robots.txt
- /sitemap.xml

Configure VITE_SITE_URL before production deployment.

## Featured Projects

### MedLab Platform

Biomedical laboratory management platform.

Technologies:

- Python
- FastAPI
- PostgreSQL
- SQLAlchemy
- Celery
- Docker

Repository:
https://github.com/Davidn00/medlab-platform

### InstrumentHub

Biomedical instrument acquisition and data processing platform.

Technologies:

- Python
- FastAPI
- React
- TypeScript
- TimescaleDB
- SciPy
- WebSockets

### Digital Thermometer

Embedded temperature acquisition system.

Technologies:

- C
- PIC18F4550
- ADC
- I2C

Repository:
https://github.com/Davidn00/digital_thermometer

### FBG Sensor Research

Research on fiber Bragg gratings and optical fiber instrumentation.

## Project Structure

```text
src/
├── app/
│   ├── router.tsx
│   └── providers/
├── components/
│   ├── common/
│   ├── layout/
│   └── projects/
├── sections/
│   ├── Hero/
│   ├── About/
│   ├── Skills/
│   ├── Projects/
│   ├── Education/
│   ├── Experience/
│   ├── Research/
│   └── Contact/
├── pages/
├── data/
├── hooks/
├── i18n/
├── types/
├── styles/
└── test/

public/
├── documents/
└── images/
```
