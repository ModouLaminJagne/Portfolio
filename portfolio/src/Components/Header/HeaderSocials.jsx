import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/modou-jallow-673756168/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/jallowmodou" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a href="https://twitter.com/MoJallow07" target="_blank" rel="noreferrer">
        <FaTwitterSquare />
      </a>
    </div>
  );
};

export default HeaderSocials;
