import React from "react"
import { section, wave } from '../projects/projects.module.css'

const Projects = () => {
  return (
    <div className={section}>
      <svg className={wave} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fillOpacity="1" d="M0,192L34.3,208C68.6,224,137,256,206,256C274.3,256,343,224,411,192C480,160,549,128,617,149.3C685.7,171,754,245,823,250.7C891.4,256,960,192,1029,149.3C1097.1,107,1166,85,1234,74.7C1302.9,64,1371,64,1406,64L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
      </svg>      

      {/* <svg className={blob} viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="a" r="100%" cx="50%" cy="50%">
            <stop offset="0%" stopColor="var(--gradientColor2)" />
            <stop offset="100%" stopColor="var(--gradientColor1)" />
          </radialGradient>
          <clipPath id="b">
            <path fill="currentColor" d="M783.5 679q2.5 179-179 169T266 763q-157-75-103.5-237.5t159-254.5q105.5-92 262-82t177 160.5Q781 500 783.5 679Z" />
          </clipPath>
        </defs>
        <path clipPath="url(#b)" fill="url(#a)" d="M783.5 679q2.5 179-179 169T266 763q-157-75-103.5-237.5t159-254.5q105.5-92 262-82t177 160.5Q781 500 783.5 679Z" />
      </svg> */}
    </div>
  )
}

export default Projects
