import React from 'react';
import './User.css';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
function User() {
  return (
    <div className='user'>
      <img src='./image/julien-git.jpg' alt='' className='user-pic' />
      <h1 className='user-name'>Julien Guyon</h1>
      <p className='user-profesion'>Développeur web</p>
      <div className='user-infos'>
        <p className='user-info'>
          <HomeOutlinedIcon />
          Toulouse
        </p>
        <p className='user-info'>
          <LocalPhoneOutlinedIcon />
          <a href='tel:+330606060606'>0686070232</a>
        </p>
        <p className='user-info'>
          <EmailOutlinedIcon />
          <a href='mailto:julien@gmail.com'>julien.guyon@2018.icam.fr</a>
        </p>
        <p className='user-info'>
          <CalendarMonthOutlinedIcon />
          Date de naissance: 7 aout 1995
        </p>
        <p className='user-info'>
          <LocationOnOutlinedIcon />
          Lieu de naissance: Toulouse
        </p>
      </div>
    </div>
  );
}

export default User;
