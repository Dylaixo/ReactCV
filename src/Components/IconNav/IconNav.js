import React from 'react'
import { BsBriefcaseFill, BsPersonLinesFill, BsFillStarFill, BsEaselFill  } from "react-icons/bs";
import { Link } from 'react-router-dom';
import './IconNav.css';

function IconNav() {
  return (
    <div className='text-center icons'>
        <Link to="/About">
            <BsPersonLinesFill size={40} />
        </Link>
        <Link to="/Education">
            <BsEaselFill size={40} />
        </Link>
        <Link to="/Experience">
            <BsBriefcaseFill size={40} />
        </Link>
        <Link to="/Skills">
            <BsFillStarFill size={40} />
        </Link>
    </div>
  );
}

export default IconNav;
