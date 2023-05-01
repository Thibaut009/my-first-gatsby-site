import React from "react"
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import { section, contact , imageContainer, infoContainer, contactItem, icon, link, address } from '../contact/contact.module.css'

const Contact = () => {
  return (
    <div className={section}>
      <div className={contact}>
        <div className={imageContainer}>
          <img src="https://via.placeholder.com/150" alt="placeholder" />
        </div>
        <div className={infoContainer}>
          <div className={contactItem}>
            <FaPhoneAlt className={icon} />
            <a href="tel:+1234567890" className={link}>+1 (234) 567-890</a>
          </div>
          <div className={contactItem}>
            <FaEnvelope className={icon} />
            <a href="mailto:contact@example.com" className={link}>contact@example.com</a>
          </div>
          <div className={contactItem}>
            <FaMapMarkerAlt className={icon} />
            <span className={address}>1234 Main Street, Anytown USA</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
