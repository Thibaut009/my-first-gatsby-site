import * as React from "react"
import Navbar from "../components/navbar/navbar"
import Contact from "../components/contact/contact"

const ProjectsPage = () => {
  return (
    <main>
      <Navbar />
      <Contact />
    </main>
  )
}

export default ProjectsPage

export const Head = () => <title>Projects</title>
