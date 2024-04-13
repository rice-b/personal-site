import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { fa-calendar-check } from '@fortawesome/free-brands-svg-icons/fa-calendar-check';
// import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
// import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
// import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
// import { faAngellist } from '@fortawesome/free-brands-svg-icons/faAngellist';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.
const data = [
  {
    link: 'mailto:rice.brendan8+website@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
  {
    link: 'http://www.linkedin.com/in/brendanrice',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://calendar.app.google/L84NfFfh2ZAH5t259',
    label: 'Book a Meeting',
    icon: fa-calendar-check,
  },
  {
    link: 'https://twitter.com/Brendan_Learn',
    label: 'X (Twitter)',
    icon: faTwitter,
  },

];

export default data;
