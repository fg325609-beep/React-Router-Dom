import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
        <h1>logo</h1>
        <ul>
            <li><Link to={about}></Link>Abaut</li>
            <li><Link to={contact}></Link>Contact</li>
            <li><Link to={services}></Link>Services</li>
            </ul>
    </div>
  )
}

export default Header