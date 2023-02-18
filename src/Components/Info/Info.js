import React from 'react';
import { data } from '../../data';
import photo from './cv-photo.jpg';
import ListGroup from 'react-bootstrap/ListGroup';
import './Info.css';

function Info() {
  const { name, surname, date, adress, city, phone, email } = data[0].informations;

  return (
    <div className='row nopadding'>
        <div className='col-2 nopadding'></div>
        <div className='col-3 nopadding'>
             <img className='rounded photo' src={photo} alt="CV Photo" />
        </div>
        <div className='col ms-5 info nopadding'>
            <h4>Personal Information</h4>
            <ListGroup variant="flush" className='shadow'>
                <ListGroup.Item>Name: {name + " " + surname}</ListGroup.Item>
                <ListGroup.Item>Date of Birth: {date}</ListGroup.Item>
                <ListGroup.Item>Address: {adress + ", " + city}</ListGroup.Item>
                <ListGroup.Item>Phone: {phone}</ListGroup.Item>
                <ListGroup.Item>Email: {email}</ListGroup.Item>
             </ListGroup>
        </div>
        <div className='col-2 nopadding'></div>
    </div>
  );
}

export default Info;