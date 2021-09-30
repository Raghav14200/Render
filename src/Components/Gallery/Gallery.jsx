import React from 'react';
import gallery1 from'../../image/gallery-1.jpg';
import gallery2 from '../../image/gallery-2.jpg';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import './Gallery.css';


function Gallery() {
    return (
        <div className="gallery">
            <div className="gallery__main">
                <img src={gallery1}></img>
                <div className='flex'>
                    <h3 >We are idealistic and strategic thinkers</h3>
                    <p >Over six years in video buisness</p>
                    <div >
                    <h5 >Read News and Events</h5>
                    <h5 >Work with us</h5>
                    </div>
                </div>
            </div>
            <div className="gallery__aside" >
                <img src={gallery2}></img>
                <div className="gallery__sidetag">
                    <div className="">
                    <h2>Robinson H.</h2>
                    <p>Sales and marketing</p>
                    </div>
                    <div className="gallery__icons">
                        <NavigateBeforeIcon/>
                        <NavigateNextIcon/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery
