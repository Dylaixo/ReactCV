import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AddExperience.css';

function AddExperience(props) {
    const [name, setName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [position, setPosition] = useState('');
    const [responsibilities, setResponsibilities] = useState('');

    const handleSubmit = (event) => {
      event.preventDefault();

      const newExperience = {
        name,
        start_date: startDate,
        end_date: endDate,
        position,
        responsibilities,
      };

      props.onAdd(newExperience);
      props.onClose();
    };

    return (
      <div className="popup">
        <div className="popup-inner">
          <h2>Add informations about your new experience</h2>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label  className='wid'>
                    Name:
                    <input className='form-control' type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
            </div>
            <div className='form-group'>
                <label  className='wid'>
                    Start Date:
                    <input className='form-control' type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                </label>
            </div>
            <div className='form-group'>
                <label className='wid'>
                    End Date:
                    <input className='form-control' type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                </label>
            </div>
            <div className='form-group'>
            <label  className='wid'>
              Position:
              <input className='form-control' type="text" value={position} onChange={(e) => setPosition(e.target.value)} />
            </label>
            </div>
            <div className='form-group'>
            <label  className='wid'>
              Responsibilities:
              <textarea className='form-control' value={responsibilities} onChange={(e) => setResponsibilities(e.target.value)} />
            </label>
            </div>
            <button type="submit" className='btn btn-outline-secondary'>Add Experience</button>
            <button type="button" className='btn btn-outline-secondary' onClick={props.onClose}>Cancel</button>
          </form>
        </div>
      </div>
    );
  }
  export default AddExperience;