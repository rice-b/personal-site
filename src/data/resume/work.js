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
 *  * @property {string|undefined}  - html/markdown summary of the position
 *  * @property {string} achievements - html/markdown summary of the position
 *  * @property {string} achievements1 - html/markdown summary of the position
 *  * @property {string|undefined} deliverables - html/markdown summary of the position
 *  * @property {string|undefined} highlights - html/markdown summary of the position
 * @property {string[]} keypoints - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Learning Technologies',
    position: 'Chaireperson for the Change Management Session',
    url: 'https://www.learningtechnologies.co.uk/lt24-conference-programme/t3s6-',
    startDate: '2024-04-17',
    endDate: '2024-04-18',
    summary: `Managed the session project plan, deadlines, content branding, planned speaker/ audience engagement and interaction. 
    Chairing the session and leading the Q&A so the audience can understand change management's role in successful learning initiatives.`,
  },
  {
    name: 'Boston Consulting Group',
    position: 'Global Learning Innovation Senior Manager (01.2023 - 03.2024 FTC)',
    url: 'https://www.bcg.com/',
    startDate: '2024-03-01',
    endDate: '2023-01-25',
    summary: `Project and program managed the introduction of state-of-the-art Generative AI learning technologies for roleplays and microlearning. 
    Produced L&D innovation communications and showcased thought leadership reaching ~700 internal employees. Managed the external speaker selection, 
    contracting, and theme for each conference. Conducted market analysis, identifying trends and applying them to BCG's context, including a 
    comprehensive coaching platform evaluation and vendor selection process. Partnered with the Marketing & Communication team to leverage AI, 
    creating dynamic, multi-format learning content from videos, and collaborated with SMEs to ensure learning content accuracy and relevance. 
    Managed the lifecycle of numerous learning products and projects, from prototype development to piloting new learning solutions, demonstrating 
    a pragmatic and innovative approach to L&D challenges. Provided innovation consultancy with senior leaders to understand priorities and align 
    learning initiatives with business needs. Hired for FTC (fixed term contract) (maternity cover).`,
    achievements:
      'Designed and developed 3 AI-driven simulation (roleplays) with a 90% satisfaction and 100% on the job relevance rating. Organised 3 internal innovation conferences with an external speaker reaching 120 internal employees with an average 85% satisfaction rating. Published 4 innovation newsletters reaching ~700 internal employees. Evaluated coaching platforms across key criteria and 6 dimensions and shortlisted 2 from 50+ vendors. Managed the innovation process by creating a dashboard of 100 products segmented by 8 stages.',
  },
  {
    name: 'Capgemini',
    position: 'Learning & Enablement Consultant',
    url: 'https://capgemini.com',
    startDate: '2013-07-01',
    endDate: '2023-01-01',
    achievements: 'Achievements',
    achievements1: 'Successfully scaled learning solutions to meet the needs of groups ranging from 10 to over 10,000 participants, enhancing workforce capabilities. Streamlined digital marketing product imaging content and SAP data globally; managed teams across continents, standardising SAP product data and service desk operations for 400 brand/market combinations. Produced stakeholder analysis for an Oracle ERP IT transformation programme impacting 7.8k users. Presented key findings to the HR steering committee as an input into the next phase of the programme. Created e-learning and facilitated a virtual instructor led training series for 1,400 Salesforce users over 3 months for successive learner cohorts and partner organisations. End to end design and delivery for a public sector client included a strategy, implementation, evaluation that was used to input into designing a skills framework for automation. Reduced recruitment costs and accelerated the qualification process of candidates for the public and private sectors through effective learning and development pathways.',
    deliverables: '',
  },
];

export default work;
