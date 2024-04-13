import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Brendan Rice's personal website."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">Welcome to my website</Link></h2>
        </div>
      </header>
      <p>Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">work experience</Link>, {' '}
        <Link to="/projects">SCHOOL</Link> & continued development, {' '}
        view <Link to="/stats">interests</Link>, {' '}
        or <Link to="/contact">contact me</Link>.
      </p>
    </article>
  </Main>
);

export default Index;
