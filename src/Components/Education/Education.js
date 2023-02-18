import React from 'react';
import { data } from '../../data';
import './Education.css';
import {BsFillCalendarMinusFill, BsBook } from "react-icons/bs";

function Education() {
    const education = data[0].education;
  return (
    <div className='content'>
    {education.map((edu, index) => (
      <div className='contentinfo' key={index}>
        <h3>{edu.institution}</h3>
        <p><BsFillCalendarMinusFill /> {edu.start_year} - {edu.end_year}</p>
        <p><BsBook/> {edu.profile}</p>
        <hr className='divide'></hr>
      </div>
    ))}

  </div>
  );
}

export default Education;