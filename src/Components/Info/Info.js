import React from 'react';
import { data } from '../../data';
import photo from './cv-photo.jpg';
import ListGroup from 'react-bootstrap/ListGroup';
import './Info.css';
import { BsFillTelephoneFill, BsFillEnvelopeOpenFill, BsFillCalendarDateFill, BsFillPersonLinesFill, BsFillDoorClosedFill } from "react-icons/bs";
import {AiOutlineGithub, AiFillLinkedin} from 'react-icons/ai'
function Info() {
  const { name, surname, date, phone, email, linkedin, github } = data[0].informations;

  return (
    <div className='row nopadding'>
        <div className='col-2 nopadding'></div>
        <div className='col-3 nopadding'>
             <img className='rounded photo' src={photo} alt="CV Photo" />
        </div>
        <div className='col ms-5 info nopadding'>
            <h4>Personal Information</h4>
            <ListGroup variant="flush" className='shadow'>
                <ListGroup.Item><BsFillPersonLinesFill size={25}/> {name + " " + surname}</ListGroup.Item>
                <ListGroup.Item><BsFillCalendarDateFill size={25}/> {date}</ListGroup.Item>
                <ListGroup.Item><BsFillTelephoneFill size={25}/> {phone}</ListGroup.Item>
                <ListGroup.Item><BsFillEnvelopeOpenFill size={25} /> {email}</ListGroup.Item>
                <ListGroup.Item><AiOutlineGithub size={25} /> <a className='link' href={github}>Github profile</a></ListGroup.Item>
                <ListGroup.Item><AiFillLinkedin size={25} /><a className='link' href={linkedin}>Linkedin profile</a></ListGroup.Item>
             </ListGroup>
        </div>
        <div className='col-2 nopadding'></div>
    </div>
  );
}

export default Info;