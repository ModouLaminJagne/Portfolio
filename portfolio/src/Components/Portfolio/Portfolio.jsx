// import React from 'react'
// import './Portfolio.css'
// import BC from '../../Assets/BC.webp'
// import ML from '../../Assets/ML.webp'
// import MTVers from '../../Assets/MTVers.webp'
// import DA from '../../Assets/DA.webp'
// import Hacker from '../../Assets/Hacker.webp'
// import chip from '../../Assets/chip.webp'

// const data = [
//   {
//     id: 1,
//     image: BC,
//     title: 'Am blocking the chains',
//     github: 'https:/github.com',
//     // github: 'https:/github.com',
//   },
//   {
//     id: 2,
//     image: ML,
//     title: 'Am blocking the chains',
//     github: 'https:/github.com',
//     // github: 'https:/github.com',
//   },
//   {
//     id: 3,
//     image: MTVers,
//     title: 'Am blocking the chains',
//     github: 'https:/github.com',
//     // github: 'https:/github.com',
//   },
//   {
//     id: 4,
//     image: DA,
//     title: 'Am blocking the chains',
//     github: 'https:/github.com',
//     // github: 'https:/github.com',
//   },
//   {
//     id: 5,
//     image: Hacker,
//     title: 'Am blocking the chains',
//     github: 'https:/github.com',
//     // github: 'https:/github.com',
//   },
//   {
//     id: 6,
//     image: chip,
//     title: 'Am blocking the chains',
//     github: 'https:/github.com',
//     // github: 'https:/github.com',
//   },
// ];

// const Portfolio = () => {
//   return (
//     <section id="portfolio">
//       <h5>My Recent Work</h5>
//       <h2>Portfolio</h2>

//       <div className="container portfolio__container">
//         {
//           data.map(({ id, image, title, github, }) => {
//             return (
//               <article key={id} className="portfolio__item">
//                 <div className="portfolio__item-image">
//                   <img src={image} alt="{title}" />
//                 </div>
//                 <h3>{title}</h3>
//                 <div className=" portfolio__item-cta">
//                   <a
//                     href={github}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="btn"
//                   >
//                     Github
//                   </a>
//                   <a
//                     href={github}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="btn btn-primary"
//                   >
//                     Github
//                   </a>
//                 </div>
//               </article>
//             );
//           })
//         }
//       </div>
//     </section>
//   );
// }

// export default Portfolio