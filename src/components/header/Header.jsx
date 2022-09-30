import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/ghaj4.png'
import HeaderSocials from './HeaderSocials'
import TypeAnimation from 'react-type-animation';

const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <h5>Hi, I'm</h5>
        <h2 className='name' >Ayomide Ilesanmi</h2>
        <h2 className='alias' >The Code Ghinux</h2>
        {/* <h5 className="text-light">Python Developer, Front-end Developer, ML Engineer, Techie</h5> */}
        {/* pre-define the width of wrapper to prevent layout shift! */}
            <div className='animation-div' >
            <TypeAnimation
            cursor={true}
            sequence={[
              'Python Developer',
              4000,
              'Machine Learning Engineer',
              4000,
              'Front-end Developer',
              4000,
              'Cybersec Analyst',
              4000,
              '!Nerd',
              4000,
            ]}
            wrapper="h2"
            repeat={Infinity}
           />
            </div>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll-down' >Scroll Down</a>



      </div>
    </header>
  )
}

export default Header