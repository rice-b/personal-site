import React from 'react';
import PropTypes from 'prop-types';

import Degree from './Education/Degree';

const Education1 = ({ data }) => (
  <div className="education1">
    <div className="link-to" id="education1" />
    <div className="title">
      <h3>Education</h3>
    </div>
    {data.map((degree) => (
      <Degree
        data={degree}
        key={degree.school}
      />
    ))}
  </div>
);

Education1.defaultProps = {
  data: [],
};

Education1.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    school: PropTypes.string,
    degree: PropTypes.string,
    link: PropTypes.string,
    year: PropTypes.number,
  })),
};

export default Education1;
