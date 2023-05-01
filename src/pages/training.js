import * as React from "react"
import Navbar from "../components/navbar/navbar"
import Trainings from "../components/trainings/trainings"

const trainingPage = () => {
  return (
    <main>
      <Navbar />
      <Trainings />
    </main>
  )
}

export default trainingPage

export const Head = () => <title>Trainings</title>
