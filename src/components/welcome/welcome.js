import React from "react"
import { section, title } from './welcome.module.css'

const Welcome = () => {
  return (
    <div className={section}>
      <div className={title}>
        <h1>Bienvenue sur mon site</h1>
      </div>
    </div>
  )
}

export default Welcome