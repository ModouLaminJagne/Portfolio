import './App.css';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Experience from './Components/Experience/Experience';
import Footer from './Components/Footer/Footer';
import Contacts from './Components/Contact/Contacts';
import Portfolio from './Components/Portfolio/Portfolio';
import Testimonials from './Components/Testimonial/Testimonials';
import React from 'react';

const App = () => {
  return (
    <div className="bg">
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contacts />
      <Footer />
    </div>
  );
};

export default App;
