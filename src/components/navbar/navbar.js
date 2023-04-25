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
        Mon Site
      </Link>
      <Darkmode />
      <div className="navbar-menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/about">À propos</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar