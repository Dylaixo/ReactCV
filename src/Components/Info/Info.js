import React from 'react';
import { data } from '../../data';
import photo from './cv-photo.jpg';
import ListGroup from 'react-bootstrap/ListGroup';

function Info() {
  const { name, surname, date, adress, city, phone, email } = data[0].informations;

  return (
    <div className='row'>
        <div className='col-2'></div>
        <div className='col-2'>
             <img className='rounded' src={photo} alt="CV Photo" />
        </div>
        <div className='col ms-5'>
            <h4>Personal Information</h4>
            <ListGroup variant="flush">
                <ListGroup.Item>Name: {name + " " + surname}</ListGroup.Item>
                <ListGroup.Item>Date of Birth: {date}</ListGroup.Item>
                <ListGroup.Item>Address: {adress + ", " + city}</ListGroup.Item>
                <ListGroup.Item>Phone: {phone}</ListGroup.Item>
                <ListGroup.Item>Email: {email}</ListGroup.Item>
             </ListGroup>
        </div>
        <div className='col-2'></div>
    </div>
  );
}

export default Info;