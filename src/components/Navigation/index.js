import React from 'react'
import "./navigation.css"
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';



const Navigation = ({children}) => {

  return (
    <div className="home-container">
      <div className="navigation-container">
        <nav className="navigation">
          <ul className="navigation-list">
            {children}
          </ul>
        </nav>
      </div>
      
      <div className="section">
        <Outlet/>
      </div>

      <Footer/>
    </div>
  )
}

export const NavItem = ({icon, to, tag}) => {
  return (
    <li className="navigation-item">
      <Link to={to}>
        {icon}
      </Link>
    </li>
  )
}

export default Navigation;