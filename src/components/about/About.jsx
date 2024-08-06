import React from 'react'
import './about.css'
import myImage from '../../assets/img.png'
import {GiGraduateCap} from 'react-icons/gi'
import {BsBookmarkStar} from 'react-icons/bs'
// import {TfiWorld} from 'react-icons/tfi'

const About = () => {
  return (
    <section id='about'>
      
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

          <div className="about__me">
            <div className="about__me-image">
                <img src={myImage} alt="Me" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">

              <article className='about__card'>
                  <GiGraduateCap className='about__icon'/>
                  <h5>Course</h5>
                  <small>Fullstack Developer <br />(2023 - 2024) <br /><i>Coimbatore</i></small>
              </article>

              <article className='about__card'>
                  <GiGraduateCap className='about__icon'/>
                  <h5>Degree</h5>
                  <small>Master of Computer Complication <br />(2020 - 2022) <br /><i>Nehru College of Management</i> <br /> <i>Coimbatore</i></small>
              </article>

              <article className='about__card'>
                  <BsBookmarkStar className='about__icon'/>
                  <h5>GPA</h5>
                  <small>7.93</small>
              </article>

              {/* <article className='about__card'>
                  <TfiWorld className='about__icon'/>
                  <h5>Domains</h5>
                  <small>
                    <ul>
                      <li>Net Centric</li>
                      <li>Mobile Applications</li>
                    </ul>
                  </small>
              </article> */}

              

            </div>
            <p>
            I am a motivated and versatile individual, always eager to take on new challenges. 
            With a passion for learning I am dedicated to delivering high-quality results. 
            With a positive attitude and a growth mindset,  I am ready to make a meaningful 
            contribution and achieve great things
            </p>

          </div>
      </div>
    </section>
  )
}

export default About