import React from "react";
import Contact from "../components/Contact";
import { BsInstagram, BsTelegram, BsSkype } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="footer__wrapper" id="footer">
          <div className="contact">
            <div>
              <h2>Контакти:</h2>
              <div className="phone">
                <a href="tel:+380991945891">099-194-58-91</a>
              </div>
              <div className="phone">
                <a href="tel:+380687690157">068-769-01-57</a>
              </div>
            </div>
            <div className="footer__socials">
              <a href="https://www.skype.com">
                <BsInstagram />
              </a>
              <a href="...">
                <BsTelegram />
              </a>
              <a href="https://www.linkedin.com">
                <BsSkype />
              </a>
            </div>
          </div>
          <div className="workSchedule">
            <h2>Часи роботи:</h2>
            <ul>
              <li>
                <b>пн:</b> 08:00-16:00
              </li>
              <li>
                <b>вт: </b> 08:00-16:00
              </li>
              <li>
                <b>ср: </b> 09:00-17:00
              </li>
              <li>
                <b>чт:</b> 09:00-17:00
              </li>
              <li>
                <b>пт:</b> 09:00-15:00
              </li>
              <li>
                <b>сб:</b> Зачинено
              </li>
              <li>
                <b>нд:</b> Зачинено
              </li>
            </ul>
          </div>
          <div className="footer__email">
            <Contact />
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <small>2023&copy; DesignByTAU. All rights reserved.</small>
      </div>
    </>
  );
};

export default Footer;
