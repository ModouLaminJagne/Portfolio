import React from 'react'
import mo1 from '../../Assets/mo1.jpg';
import {FaAward} from 'react-icons/fa'
import { SiMicrosoftacademic } from 'react-icons/si';
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
              <SiMicrosoftacademic className="about__icon" />
              <h5>Experience</h5>
              <small>5+ years Working</small>
            </article>
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Awards</h5>
              <small>10+ Awards</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>4 completed</small>
            </article>
          </div>
          <p>
            A few interesting things about me. I love to read science fiction. I
            enjoy watching and playing football and jogging during free-time to
            keep fit and maintain healthy life balance. Moreover, I have fun
            watching documentaries relating to new discoveries in tech (Cold
            fusion being my favorite youtube channel), politics (Visual Politik
            channel) and history (Biographics channel) . Every day I push myself
            to learn something new, whether that be about machine learning,
            blockchain or miscellaneous facts about the universe. <br></br>
            I co.founded Gomindz, a startup that uses Analytics and Machine Learning
            technologies to enhance business efficiency, sustainability and
            scalability.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About