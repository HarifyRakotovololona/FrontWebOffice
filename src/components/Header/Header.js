import React, { useState } from 'react';
import logo from '../../logo.png';
import "./Header.css";

function Header(props) {
  return (
    <>
      <div className="Header">
        <div className="HeaderLeft">
          <div className="HeaderLogo">
          <img src={logo} alt="logo"/>
          </div>
        </div>
        <div className="HeaderCenter">
          <div className="HeaderNavBar">
            <a href='#'>accueil</a>
            <a href='#'>profil</a>
            <a href='#'>liste terrain</a>
            <a href='#'>message</a>
          </div>
        </div>
        <div className="HeaderRight">
            <a href="#">Login</a>
        </div>
      </div>
    </>
  );
}

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
