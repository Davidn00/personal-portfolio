import type { Project } from '../types/portfolio';

export const projects: Project[] = [
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
