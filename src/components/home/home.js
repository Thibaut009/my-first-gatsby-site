import React from "react"
import { home , title} from './home.module.css'

const Home = () => {
  return (
    <div className={home}>
      <div className={title}>
        <h1>Bienvenue sur mon site</h1>
      </div>
    </div>
  )
}

export default Home
