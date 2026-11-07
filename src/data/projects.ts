import type { Project } from '../types/portfolio';

export const projects: Project[] = [
  {
    id: 'workflow-saas',
    slug: 'workflow-saas',
    title: 'WorkFlow SaaS',
    shortTitle: 'WorkFlow',

    category: ['backend', 'frontend', 'saas'],

    status: 'in-progress',

    description:
      'A multi-tenant SaaS platform for business operations, combining lightweight CRM, task management and configurable approval workflows with secure organization-level access control.',

    overview:
      'WorkFlow SaaS is a business management platform designed to help small companies centralize customer relationships, team collaboration, task assignments and approval processes. It follows a modular monolith architecture with a Python/FastAPI backend, PostgreSQL database, asynchronous workers and a React-based frontend.',

    problem:
      'Small businesses often manage customers, employees, tasks and approval processes across disconnected tools. This creates operational fragmentation, limited traceability, inconsistent workflows and security challenges when multiple organizations share the same platform.',

    solution:
      'A multi-tenant SaaS application that centralizes business operations through a modular REST API and an integrated web interface. The platform is designed around organization-level data isolation, granular permissions, explicit business rules, versioned approval workflows and asynchronous processing.',

    features: [
      'Multi-tenant architecture with organization-level data isolation.',
      'User authentication and secure session management.',
      'Organization management, memberships and invitations.',
      'Role-based access control (RBAC) and granular permissions.',
      'CRM module for customers, contacts and sales opportunities.',
      'Task management with priorities, assignments and deadlines.',
      'Configurable and versioned business workflows.',
      'Approval management with sequential decision processes.',
      'Transactional operations and concurrency control.',
      'Audit logging and operational traceability.',
      'Asynchronous notifications and background processing.',
      'CSV exports and scheduled tasks.',
      'Business dashboard with operational metrics.',
      'REST API with OpenAPI documentation.',
      'Automated testing and CI/CD pipelines.',
      'Docker-based development and AWS deployment strategy.',
    ],

    architecture:
      'Modular Monolith: React + TypeScript frontend → HTTPS / REST → FastAPI API v1 → Authentication → Authorization / Tenant Context → Application Services → SQLAlchemy → PostgreSQL. Celery workers use Redis for asynchronous jobs, notifications, exports and scheduled tasks.',

    technologies: [
      'Python 3.12',
      'FastAPI',
      'PostgreSQL',
      'SQLAlchemy 2.x',
      'Alembic',
      'Pydantic v2',
      'JWT',
      'OAuth 2.0 / OIDC',
      'RBAC',
      'Celery',
      'Redis',
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'shadcn/ui',
      'Docker',
      'Docker Compose',
      'Pytest',
      'HTTPX',
      'Vitest',
      'React Testing Library',
      'Ruff',
      'mypy',
      'GitHub Actions',
      'AWS',
      'Terraform',
      'OpenTelemetry',
    ],

    highlights: [
      'Modular monolith architecture.',
      'Multi-tenant data isolation.',
      'Granular authorization and RBAC.',
      'Business-oriented domain modeling.',
      'Versioned workflows and approval engine.',
      'Transactional integrity and concurrency control.',
      'Asynchronous processing with Celery and Redis.',
      'Automated testing and security validation.',
      'Containerization with Docker.',
      'CI/CD and cloud deployment with AWS.',
    ],

    repository: 'https://github.com/Davidn00/workflow-saas',

    featured: true,
  },
  {
    id: 'medlab',
    slug: 'medlab-platform',
    title: 'MedLab Platform',
    shortTitle: 'MedLab',

    category: ['backend', 'instrumentation'],

    status: 'completed',

    description:
      'A LIMS-inspired platform for biomedical laboratories, covering samples, tests, equipment, reporting and operational workflows.',

    overview:
      'MedLab Platform is a biomedical laboratory management system designed to organize laboratory operations, manage samples and tests, monitor biomedical equipment and generate technical reports.',

    problem:
      'Biomedical laboratories require reliable workflows for tracking samples, laboratory tests, equipment and results. Managing these processes independently can make traceability and operational control difficult.',

    solution:
      'A modular backend platform that centralizes laboratory entities and operational workflows through a REST API.',

    features: [
      'Patient and sample management.',
      'Laboratory test and result management.',
      'Biomedical equipment lifecycle management.',
      'Equipment calibration and maintenance.',
      'Role-based access control.',
      'JWT authentication.',
      'Audit logging.',
      'PDF and data export reports.',
      'Background processing with Celery.',
      'Automated testing and CI/CD.',
    ],

    architecture:
      'Router → Service → Repository → SQLAlchemy → PostgreSQL. Background operations are processed through Celery workers and Redis-compatible infrastructure.',

    technologies: [
      'Python',
      'FastAPI',
      'PostgreSQL',
      'SQLAlchemy',
      'Alembic',
      'Pydantic',
      'Celery',
      'Redis',
      'Docker',
      'Pytest',
      'GitHub Actions',
    ],

    highlights: [
      'Modular layered architecture.',
      'Authentication and RBAC.',
      'Database migrations.',
      'Background processing.',
      'Automated tests.',
      'Containerized deployment.',
    ],

    repository: 'https://github.com/Davidn00/medlab-platform',

    featured: true,
  },

  {
    id: 'instrumenthub',
    slug: 'instrumenthub',
    title: 'InstrumentHub',
    shortTitle: 'InstrumentHub',

    category: ['backend', 'instrumentation'],

    status: 'completed',

    description:
      'A platform for acquisition, processing, storage and real-time visualization of biomedical instrument and sensor data.',

    overview:
      'InstrumentHub connects instrument communication, data acquisition, signal processing and real-time monitoring in a modular engineering platform.',

    problem:
      'Biomedical instrumentation requires reliable acquisition pipelines, signal analysis, data persistence and visualization of measurements.',

    solution:
      'A platform integrating acquisition services, processing modules, time-series storage and a web dashboard.',

    features: [
      'Sensor and instrument simulation.',
      'Data acquisition and buffering.',
      'Signal processing and FFT analysis.',
      'Anomaly detection.',
      'FBG sensor analysis.',
      'TimescaleDB time-series storage.',
      'REST API.',
      'WebSocket real-time communication.',
      'Interactive monitoring dashboard.',
    ],

    architecture:
      'Instrument → Acquisition Manager → Measurement and Signal Processing → Time-Series Storage → REST API / WebSocket → React Dashboard.',

    technologies: [
      'Python',
      'FastAPI',
      'React',
      'TypeScript',
      'PostgreSQL',
      'TimescaleDB',
      'WebSockets',
      'NumPy',
      'SciPy',
      'Docker',
    ],

    highlights: [
      'Modular instrument abstraction.',
      'Real-time acquisition.',
      'Signal processing.',
      'Time-series storage.',
      'FBG analysis.',
      'Interactive visualization.',
    ],

    repository: 'https://github.com/Davidn00',

    featured: true,
  },

  {
    id: 'digital-thermometer',
    slug: 'digital-thermometer',
    title: 'Digital Thermometer',
    shortTitle: 'Digital Thermometer',

    category: ['embedded', 'instrumentation'],

    status: 'prototype',

    description:
      'An embedded temperature acquisition and display system built around a microcontroller and peripheral interfaces.',

    overview:
      'An embedded engineering project focused on acquiring temperature measurements and displaying the resulting values.',

    problem:
      'Temperature monitoring requires the integration of sensor acquisition, microcontroller processing and user-readable output.',

    solution:
      'An embedded implementation using a PIC microcontroller and peripheral communication interfaces.',

    features: [
      'Temperature acquisition.',
      'ADC-based measurement.',
      'Microcontroller processing.',
      'Peripheral communication.',
      'Digital measurement visualization.',
    ],

    architecture: 'Sensor → ADC → PIC18F4550 → Processing → Display Interface.',

    technologies: [
      'C',
      'PIC18F4550',
      'ADC',
      'I²C',
      'Proteus',
      'Embedded Systems',
    ],

    highlights: [
      'Microcontroller programming.',
      'Sensor acquisition.',
      'Peripheral integration.',
      'Embedded system design.',
    ],

    repository: 'https://github.com/Davidn00/digital_thermometer',

    featured: true,
  },

  {
    id: 'fbg-research',
    slug: 'fbg-sensor-research',

    title: 'FBG Sensor Research',
    shortTitle: 'FBG Sensors',

    category: ['research', 'instrumentation'],

    status: 'research',

    description:
      'Research on UV-induced fiber Bragg gratings, experimental characterization and temperature–strain decoupling.',

    overview:
      'Research focused on optical fiber sensors based on fiber Bragg gratings and their characterization for measurement applications.',

    problem:
      'Temperature and mechanical strain can influence the wavelength response of FBG sensors, requiring appropriate characterization and decoupling methodologies.',

    solution:
      'An experimental and analytical research approach involving optical sensing, characterization and signal analysis.',

    features: [
      'FBG sensor characterization.',
      'Optical response analysis.',
      'Temperature and strain studies.',
      'Experimental data processing.',
      'Signal analysis.',
    ],

    architecture:
      'Optical Sensor → Measurement Instrumentation → Data Acquisition → Signal Processing → Experimental Analysis.',

    technologies: [
      'Fiber Bragg Gratings',
      'Optical Fiber Sensors',
      'Signal Processing',
      'Instrumentation',
      'Experimental Analysis',
    ],

    highlights: [
      'Optical fiber instrumentation.',
      'Experimental characterization.',
      'Temperature–strain decoupling.',
    ],

    featured: true,
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
