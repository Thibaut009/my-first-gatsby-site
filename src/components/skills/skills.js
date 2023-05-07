import React from "react"
import { section, svg } from '../skills/skills.module.css'

const Skills = () => {
  return (
    <div className={section}>
      <svg className={svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fillOpacity="1" d="M0,128L120,122.7C240,117,480,107,720,117.3C960,128,1200,160,1320,176L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
      </svg>
    </div>
  )
}

export default Skills