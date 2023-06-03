import React from 'react';
import { data } from '../../data';
import './Education.css';
import {BsFillCalendarMinusFill, BsBook } from "react-icons/bs";
import { motion } from 'framer-motion'
import {GrTechnology} from 'react-icons/gr'
import {CgWebsite} from 'react-icons/cg'
function Education() {
    const education = data[0].education;
    const courses = data[0].courses
  return (
    <div className='content' >
      <h3 className='title'>Education</h3>
    {education.map((edu, index) => (
      <div className='contentinfo' key={index}>
        <h3>{edu.institution}</h3>
        <p><BsFillCalendarMinusFill /> {edu.start_year} - {edu.end_year}</p>
        <p><BsBook/> {edu.profile}</p>
        <hr className='divide'></hr>
      </div>
    ))}
    <h3 className='title'>Courses</h3>
    {courses.map((course, i) =>(
      <div className='contentinfo' key={i}>
      <h3>{course.name}</h3>
      <p><CgWebsite /> <a href={course.link} >Link to course</a></p>
      <p><GrTechnology/> {course.tech}</p>
      <hr className='divide'></hr>
    </div>
    ))}
  </div>
  );
}

export default Education;