import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <header className="header">
          <nav className="navbar">
            <ul className="nav-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#team">Meet the Team</a></li>
              <li><a href="#links">Links</a></li>
            </ul>
          </nav>
        </header>
      );
}

export default Header
