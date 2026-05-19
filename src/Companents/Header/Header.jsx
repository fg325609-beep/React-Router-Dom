import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss' // SCSS faylini import qilamiz

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <Link to="/">logo</Link>
        </div>
        
        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__item">
              <Link to="/about" className="header__link">About</Link>
            </li>
            <li className="header__item">
              <Link to="/contact" className="header__link">Contact</Link>
            </li>
            <li className="header__item">
              <Link to="/services" className="header__link">Services</Link>
            </li>
          </ul>
        </nav>

        <div className="header__actions">
          <button type="button" className="header__btn">Submit</button>
        </div>
      </div>
    </header>
  )
}

export default Header