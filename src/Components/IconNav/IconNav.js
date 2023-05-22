import React from 'react'
import { BsBriefcaseFill, BsPersonLinesFill, BsFillStarFill, BsBookFill  } from "react-icons/bs";
import { Link } from 'react-router-dom';
import './IconNav.css';
import {RiComputerFill} from 'react-icons/ri'
function IconNav() {
  return (
    <div className='text-center icons'>
        <Link to="/About">
            <BsPersonLinesFill size={40} />
        </Link>
        <Link to="/Education">
            <BsBookFill size={40} />
        </Link>
        <Link to="/Experience">
            <BsBriefcaseFill size={40} />
        </Link>
        <Link to="/Skills">
            <BsFillStarFill size={40} />
        </Link>
        <Link to="/Projects">
            <RiComputerFill size={40} />
        </Link>
    </div>
  );
}

export default IconNav;
