import React from 'react';
import { data } from '../../data';
import './About.css';
function About() {
  return (
    <div>
      <h2>About</h2>
      <p className='text'>{data[0].about}</p>
    </div>
  );
}

export default About;