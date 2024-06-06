import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Brendan Rice via email @ rice.brendan8@gmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2><Link to="/contact">Contact</Link></h2>
          <p>Feel free to reach out</p>
        </div>
      </header>
      <div className="email-at">
        <p>You can <Link to="https://calendar.app.google/L84NfFfh2ZAH5t259">book a meeting</Link>, <Link to="https://www.linkedin.com/in/brendanrice">message on Linkedin</Link>, or email me at:<EmailLink /></p>
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
