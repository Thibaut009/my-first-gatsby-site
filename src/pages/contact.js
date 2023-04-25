import * as React from "react"
import Navbar from "../components/navbar/navbar"
import Contact from "../components/contact/contact"

const ContactPage = () => {
  return (
    <main>
      <Navbar />
      <Contact />
    </main>
  )
}

export default ContactPage

export const Head = () => <title>Contact</title>
