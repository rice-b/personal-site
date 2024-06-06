import React, { useState } from 'react';
import PropTypes from 'prop-types';

import CategoryButton from './Skills/CategoryButton';
import SkillBar from './Skills/SkillBar';

const Skills = ({ skills, categories }) => {
  const initialButtons = Object.fromEntries([['All', false]].concat(categories.map(({ name }) => [name, false])));

  const [buttons, setButtons] = useState(initialButtons);

  const handleChildClick = (label) => {
    // Toggle button that was clicked. Turn all other buttons off.
    const newButtons = Object.keys(buttons).reduce((obj, key) => ({
      ...obj,
      [key]: (label === key) && !buttons[key],
    }), {});
    // Turn on 'All' button if other buttons are off
    newButtons.All = !Object.keys(buttons).some((key) => newButtons[key]);
    setButtons(newButtons);
  };

  const getButtons = () => Object.keys(buttons).map((key) => (
    <CategoryButton
      label={key}
      key={key}
      active={buttons}
      handleClick={handleChildClick}
    />
  ));

  return (
    <div className="skills">
      <div className="link-to" id="skills" />
      <div className="title">
        {/* <h3>Skills</h3>
        <p>Note: I think these sections are silly, but everyone seems to have one.
          Here is a *mostly* honest overview of my skills.
        </p>
      </div>
      <div className="skill-button-container">
        {getButtons()}
      </div>
      <div className="skill-row-container">
        {SCHOOL1()}*/}
      </div> 
    </div>
  );
};

Skills.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    competency: PropTypes.number,
    category: PropTypes.arrayOf(PropTypes.string),
  })),
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    color: PropTypes.string,
  })),
};

Skills.defaultProps = {
  skills: [],
  categories: [],
};

export default Skills;
