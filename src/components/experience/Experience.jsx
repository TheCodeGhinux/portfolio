import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

import '../services/services.css'
import {BiCheck} from 'react-icons/bi'


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


      <div className="container services-container">
        <article className="service">
          <div className="service-head">
            <h3>FrontEnd Development</h3>
          </div>

          <ul className="service-list">
            <li>
              <BiCheck className='service-list-icon' />
              <p>Built single website with ReactJs.</p>
            </li>
            
            <li>
              <BiCheck className='service-list-icon' />
              <p>Built mutliple pages website with NextJs.</p>
            </li>
            
            <li>
              <BiCheck className='service-list-icon' />
              <p>Produced websites compatible with multiple browsers.</p>
            </li>
            
            <li>
              <BiCheck className='service-list-icon' />
              <p>Teamed on user-centric design strategy in the translation of  UX and business requirements into coded solutions.</p>
            </li>
            
            <li>
              <BiCheck className='service-list-icon' />
              <p>Translated verbal customer requirements into written use cases and testable development stories.</p>
            </li>

          </ul>
        </article>

        <article className="service">
          <div className="service-head">
            <h3>Machine Learning & Artificial Intelligence</h3>
          </div>

          <ul className="service-list">
            <li>
              <BiCheck className='service-list-icon' />
              <p>Proficiency in Data analysis with Machine learning libraries.</p>
            </li>
            
            <li>
              <BiCheck className='service-list-icon' />
              <p>Built image classification with TensorFlow and other ML libraries.</p>
            </li>
            
            <li>
              <BiCheck className='service-list-icon' />
              <p>Built  models for prediction with machine learning libraries.</p>
            </li>
            
            <li>
              <BiCheck className='service-list-icon' />
              <p>Built  models for classificatin with machine learning libraries.</p>
            </li>
            
            <li>
              <BiCheck className='service-list-icon' />
              <p>Built AI models for face recognition, Image collage.</p>
            </li>

          </ul>
        </article>

        <article className="service">
          <div className="service-head">
            <h3>Pyhton </h3>
          </div>

          <ul className="service-list">
            <li>
              <BiCheck className='service-list-icon' />
              <p>Collaborated effectively with members of software development team to develop processes to automate the task and increase work efficiency.</p>
            </li>
            
            <li>
              <BiCheck className='service-list-icon' />
              <p>Modified existing Python software to correct coding errors, upgrade interfaces and improve overall performance.</p>
            </li>
            
            <li>
              <BiCheck className='service-list-icon' />
              <p> Handled scripting tasks for debugging and automation using Python.</p>
            </li>

            <li>
              <BiCheck className='service-list-icon' />
              <p>Designed front-end websites relying heavily on data-driven back-end processing.</p>
            </li>
            
            <li>
              <BiCheck className='service-list-icon' />
              <p>Worked independently to design, develop and test code.</p>
            </li>
            
          </ul>
        </article>
      </div>


    </section>
  )
}

export default Experience





