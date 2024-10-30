import React from 'react';
import telegram from '../assets/images/telegram.png';
import instagram from '../assets/images/instagram.png';
import mail from '../assets/images/mail.png';
import whatsapp from '../assets/images/whatsapp.png';

const Footer = () => {
  return (
    <div className="container">
    <footer className="footer">
      <h1 className="footer_title">Contact me from...</h1>
      <div className="contacts">
        <li><a href="https://www.instagram.com/bot1rovich_b/?next=%2F" className="contacts_link"><img className='footer_img' src={instagram} alt="" /></a></li>
        <li><a href="https://t.me/soulkeepercsz" className="contacts_link"><img className='footer_img' src={telegram} alt="" /></a></li>
        <li><a href="mailto:ergashef1@gmail.com" className="contacts_link"><img className='footer_img' src={mail} alt="" /></a></li>
        <li><a href="tel:+998930575253" className="contacts_link"><img className='footer_img' src={whatsapp} alt="" /></a></li>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
