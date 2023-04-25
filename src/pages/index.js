import * as React from "react"
import Navbar from "../components/navbar/navbar"
import Home from "../components/home/home"
import "../styles/global.css"

const IndexPage = () => {
  return (
    <main>
      <Navbar />
      <Home />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home</title>