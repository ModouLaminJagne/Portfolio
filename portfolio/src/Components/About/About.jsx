import React from 'react'
import mo1 from '../../Assets/mo1.jpg';
import {FaAward} from 'react-icons/fa'
import { MdOutlineSchool } from 'react-icons/md';
import { VscFolderLibrary } from 'react-icons/vsc';
import './About.css'


const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={mo1} alt="img" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <MdOutlineSchool className="about__icon" />
              <h5>Education</h5>
              <small>Undergraduate Student</small>
            </article>
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2 years Development</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>5 completed</small>
            </article>
          </div>
          <p>lorem ipsum blaa blaa blaa🤪</p>
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About