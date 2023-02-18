import React from 'react';
import { data } from '../../data';
import './About.css';
import {AnimatePresence, motion } from 'framer-motion'

function About() {
  return (
    <motion.div initial={ {opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <h2 className='about'>About</h2>
      <p className='text-about'>{data[0].about}</p>
    </motion.div>
  );
}

export default About;