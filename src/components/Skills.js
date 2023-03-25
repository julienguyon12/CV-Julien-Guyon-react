import React from 'react';
import './Skills.css';
import Skill from './Skill';
import Interest from './Interest';

function Skills() {
  return (
    <>
      <div className='skills'>
        <h2 className='h2'>Competence</h2>
        <Skill title='HTML' rating='5' />
        <Skill title='CSS' rating='5' />
        <Skill title='JAVASCRIPT' rating='4' />
        <Skill title='REACT' rating='3' />
        <Skill title='Node' rating='3' />
      </div>
      <div className='skills'>
        <h2 className='h2'>Langues</h2>
        <Skill title='Anglais' rating='5' />
        <Skill title='Espagnol' rating='4' />
        <Skill title='Danois' rating='2' />
      </div>
      <Interest />
    </>
  );
}

export default Skills;
