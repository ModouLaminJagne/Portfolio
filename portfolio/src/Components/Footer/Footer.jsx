import React from 'react';
import './Footer.css';
import { FaFacebookSquare } from 'react-icons/fa';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        MLJ
      </a>

      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        {/* <li>
          <a href="#services">Services</a>
        </li> */}
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        {/* <li>
          <a href="#testimonials">Testimonials</a>
        </li> */}
        <li>
          <a href="#contact">Contacts</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com">
          <FaFacebookSquare />
        </a>
        <a href="https://twitter.com">
          <AiOutlineTwitter />
        </a>
        <a href="https://linkedin.com">
          <AiOutlineLinkedin />
        </a>
      </div>
      <div className='footer__copyright'>
        <small>&copy; MLJ Portfolio. All right served. </small>
      </div>
    </footer>
  );
};

export default Footer;
