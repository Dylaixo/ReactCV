import React from 'react';
import { data } from '../../data';
import './Education.css';
import {BsFillCalendarMinusFill, BsBook } from "react-icons/bs";
import { motion } from 'framer-motion'

function Education() {
    const education = data[0].education;
  return (
    <motion.div className='content' initial={ {opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
    {education.map((edu, index) => (
      <div className='contentinfo' key={index}>
        <h3>{edu.institution}</h3>
        <p><BsFillCalendarMinusFill /> {edu.start_year} - {edu.end_year}</p>
        <p><BsBook/> {edu.profile}</p>
        <hr className='divide'></hr>
      </div>
    ))}

  </motion.div>
  );
}

export default Education;