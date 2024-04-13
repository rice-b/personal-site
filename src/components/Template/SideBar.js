import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Brendan Rice</h2>
        <p><a href="mailto:rice.brendan8+website@gmail.com">rice.brendan8@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      Change, Learning, and Innovation professional with over 11 years of consulting experience for
      clients with Capgemini and Boston Consulting Group. Adept at strategic advisory and applied
      innovation from design to evaluation of solutions. Passionate about solving complex problems,
      technology, and enabling change.
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Brendan Rice <Link to="/">brendanrice.xyz</Link>.</p>
    </section>
  </section>
);

export default SideBar;
