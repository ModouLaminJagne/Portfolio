// import React from 'react'
// import './Testimonials.css'
// import mee from '../../Assets/mee.jpg';
// // import i16 from'../../Assets/i16.jpg';
// // import i16 from'../../Assets/i16.jpg';
// // import i16 from'../../Assets/i16.jpg';

// // import Swiper core and required modules
// import {  Pagination  } from 'swiper';

// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// // import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// // import 'swiper/css/scrollbar';

// const data = [
//   {
//     di: 1,
//     image: mee,
//     name: 'modou',
//     comment: 'lorem ipsum blaa blaa blaa🤪',
//   },
//   {
//     di: 2,
//     image: mee,
//     name: 'modou',
//     comment: 'lorem ipsum blaa blaa blaa🤪',
//   },
//   {
//     di: 3,
//     image: mee,
//     name: 'modou',
//     comment: 'lorem ipsum blaa blaa blaa🤪',
//   },
//   {
//     di: 4,
//     image: mee,
//     name: 'modou',
//     comment: 'lorem ipsum blaa blaa blaa🤪',
//   },
//   {
//     di: 5,
//     image: mee,
//     name: 'modou',
//     comment: 'lorem ipsum blaa blaa blaa🤪',
//   },
// ];


// const Testimonials = () => {
//   return (
//     <section id="testimonials">
//       <h5>Received From Clients</h5>
//       <h2>Testimonials</h2>

//       <Swiper
//         className="container testimonials__container"
//         // install Swiper modules
//         modules={[ Pagination]}
//         spaceBetween={40}
//         slidesPerView={1}
//         pagination={{ clickable: true }}
        
//       >
//         {
//           data.map(({image, name, comment }, id) => {
//             return (
//               <SwiperSlide key={id} className="testimonial">
//               <div className="client__avater">
//                 <img src={image} alt={name} />
//               </div>
//               <h5 className="client__name">{name}</h5>
//               <small className="client__review">
//                 {comment}
//               </small>
//             </SwiperSlide>
//             )
//           })
//         }
        
//       </Swiper>
//     </section>
//   );
// }

// export default Testimonials