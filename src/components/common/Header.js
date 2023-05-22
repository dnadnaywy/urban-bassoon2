import React, { useState } from "react";
import '../../styles/components/common/header.css'
import icon from '../../images/icons/logoIcon.svg';
import profileIcon from '../../images/icons/profileIcon.svg';
import MobileSidebar from "./MobileSidebar";
import { useMediaQuery } from "react-responsive";

function Header() {

  const isSmallScreen = useMediaQuery({ query: '(max-width: 1200px)' });

  const [loggedIn, setLoggedIn] = useState(false);

  function setLogStatus() {
    setLoggedIn(!loggedIn);
  }

  const login = (
    <div className='loginButtons'>
      <div className='loginButton' onClick={setLogStatus}>Log in</div>
      <div className='signinButton' onClick={setLogStatus}>Sign up</div>
    </div>
  );

  const profile = (
    <div className='profileIcon' onClick={setLogStatus}>
      <img src={profileIcon} alt='profileIcon' />
    </div>
  );

  const scroll2El = elId => {
    const el = document.getElementById(elId);
    if (el) {
      window.scrollTo({
        top: el.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const desktopHeader = (
    <div className='desktopHeader'>
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
        <div className='navigationButton' goto="browsehere" onClick={scroll2El}>Browse</div>
        <div className='navigationButton'>Favorites</div>
        <div className='navigationButton'>About Us</div>
      </div>
      <div className='searchBar'>
        <input type='text' placeholder='Search' />
      </div>
      {loggedIn ? profile : login}
    </div>
  );

  const mobileHeader = (
    <div className='mobileHeader'>
      <MobileSidebar loginStatus={loggedIn} profile={profile} login={login} />
      <div className='logo'>
        <div className='icon'>
          <img src={icon} alt='icon' />
        </div>
        <div className='title'>
          <span className='titleColored'>Deal</span> Shopper
        </div>
      </div>
    </div>
  );

  return (
    isSmallScreen ? mobileHeader : desktopHeader
  );
}

export default Header;