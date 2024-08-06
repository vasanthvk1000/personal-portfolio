import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
// import {BsMedium} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    
    <div className="header__socials">

        <a href="https://www.linkedin.com/in/vasanth-kumar-22179421a" target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href="https://github.com/vasanthvk1000" target="_blank" rel='noreferrer'><BsGithub/></a>
        {/* <a href="https://medium.com/@thakshiladb2000" target="_blank" rel='noreferrer'><BsMedium/></a> */}
    </div>
  )
}

export default HeaderSocials