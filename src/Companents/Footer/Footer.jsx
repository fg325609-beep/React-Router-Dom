import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss' // SCSS faylini import qilamiz

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        
        {/* Chap tomon: Logo va qisqacha matn */}
        <div className="footer__info">
          <h2 className="footer__logo">logo</h2>
          <p className="footer__text">
            Zamonaviy veb-texnologiyalar yordamida yaratilgan mukammal platforma.
          </p>
        </div>

        {/* O'rta qism: Navigatsiya havolalari */}
        <nav className="footer__nav">
          <ul className="footer__list">
            <li className="footer__item">
              <Link to="/about" className="footer__link">About</Link>
            </li>
            <li className="footer__item">
              <Link to="/contact" className="footer__link">Contact</Link>
            </li>
            <li className="footer__item">
              <Link to="/services" className="footer__link">Services</Link>
            </li>
          </ul>
        </nav>

        {/* O'ng tomon: Mualliflik huquqi yoki ijtimoiy tarmoqlar qismi */}
        <div className="footer__copyright">
          <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer