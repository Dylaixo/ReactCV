import React from 'react';
import './CurrentDate.css';

function CurrentDate() {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();

  return (
    <div>
      <p className='date'>Today's date is: {formattedDate}</p>
    </div>
  );
}
export default CurrentDate;