import React from 'react';
import { data } from '../../data';
function Education() {
    const education = data[0].education;
  return (
    <div>
    {education.map((edu, index) => (
      <div key={index}>
        <h3>{edu.institution}</h3>
        <p>{edu.start_year} - {edu.end_year}</p>
        <p>{edu.profile}</p>
      </div>
    ))}
  </div>
  );
}

export default Education;