import React from 'react'
import PortfolioItem from '../PortfolioItem/PortfolioItem'
import './Portfolio.css';
import portfolio2 from '../../image/portfolio-2.jpg';
import portfolio1 from '../../image/portfolio-1.jpg';
import portfolio3 from '../../image/portfolio-3.jpg';
import portfolio4 from '../../image/portfolio-4.jpg';

function Portfolio() {

    return (
        <section id="portfolio">
        <div className="portfolio__container">
        <h1>Portfolio</h1>
        <div className="portfolio">
            <div className="">
                <div className='fade-up'>
                <PortfolioItem src={portfolio1} title="Effortless" subheading="Branding" color="purple"/>
                </div>
                <div className='fade-up'>
                <PortfolioItem  src={portfolio3} title="Health Technolgy" subheading="Art direction" color="grey"/>
                </div>
            </div>
            <div className="" >
            <div  className='fade-up'>
            <PortfolioItem  src={portfolio2} title="Maki" subheading="website" color="gold"/>
            </div>
            <div className='fade-up'>
            <PortfolioItem  src={portfolio4} title="The gig economy" subheading="Graphic" color="skyblue"/>
            </div>
            </div>
        </div>
        </div>
        </section>
    )
}

export default Portfolio
