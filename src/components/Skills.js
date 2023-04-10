import React from 'react';
import './Skills.css';
import Skill from './Skill';
import Interest from './Interest';

function Skills() {
  return (
    <>
      <div className='skills'>
        <h2 className='h2'>Competence</h2>
        <div className='competences'>
          <Skill title='REACT' />
          <Skill title='Node' />
          <Skill title='Redux' />
          <Skill title='Ajax' />
          <Skill title='EmailJS' />
          <Skill title='JAVASCRIPT' />
          <Skill title='HTML' />
          <Skill title='CSS' />
          <Skill title='SASS' />
          <Skill title='Strapi' />
          <Skill title='MySQL' />
          <Skill title='Render' />
          <Skill title='Netlify' />
        </div>
      </div>
      <div className='skills'>
        <h2 className='h2'>Langues</h2>
        <Skill title='Anglais' />
        <Skill title='Espagnol' />
        <Skill title='Danois' />
      </div>
      <Interest />
    </>
  );
}

export default Skills;
