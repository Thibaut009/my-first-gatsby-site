import React from "react"
import { FaSun, FaMoon } from "react-icons/fa"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import '../darkmode/darkmode.css'

const Darkmode = () => {
  return (
    <ThemeToggler>
    {({ theme, toggleTheme }) => (
      <button
        className="dark-mode-toggle"
        onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? (
          <FaSun />
        ) : (
          <FaMoon />
        )}
      </button>
    )}
  </ThemeToggler>
  )
}

export default Darkmode
