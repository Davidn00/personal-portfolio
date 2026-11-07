import type { SkillGroup } from '../types/portfolio';

export const skillGroups: SkillGroup[] = [
  {
    id: 'backend',
    title: 'Backend Engineering',
    description: 'Backend systems, APIs and application architecture.',
    icon: 'server',
    technologies: ['Python', 'FastAPI', 'REST APIs', 'SQLAlchemy', 'Pydantic'],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    description:
      'Modern web applications, data visualization and user interfaces.',
    icon: 'monitor',
    technologies: [
      'TypeScript',
      'React',
      'Vite',
      'Tailwind CSS',
      'TanStack Query',
      'Plotly.js',
    ],
  },
  {
    id: 'data',
    title: 'Data & Persistence',
    description: 'Database management, data persistence and caching systems.',
    icon: 'database',
    technologies: ['PostgreSQL', 'SQL', 'Alembic', 'Redis', 'Valkey'],
  },
  {
    id: 'processing',
    title: 'Async processing',
    description:
      'Asynchronous tasks, event-driven communication and background processing.',
    icon: 'workflow',
    technologies: ['Celery', 'Celery Beat', 'WebSockets', 'asyncio'],
  },
  {
    id: 'quality',
    title: 'Quality & Delivery',
    description:
      'Software testing, code quality, security analysis and continuous integration.',
    icon: 'shield-check',
    technologies: [
      'Pytest',
      'Ruff',
      'Bandit',
      'Mypy',
      'Docker',
      'GitHub Actions',
      'CI/CD',
    ],
  },
  {
    id: 'scientific',
    title: 'Scientific Computing & Data Analysis',
    description:
      'Scientific programming, numerical computation and signal analysis.',
    icon: 'chart-no-axes-combined',
    technologies: [
      'NumPy',
      'SciPy',
      'Pandas',
      'Signal Processing',
      'FFT',
      'Spectral Analysis',
    ],
  },
  {
    id: 'embedded',
    title: 'Embedded Systems & Instrumentation',
    description:
      'Embedded development, microcontrollers and biomedical instrumentation.',
    icon: 'cpu',
    technologies: [
      'C',
      'C#',
      'Embedded Systems',
      'Microcontrollers STM32, PIC, Arduino',
      'Raspberry Pi',
      'Biomedical Instrumentation',
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & Deployment',
    description:
      'Cloud infrastructure, database hosting and application deployment.',
    icon: 'cloud',
    technologies: ['Render', 'Neon', 'AWS (EC2, S3, RDS, Lambda)'],
  },
  {
    id: 'practices',
    title: 'Software Engineering',
    description: 'Engineering practices and software quality.',
    icon: 'layers',
    technologies: [
      'Clean Architecture',
      'Automated Testing',
      'API Design',
      'Documentation',
      'Modular Architecture',
    ],
  },
];
