export interface ResearchItem {
  id: string;
  title: string;
  description: string;
  topics: string[];
}

export interface PublicationItem {
  id: string;
  title: string;
  event: string;
  date: string;
  doi: string;
  doiUrl: string;
  publicationUrl: string;
}

export const research: ResearchItem[] = [
  {
    id: 'fbg-optical-sensing',

    title: 'Fiber Bragg Grating Sensors and Optical Instrumentation',

    description:
      'Research focused on fiber optic sensing technologies, particularly Fiber Bragg Grating (FBG) sensors, their experimental characterization and their application in measurement systems. The research explores UV-induced gratings, sensor response characterization and temperature-strain decoupling.',

    topics: [
      'Fiber Bragg Gratings (FBG)',
      'Optical Fiber Sensors',
      'UV-Induced Gratings',
      'Experimental Characterization',
      'Temperature-Strain Decoupling',
      'Instrumentation',
      'Signal Analysis',
    ],
  },
];

export const publications: PublicationItem[] = [
  {
    id: 'state-estimation-heat-conduction',

    title:
      'State-estimation as a virtual sensing scheme in a heat conduction experiment',

    event: 'Latin American Congress on Automatic Control',

    date: 'October 17, 2025',

    doi: '10.58571/CNCA.AMCA.2025.051',

    doiUrl: 'https://doi.org/10.58571/CNCA.AMCA.2025.051',

    publicationUrl:
      'https://www.researchgate.net/publication/399384897_State-Estimation_as_a_Virtual_Sensing_Scheme_in_a_Heat_Conduction_Experiment',
  },
];
