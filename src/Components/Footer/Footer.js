import React from 'react';
import './Footer.css';
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

function Footer() {
  return (
    <div className='row nopadding footer'>
        <div className='col-3'>
            <p className='text'>&#174;Marcin Łogwinowicz Cirriculum vitae</p>
        </div>
        <div className='col'></div>
        <div className='col-1 text-center mt-3'>
            <a target="_blank" href="https://www.linkedin.com/in/marcin-%C5%82ogwinowicz-7aa52323a/"><AiFillLinkedin size={30}/></a>
        </div>
        <div className='col-1 text-center mt-3'>
            <a target="_blank" href="https://github.com/Dylaixo/ReactCV"><AiFillGithub size={30}/></a>
        </div>
    </div>
  );
}

export default Footer;