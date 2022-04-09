import React from 'react'
import './Portfolio.css'
import chip from '../../Assets/chip.webp'
import ASSC from '../../Assets/ASSC.jpg'
import GMCL from '../../Assets/GMCL.png'
import DA from '../../Assets/DA.webp'
import BC from '../../Assets/BC.webp'
import AI from '../../Assets/AI.jpg'

const data = [
  {
    id: 1,
    image: chip,
    title: 'INSTITUTE OF ENGINEERS MALAYSIA A.P.U STUDENT SECTION (I.A.S.S)',
    github: 'https:/github.com',
    // github: 'https:/github.com',
  },
  {
    id: 2,
    image: ASSC,
    title: 'AFRICA SOCIETY OF ASIA PACIFIC UNIVERSITY (A.S.A.P.U)',
    github: 'https:/github.com',
    // github: 'https:/github.com',
  },
  {
    id: 3,
    image: GMCL,
    title: 'GOMINDZ .Inc. \n Co-founder. 2019',
    github: 'https:/github.com',
    // github: 'https:/github.com',
  },
  {
    id: 4,
    image: DA,
    title: 'ASEAN DATA ANALYSIS CHALLENGE',
    github: 'https:/github.com',
    // github: 'https:/github.com',
  },
  {
    id: 5,
    image: BC,
    title: 'I AM ALSO INTERESTED IN BLOCKCHAIN TECHNOLOGIES',
    github: 'https:/github.com',
    // github: 'https:/github.com',
  },
  {
    id: 6,
    image: AI,
    title: 'AI & BIG DATA CHALLENGE FOR DATA ENGINEERS',
    github: 'https:/github.com',
    // github: 'https:/github.com',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Experience And Interests</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt="{title}" />
                </div>
                <h3>{title}</h3>
                <div className=" portfolio__item-cta">
                  <a
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                  >
                    Github
                  </a>
                  <a
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    Github
                  </a>
                </div>
              </article>
            );
          })
        }
      </div>
    </section>
  );
}

export default Portfolio