import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai';
// import { RiServiceLine } from 'react-icons/ri';
import { IoIosContact } from 'react-icons/io';
import { BiBook } from 'react-icons/bi';
import { AiOutlineProfile } from 'react-icons/ai';
import { useState } from 'react';

const Nav = () => {
  const [activeNave, setActiveNav] = useState('#')
  return (
    <nav>
      <a
        href="#home"
        onClick={() => setActiveNav('#')}
        className={activeNave === '#' ? 'active' : ''}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNave === '#about' ? 'active' : ''}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav('#experience')}
        className={activeNave === '#experience' ? 'active' : ''}
      >
        <BiBook />
      </a>
      {/* <a
        href="#services"
        onClick={() => setActiveNav('#services')}
        className={activeNave === '#services' ? 'active' : ''}
      >
        <RiServiceLine />
      </a> */}
      <a
        href="#portfolio"
        onClick={() => setActiveNav('#portfolio')}
        className={activeNave === '#portfolio' ? 'active' : ''}
      >
        <AiOutlineProfile />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNave === '#contact' ? 'active' : ''}
      >
        <IoIosContact />
      </a>
    </nav>
  );
}

export default Nav