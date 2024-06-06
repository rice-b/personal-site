/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 * @property {string|undefined} summary1 - html/markdown summary of the position
 * @property {string[]} highlights1 - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Learning Technologies UK 2024',
    position: 'Session Chairperson',
    url: 'https://www.learningtechnologies.co.uk/lt24-conference-programme/t3s6-',
    startDate: '2024-03-01',
    endDate: '2024-04-18',
    summary: 'Chairperson for Change Management session.',
    highlights: [
      'Chairing the session and leading the Q&A so the audience can understand change management&apos;s role in successful learning initiatives.',
      'Managed the session project plan, deadlines, content branding, planned speaker/ audience engagement and interaction.',
    ],
  },
  {
    name: 'Boston Consulting Group',
    position: 'Global Learning Innovation Senior Manager (FTC)',
    url: 'https://www.bcg.com/',
    startDate: '2023-01-25',
    endDate: '2024-03-01',
    summary: 'Summary Here',
    highlights: [
      'Point',
      'Point',
      'Point',
    ],
  },
  {
    name: 'Capgemini',
    position: 'Learning & Enablement Consultant',
    url: 'https://www.capgemini.com',
    startDate: '2013-07-01',
    endDate: '2023-01-25',
    summary: 'A3.',
    highlights: [
      'Built producon.',
      'Deg.',
      'Decture needs.',
    ],
    summary1: 'Ahhhhh3.',
    highlights1: [
      'Built producon.',
      'Deg.',
      'Decture needs.',
    ],
  },
];

export default work;
