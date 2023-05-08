import React from "react"
import { section, wave, about, blob, text, title } from '../about/about.module.css'
import thibaut from "../../images/thibaut.png"

const About = () => {
  return (
    <section className={section}>
      <svg className={wave} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fillOpacity="1" d="M0,128L120,122.7C240,117,480,107,720,117.3C960,128,1200,160,1320,176L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
      </svg>

      <div className={about}>
        <svg className={blob} viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="a" r="100%" cx="50%" cy="50%">
              <stop offset="0%" stopColor="var(--gradientColor2)" />
              <stop offset="100%" stopColor="var(--gradientColor1)" />
            </radialGradient>
            <clipPath id="b">
              <path fill="currentColor" d="M783.5 679q2.5 179-179 169T266 763q-157-75-103.5-237.5t159-254.5q105.5-92 262-82t177 160.5Q781 500 783.5 679Z" />
            </clipPath>
            <pattern id="c" patternUnits="userSpaceOnUse" width="100%" height="100%">
              <image href={thibaut} width="65%" height="60%" x="20%" y="25%"/>
            </pattern>
          </defs>
          <g clipPath="url(#b)">
            <path fill="url(#a)" d="M783.5 679q2.5 179-179 169T266 763q-157-75-103.5-237.5t159-254.5q105.5-92 262-82t177 160.5Q781 500 783.5 679Z" />
          </g>
          <g clipPath="url(#b)">
            <rect fill="url(#c)" x="0" y="0" width="100%" height="100%" />
          </g>
        </svg>

        <div className={text}>
          <h2 className={title}>About Me</h2>
        </div>
      </div>
    </section>
  )
}

export default About
