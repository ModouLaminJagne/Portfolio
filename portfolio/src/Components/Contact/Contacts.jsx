import React, {useRef} from 'react'
import './Contacts.css'
import {MdOutlineEmail} from 'react-icons/md'
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import emailjs from 'emailjs-com'

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_iqepmnf',
        'template_s27eleo',
        form.current,
        'azpM4MScq_LOwzZnF'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
    );
    e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>jallowmodou24@gmail.com</h5>
            <a
              href="mailto:jallowmodou24@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Mail me
            </a>
          </article>
          <article className="contact__option">
            <AiOutlineTwitter className="contact__option-icon" />
            <h4>Twitter</h4>
            <a
              href="https://twitter.com/MoJallow07"
              target="_blank"
              rel="noreferrer"
            >
              Let's tweet
            </a>
          </article>
          <article className="contact__option">
            <AiOutlineWhatsApp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <a
              href="https://api.whatsapp.com/send?phone=2203258685"
              target="_blank"
              rel="noreferrer"
            >
              Let's chat
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="text" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contacts