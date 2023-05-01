import * as React from "react"
import Navbar from "../components/navbar/navbar"
import Projects from "../components/projects/projects"

const ProjectsPage = () => {
  return (
    <main>
      <Navbar />
      <Projects />
    </main>
  )
}

export default ProjectsPage

export const Head = () => <title>Projects</title>
