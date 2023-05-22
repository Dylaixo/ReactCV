import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import Education from '../Education/Education';
import Skills from '../Skills/Skills';
import Experience from '../Experience/Experience';
import About from '../About/About';
import {motion, AnimatePresence} from 'framer-motion'
import Projects from '../Projects/Projects';
function RouterAnimation() {
    const location = useLocation();
  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathnames}>
            <Route path='/About' element={<About/>}/>
            <Route path='/Education' element={<Education/>}/>
            <Route path='/Experience' element={<Experience/>}/>
            <Route path='/Skills' element={<Skills/>}/>
            <Route path='/Projects' element={<Projects/>}/>
        </Routes>
    </AnimatePresence>
  )
}

export default RouterAnimation