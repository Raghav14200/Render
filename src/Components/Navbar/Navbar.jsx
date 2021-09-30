import React from 'react'
import './Navbar.css'
import Scrollspy from 'react-scrollspy';

function Navbar() {
    return (
        <div className="navbar__container navbar-expand-lg navbar-light ">
            <div className="navbar">
            <div className="logo ">RENDER</div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" ></span>
            </button>
            <ul id="navbarSupportedContent" className="collapse">
                <Scrollspy items={['headsection','createsection','portfolio','news','contact']} currentClassName="active">
                    <li >
                    <a href="#headsection"> 
                        Home
                    </a>
                    </li>
                    <li >
                    <a href="#createsection">
                        Our Studio
                        </a>
                    </li>
                    <li>
                    <a href="#portfolio">
                        Portfolio
                    </a>
                    </li>
                    <li>
                    <a href="#news">
                        News and events
                    </a>
                    </li>
                    <li>
                    <a href="#contact">
                        Contact Us  
                </a>
                </li>
                </Scrollspy>
            </ul>
        </div>
        </div>
    )
}

export default Navbar
