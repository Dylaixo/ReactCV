import React from 'react';
import { data } from '../../data';
function Skills() {
  const skills = data[0].skills;
  return (
    <div>
    {skills.map((skill, index) => (
      <div key={index}>
        <h3>{skill.name}</h3>
        { skill.level ? <p>{skill.level}</p> : null}
      </div>
    ))}
  </div>
  );
}

export default Skills;