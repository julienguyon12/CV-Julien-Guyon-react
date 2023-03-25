import React from 'react';
import './FormationsExperiences.css';
import dataExperience from '../data/Experiences';
import dataFormation from '../data/Formations';
import Formation from './Formation';
import Experience from './Experience';

function FormationsExperiences() {
  return (
    <>
      <Formation data={dataFormation} />
      <Experience data={dataExperience} />
    </>
  );
}

export default FormationsExperiences;
