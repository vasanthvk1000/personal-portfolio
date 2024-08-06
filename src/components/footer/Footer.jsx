import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
// import {BsMedium} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
        <a href="#home" className='footer__logo'>VASANTHA KUMAR</a>
        <ul className="permalinks">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#myprojects">My Projects</a></li>
            <li><a href="#contacts">Contact</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://www.linkedin.com/in/vasanth-kumar-22179421a"><BsLinkedin/></a>
          <a href="https://github.com/vasanthvk1000"><BsGithub/></a>
          
        </div>

        <div className="footer__copyright">
            <small>&copy; Vasantha kumar. All rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer