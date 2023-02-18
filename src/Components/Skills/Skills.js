import React from 'react';
import { data } from '../../data';
import './Skills.css';
import { BsFillStarFill, BsStar } from "react-icons/bs";
import { motion } from 'framer-motion'

function Skills() {
  const skills = data[0].skills;
  return (
    <motion.div initial={ {opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} >
    <h2 className='title-skills'>My skills</h2>
    {skills.map((skill, index) => (
      <div className='skill' key={index}>
        <h2>{skill.level ? skill.name + ": " + skill.level : skill.name}</h2>
        <p className={skill.level && skill.level== "basic" ? "basic" :
         skill.level && skill.level == "regular" ? "regular" :
         skill.level ? "advance" : null}>
          {skill.level== "basic" && skill.level ? <div className='rate'><BsFillStarFill/><BsFillStarFill/><BsStar/><BsStar/><BsStar/></div> :
         skill.level == "regular" && skill.level ? <div className='rate'><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/><BsStar/><BsStar/></div> :
         skill.level ? <div className='rate'><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/></div> : null}
        </p>
        <p className='desc'>{skill.description}</p>
        <hr className='divide'></hr>
      </div>
    ))}
  </motion.div>
  );
}

export default Skills;