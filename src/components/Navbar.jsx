import React from 'react'
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
      <nav className="nav">
      <div className="container">
        <div className="nav_box">
          <a href="/" className="nav_logo">
            <img src="" alt="" />
            <span>Portfolio</span>
          </a>
          <ul className="nav_list">
          <Link to="about me" smooth={true} duration={500} className="nav_link">
                About me
              </Link>
            <Link to="skills" smooth={true} duration={500} className="nav_link">
                Skills
              </Link>
              <Link to="projects" smooth={true} duration={500} className="nav_link">
                Projects
              </Link>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar