import React from "react"
import { section, svg } from './welcome.module.css'

const Welcome = () => {
  return (
    <section className={section}>
      <svg className={svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fillOpacity="1" d="M0,288L40,256C80,224,160,160,240,165.3C320,171,400,245,480,282.7C560,320,640,320,720,298.7C800,277,880,235,960,202.7C1040,171,1120,149,1200,154.7C1280,160,1360,192,1400,208L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
      </svg>
    </section>
  )
}

export default Welcome
