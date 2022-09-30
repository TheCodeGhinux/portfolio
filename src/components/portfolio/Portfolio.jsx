import React from 'react'
import './portfolio.css'
import IMG1 from'../../assets/portfolio1.jpg'
import IMG2 from'../../assets/portfolio2.jpg'
import IMG3 from'../../assets/scraper.png'
import IMG4 from'../../assets/watermark.jfif'
import IMG5 from'../../assets/store.png'
import IMG6 from'../../assets/twitter.webp'

const data = [
  {
    id: 1,
    image:IMG1,
    title: 'Stock price Prediction',
    github: 'https://github.com/thecodeghinux/stock-price-analysis',
    demo: 'https://github.com/thecodeghinux',
  },
  {
    id: 2,
    image:IMG2,
    title: 'Web3 Landing Page',
    github: 'https://github.com/thecodeghinux/web3-landing-page',
    demo: 'https://github.com/thecodeghinux',
  },
  {
    id: 3,
    image:IMG3,
    title: 'Web Scraper',
    github: 'https://github.com/thecodeghinux/web-scraper',
    demo: 'https://github.com/thecodeghinux',
  },
  {
    id: 4,
    image:IMG4,
    title: 'Image Watermarking GUI',
    github: 'https://github.com/thecodeghinux/image-watermark-gui',
    demo: 'https://github.com/thecodeghinux',
  },
  {
    id: 5,
    image:IMG5,
    title: 'Gadget Store Website',
    github: 'https://github.com/thecodeghinux/tcg-website',
    demo: 'https://github.com/thecodeghinux',
  },
  {
    id: 6,
    image:IMG6,
    title: 'Twitter Bot',
    github: 'https://github.com/thecodeghinux/twitter-bot',
    demo: 'https://github.com/thecodeghinux',
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio-item">
              <div className="portfolio-item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio-item-cta">
                  <a href={github} className="btn">Github</a>
                  <a href={demo} className="btn btn-primary">Live Demo</a>
                </div>
              </article>
            )
          })
        }
        
        
        {/* <article className="portfolio-item">
          <div className="portfolio-item-image">
              <img src={IMG2} alt="" />
            </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio-item-cta">
              <a href="https://github.com/thecodeghinux" className="btn">Github</a>
              <a href="https://github.com/thecodeghinux" className="btn btn-primary">Live Demo</a>
            </div>
        </article>

        <article className="portfolio-item">
          <div className="portfolio-item-image">
              <img src={IMG3} alt="" />
            </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio-item-cta">
              <a href="https://github.com/thecodeghinux" className="btn">Github</a>
              <a href="https://github.com/thecodeghinux" className="btn btn-primary">Live Demo</a>
            </div>
        </article>

        <article className="portfolio-item">
          <div className="portfolio-item-image">
              <img src={IMG4} alt="" />
            </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio-item-cta">
              <a href="https://github.com/thecodeghinux" className="btn">Github</a>
              <a href="https://github.com/thecodeghinux" className="btn btn-primary">Live Demo</a>
            </div>
        </article>

        <article className="portfolio-item">
          <div className="portfolio-item-image">
              <img src={IMG5} alt="" />
            </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio-item-cta">
              <a href="https://github.com/thecodeghinux" className="btn">Github</a>
              <a href="https://github.com/thecodeghinux" className="btn btn-primary">Live Demo</a>
            </div>
        </article>

        <article className="portfolio-item">
          <div className="portfolio-item-image">
              <img src={IMG6} alt="" />
            </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio-item-cta">
              <a href="https://github.com/thecodeghinux" className="btn">Github</a>
              <a href="https://github.com/thecodeghinux" className="btn btn-primary">Live Demo</a>
            </div>
        </article> */}

      </div>
    </section>
  )
}

export default Portfolio