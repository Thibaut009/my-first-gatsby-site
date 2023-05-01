import React from "react"
import { FaSun, FaMoon } from "react-icons/fa"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import '../darkmode/darkmode.css'

const Darkmode = () => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <label className="switch dark-mode-toggle">
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={() => toggleTheme(theme === "dark" ? "light" : "dark")}
          />
          <div className="slider round">
            {theme === "dark" ? (
              <FaSun className="icon" />
            ) : (
              <FaMoon className="icon" />
            )}
          </div>
        </label>
      )}
    </ThemeToggler>
  )
}

export default Darkmode
