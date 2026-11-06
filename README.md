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

- Responsive portfolio layout.
- Modular React architecture.
- Reusable UI components.
- Professional profile presentation.
- Technical skills grouped by categories.
- Featured project cards.
- Individual project detail pages.
- Academic education timeline.
- Professional experience section.
- Research and instrumentation section.
- Contact information and social links.
- Spanish and English support (planned).
- Light, Dark and System themes (planned).
- Project category filtering (planned).

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
