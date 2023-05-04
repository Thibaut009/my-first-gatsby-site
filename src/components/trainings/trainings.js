import React from "react"
import { section, svg } from '../trainings/trainings.module.css'

const Trainings = () => {
  return (
    <div className={section}>
      <svg className={svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fillOpacity="1" d="M0,192L34.3,208C68.6,224,137,256,206,256C274.3,256,343,224,411,192C480,160,549,128,617,149.3C685.7,171,754,245,823,250.7C891.4,256,960,192,1029,149.3C1097.1,107,1166,85,1234,74.7C1302.9,64,1371,64,1406,64L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
      </svg>
    </div>
  )
}

export default Trainings
