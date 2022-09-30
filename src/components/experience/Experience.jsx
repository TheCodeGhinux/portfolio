import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'


const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience-container">
        <div className="experience-frontend">
          <h3>Web Development</h3>
          <div className="experience-content">
            <article className="experience-details">
              <BsPatchCheckFill className='experience-details-icon' />
              <div>
                <h4>HTML/CSS</h4>
                <small className="experience-details" >Experienced</small>
              </div>
            </article>
            
            <article className="experience-details">
              <BsPatchCheckFill className='experience-details-icon' />
              <div>
                <h4>ReactJs</h4>
                <small className="experience-details" >Experienced</small>
              </div>
            </article>
            
            <article className="experience-details">
              <BsPatchCheckFill className='experience-details-icon' />
              <div>
                <h4>NextJs</h4>
                <small className="experience-details" >Experienced</small>
              </div>
            </article>
            
            <article className="experience-details">
              <BsPatchCheckFill className='experience-details-icon' />
              <div>
                <h4>TailwindCss</h4>
                <small className="experience-details" >Experienced</small>
              </div>
            </article>
            
            <article className="experience-details">
              <BsPatchCheckFill className='experience-details-icon' />
              <div>
                <h4>Javasript</h4>
                <small className="experience-details" >Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className="backend-frontend">
          <h3>Software Development</h3>
          <div className="experience-content">
            <article className="experience-details">
              <BsPatchCheckFill className='experience-details-icon' />
              <div>
                <div>
                  <h4>Python</h4>
                  <small className="experience-details" >Experienced</small>
                </div>
              </div>
            </article>
            
            <article className="experience-details">
              <BsPatchCheckFill className='experience-details-icon' />
              <div>
                <div>
                  <h4>Machine Learning</h4>
                  <small className="experience-details" >Experienced</small>
                </div>
              </div>
            </article>
            
            <article className="experience-details">
              <BsPatchCheckFill className='experience-details-icon' />
              <div>
                <h4>AI and DL</h4>
                <small className="experience-details" >Experienced</small>
              </div>
            </article>
            
            {/* <article className="experience-details">
              <BsPatchCheckFill className='experience-details-icon' />
              <div>
                <h4>Go</h4>
                <small className="experience-details" >Experienced</small>
              </div>
            </article> */}
            
            <article className="experience-details">
              <BsPatchCheckFill className='experience-details-icon' />
              <div>
                <h4>Javascript</h4>
                <small className="experience-details" >Experienced</small>
              </div>
            </article>
          </div>  
        </div>

      </div>
    </section>
  )
}

export default Experience





