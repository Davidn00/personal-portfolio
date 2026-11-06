export interface ExperienceItem {
  id: string;
  position: string;
  organization: string;
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
}

export const experience: ExperienceItem[] = [
  {
    id: 'icat-unam',

    position: 'Backend Developer – Automation & Data Applications',

    organization: 'Institute of Applied Sciences and Technology (ICAT) – UNAM',

    period: 'August 2025 – Present',

    location: 'Mexico City, Mexico',

    description:
      'Development of software solutions for engineering applications, technical environments and research-oriented instrumentation systems.',

    responsibilities: [
      'Develop software solutions using Python, C and C# for engineering applications and technical environments.',

      'Implement data processing and analysis workflows, task automation and information management solutions.',

      'Apply object-oriented programming, debugging, testing, validation and technical documentation practices.',

      'Collaborate on research and instrumentation projects with multidisciplinary engineering teams.',
    ],
  },

  {
    id: 'cie',

    position: 'Biomedical Specialist – Medical Diagnostic Equipment Technician',

    organization: 'Immunoassay Center (CIE)',

    period: 'June 2023 – August 2024',

    location: 'Cuba',

    description:
      'Technical development, programming and validation activities involving electronic systems and medical diagnostic equipment.',

    responsibilities: [
      'Program and test electronic systems used in medical diagnostic equipment.',

      'Develop analysis and validation tools, including partial automation of measurement processes and technical documentation.',

      'Participate in research and development (R&D) projects applying engineering and programming knowledge.',
    ],
  },

  {
    id: 'cneuro',

    position: 'Biomedical Engineer – Scientific Reserve',

    organization: 'Cuban Neuroscience Center (CNEURO)',

    period: 'February 2023 – May 2023',

    location: 'Cuba',

    description:
      'Engineering and research activities focused on biomedical devices, embedded systems and laboratory automation.',

    responsibilities: [
      'Program PIC and STM32 microcontrollers in C for the development and validation of biomedical solutions.',

      'Automate laboratory processes, analyze experimental data and prepare technical documentation.',

      'Participate in the development and validation of biomedical devices and technological solutions.',

      'Collaborate with multidisciplinary engineering and research teams.',
    ],
  },
];
