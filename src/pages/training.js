import * as React from "react"
import Navbar from "../components/navbar/navbar"
import About from "../components/about/about"

const trainingPage = () => {
  return (
    <main>
      <Navbar />
      <About />
    </main>
  )
}

export default trainingPage

export const Head = () => <title>Training</title>
