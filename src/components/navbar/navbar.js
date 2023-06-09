import React, { useState } from "react"
import { Link } from "gatsby"
import { FaBars, FaTimes } from "react-icons/fa"
import Darkmode from "../darkmode/darkmode"
import "../navbar/navbar.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Portfolio
      </Link>
      <div className="menu-darkmode">
        <div className="navbar-menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
          <li>
            <Link to="/">Welcome</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/training">Trainings</Link>
          </li>
        </ul>
        <Darkmode />
      </div>
    </nav>
  )
}

export default Navbar
