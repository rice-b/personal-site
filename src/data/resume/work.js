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
 *  * @property {string|undefined} achievements - html/markdown summary of the position
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
    highlights: [
      'Designed and developed 3 AI-driven simulation (roleplays) with a 90% satisfaction and 100% on the job relevance rating.',
      'Organised 3 internal innovation conferences with an external speaker reaching 120 internal employees with an average 85% satisfaction rating.',
      'Published 4 innovation newsletters reaching ~700 internal employees.',
      'Evaluated coaching platforms across key criteria and 6 dimensions and shortlisted 2 from 50+ vendors.',
      'Managed the innovation process by creating a dashboard of 100 products segmented by 8 stages.',
    ],
  },
  {
    name: 'Capgemini',
    position: 'Learning & Enablement Consultant',
    url: 'https://capgemini.com',
    startDate: '2013-07-01',
    endDate: '2023-01-01',
    summary: `Sector experience: Aviation, Consulting, Defence, FMCG, IT, UK Public Sector and Utilities (Electricity & Water). '/n' Influenced organisational transformation efforts through targeted learning strategies, leveraging stakeholder insights to optimise training impact. Designed and developed a range of learning deliverables (eLearnings, vILT, Peer to Peer, online resources etc.) to address gaps achieving client business goals leveraging TAP QA Learning and The LPI accredited learning methodology. Leveraged Kirkpatrick's evaluation and The Learning-Transfer Evaluation Model to determine how success will be measured for learning initiatives. Managed and led cross-functional teams remotely across various time zones, including project and people management responsibilities. Experience engaging learners who are office based or field force. Initiated a talent mobility project within a technology consultancy, focusing on creating efficient learning pathways for new and existing employees. Participated in Capgemini's Graduate Programme, leading initiatives to streamline digital marketing, SAP data processes and supporting an LMS for 80,000 users.`,
    highlights: [
      'Built production, online, end-to-end optimized machine learning pipelines for time-series prediction. Designed micro-service architecture around: data collection, data integrity, feature engineering, research, strategy, backtesting, deployment, and reporting. Set and communicated team priorities that supported the broader organizations goals. Aligned strategy, processes, and decision-making across teams. Set clear expectations with individuals based on their level and role and aligned them to the broader organization's goals. Met regularly with individuals to discuss performance and development, and provided feedback and coaching. Developed the long-term technical vision and roadmap within, and often beyond, the scope of my teams. Evolved the roadmap to meet anticipated future requirements and infrastructure needs.',
    ],
  },
];

export default work;
