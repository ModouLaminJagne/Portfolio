import React from 'react';
import './Header.css';
import CTA from './CTA';
import mo from '../../Assets/mo.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div id='home' className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Modou Jallow</h1>
        <h5 className="text-white">React Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={mo} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
