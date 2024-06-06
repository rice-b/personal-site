import React from 'react';
import Table from './Table';
import data from '../../data/stats/personal';

const PersonalStats = () => (
  <>
    <h3>Some stats about me</h3>
    <p>TEST ADD STUFF HERE</p>
    <Table data={data} />
  </>
);

export default PersonalStats;
