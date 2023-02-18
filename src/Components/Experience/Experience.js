import React from 'react';
import { data } from '../../data';
function Experience() {
    const experiences = data[0].experience;
  return (
    <div>
      {experiences.map((exp, index) => (
        <div key={index}>
          <h3>{exp.name}</h3>
          <p>{exp.start_date} - {exp.end_date}</p>
          {exp.position && <p>{exp.position}</p>}
          {exp.resposibilities && <p>{exp.resposibilities}</p>}
        </div>
      ))}
    </div>
  );
}

export default Experience;