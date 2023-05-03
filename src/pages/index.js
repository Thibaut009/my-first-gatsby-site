import * as React from "react"
import Navbar from "../components/navbar/navbar"
import Welcome from "../components/welcome/welcome"
import About from "../components/about/about"
import Skills from "../components/skills/skills"
import Contact from "../components/contact/contact"
import "../styles/global.css"

const IndexPage = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <About />
      <Skills />
      <Contact />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Welcome</title>