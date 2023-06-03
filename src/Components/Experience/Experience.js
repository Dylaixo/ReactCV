import React, { useState } from 'react';
import { data } from '../../data';
import AddExperience from '../AddExperience/AddExperience';
import { BsFillTrashFill, BsPlusCircleFill, BsFillCalendarMinusFill } from "react-icons/bs";
import './Experience.css';
import { motion } from 'framer-motion'

function Experience() {
  const [experiences, setExperiences] = useState(data[0].experience);
  const [showPopup, setShowPopup] = useState(false);

  const handleDelete = (index) => {
    const newExperiences = [...experiences];
    newExperiences.splice(index, 1);
    setExperiences(newExperiences);
  };

  const handleAddExperience = (experience) => {
    data[0].experience.push(experience);
  };
  return (
    <div className='content' >
      {experiences.map((exp, index) => (
        <div className='contentinfo'key={index}>
          {exp.position ? <h2>{exp.name}: {exp.position}</h2> : <h2>{exp.name}</h2>}
          {exp.start_date ? <p><BsFillCalendarMinusFill size={20}/> {exp.start_date} - {exp.end_date}</p> : null}
          <p className='resp'>{exp.resposibilities}</p>
         <BsFillTrashFill size={30} className='icone' onClick={() => handleDelete(index)}></BsFillTrashFill>
         <hr className='divide'></hr>
        </div>
      ))}
      <div className='centre'>
        <BsPlusCircleFill className='icone' onClick={() => setShowPopup(true)} size={30}></BsPlusCircleFill>
        {showPopup && <AddExperience onClose={() => setShowPopup(false)} onAdd={handleAddExperience} />}
      </div>
    </div>
  );
}

export default Experience;
