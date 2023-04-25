import * as React from "react"
import Navbar from "../components/navbar/navbar"
import About from "../components/about/about"

const AboutPage = () => {
  return (
    <main>
      <Navbar />
      <About />
    </main>
  )
}

export default AboutPage

export const Head = () => <title>About</title>
