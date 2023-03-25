import React from 'react';

function Formation({ data }) {
  return (
    <div className='cursus mb3'>
      <h2 className='h2'>Formations</h2>
      {data.map((item) => (
        <div className='grid-row' key={item.id}>
          <div className='grid-item'>
            <p className='grid-date'>{item.date}</p>
          </div>
          <div className='grid-item'>
            <h3 className='grid-title'>{item.title}</h3>
            <p className='grid-location'>{item.localisation}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Formation;
