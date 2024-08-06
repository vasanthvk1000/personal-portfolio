import React from 'react'
import './myprojects.css'
// import IMG1 from '../../assets/img5.jpg'
// import IMG2 from '../../assets/img2.png'
import IMG6 from '../../assets/img6.jpeg'
import IMG7 from '../../assets/img7.jpeg'
import IMG8 from '../../assets/img8.png'

const Myprojects = () => {
  return (
    <section id='myprojects'>

      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">

       
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG8} alt="" />
            </div>
            <h3>My Portfolio(This website)</h3>
            <small className='text-light'>ReactJs</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/vasanthvk1000/Portfolio.git" target="_blank" rel='noreferrer' className='btn'>Github</a>
              {/* <a href="" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>   */}
            </div>
            
        </article>


        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG7} alt="" />
            </div>
            <h3>CRUD Application</h3>
            <small className='text-light'> ReactJs | Node.js | Express.js | MongoDB</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/vasanthvk1000/CRUD_Application.git" target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>
              
        </article>




        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG6} alt="" />
            </div>
            <h3>Movie Streaming Application</h3>
            <small className='text-light'> ReactjS | Node.js |  Express.js  |  Firebase  |  MongoDB </small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/vasanthvk1000/Movie-Streaming-Frond-end.git" target="_blank" rel='noreferrer' className='btn'>Github</a> 
            </div>
            
        </article>
       
      </div>
    </section>
  )
}

export default Myprojects