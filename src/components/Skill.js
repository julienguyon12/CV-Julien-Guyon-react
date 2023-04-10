import React from 'react';
import './Skills.css';

function Skill({ title, rating }) {
  return (
    <div className='skill'>
      <p className='skill-title'>{title}</p>
    </div>
  );
}

export default Skill;
