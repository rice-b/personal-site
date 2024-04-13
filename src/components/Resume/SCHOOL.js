import React from 'react';
import PropTypes from 'prop-types';

import Degree from './SCHOOL/Degree';

const SCHOOL1 = ({ data }) => (
  <div className="SCHOOL1">
    <div className="link-to" id="SCHOOL1" />
    <div className="title">
      <h3>SCHOOL</h3>
    </div>
    {data.map((degree) => (
      <Degree
        data={degree}
        key={degree.school}
      />
    ))}
  </div>
);

SCHOOL1.defaultProps = {
  data: [],
};

SCHOOL1.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    school: PropTypes.string,
    degree: PropTypes.string,
    link: PropTypes.string,
    year: PropTypes.number,
  })),
};

export default SCHOOL1;
