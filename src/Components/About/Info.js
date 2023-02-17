import React from 'react';
import { data } from '../../data';

function About() {
  return (
    <div>
      <h2>About</h2>
      <p>{data[0].about}</p>
    </div>
  );
}

export default About;