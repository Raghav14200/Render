import React from 'react'
import './Headsection.css';
import Video from '../../video/video.mp4';

function Headsection() {
    return (
        <section id="headsection">
        <div className="headsection">
            <video src={Video} autoPlay muted loop></video>
            <div className="headsection__title">
                <h2>RENDER</h2>
                <p>Create a great video for your <span>website</span></p>
            </div>
        </div>
        </section>
    )
}

export default Headsection
