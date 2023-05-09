import React from 'react'

import Facebook from '../images/Facebook.jpg'
import instagram from '../images/instagram-logo.png'
import twitter from '../images/twitter-logo.jpg'
import phone from '../images/phone.jpg'

const Footer = () => {
  return (
    <>
      <div>
        <ul className="footer">
          <li>
            <a href="https://www.facebook.com/Baecakeske/">
              <img
                className="footer-images"
                src={Facebook}
                alt="Facebook-logo"
                style={{ width: '64px', height: '64px' }}
              />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/baecakeske/?hl=en">
              <img
                className="footer-images"
                src={instagram}
                alt="Instagram-logo"
                style={{ width: '64px', height: '64px' }}
              />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/baecakeske?lang=en">
              <img
                className="footer-images"
                src={twitter}
                alt="Twitter-logo"
                style={{ width: '64px', height: '64px' }}
              />
            </a>
          </li>
          <li>
            <a href="tel:0797057833">
              <img
                className="footer-images"
                src={phone}
                alt="Phone-logo"
                style={{ width: '64px', height: '64px' }}
              />
            </a>
          </li>
          <p className="copyrights">&copy; Copyright 2023 Lena Wamugunda</p>
        </ul>
      </div>
    </>
  )
}
export default Footer
