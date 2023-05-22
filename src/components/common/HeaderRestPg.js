/*
    header ul pentru restaurant page, didn't work to integrate the mobile one yet
*/ 

import React, { useState } from "react";
// import '../../styles/components/common/header.css'; // cel cu mobile 

import '../../styles/components/common/hearder-restpg.css'; // cel de pe restaurant page


import icon from '../../images/icons/logoIcon.svg';
import profileIcon from '../../images/icons/profileIcon.svg';

function HeaderRestPg() {

  const [loggedIn, setLoggedIn] = useState(false);

  function setLogStatus() {
    setLoggedIn(!loggedIn);
  }

  const login = (
    <div className='loginButtons'>
      <div className='loginButton' onClick={setLogStatus}>Login</div>
      <div className='signinButton' onClick={setLogStatus}>Sign up</div>
    </div>
  );

  const profile = (
    <div className='profileIcon' onClick={setLogStatus}>
      <img src={profileIcon} alt='profileIcon' />
    </div>
  );

  return (
    <div className='header'>
      <div className='logo'>
        <div className='icon'>
          <img src={icon} alt='icon' />
        </div>
        <div className='title'>
          <span className='titleColored'>Deal</span> Shopper
        </div>
      </div>
      <div className='navigationBar'>
        <div className='navigationButton'>Home</div>
        <div className='navigationButton'>Browse</div>
        <div className='navigationButton'>Favorites</div>
        <div className='navigationButton'>About Us</div>
      </div>
      <div className='searchBar'>
        <input type='text' placeholder='Search' />
      </div>
      {loggedIn ? profile : login}
    </div>
  );
}

export default HeaderRestPg;