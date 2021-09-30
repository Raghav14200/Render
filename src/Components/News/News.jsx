import React from 'react'
import './News.css';
import news1 from '../../image/news-1.jpg'
import news2 from '../../image/news-2.jpg'
import news3 from '../../image/news-3.jpg'
import {LocationOn} from '@material-ui/icons';

function News() {

    return (
        <div className="news__container">
            <h1>News and Events</h1>
        <div className="news">
            <div className="news__main fade-up">
                <img src={news1} className="news__main_img"  />
                <p className="news__tag gold">News</p>
                <div >
                <h3 className="news__padding">The rise of the gig economony spells the end for these workers the old system</h3>
                <p>17hours ago</p>
                </div>
            </div>
            
            <div className="news__aside">
                <div className='fade-up'>
                    <div >
                        <img src={news2}  />
                        <p className="news__tag skyblue">Events</p>
                    </div>
                    <div >
                        <h3 className="news__padding">Job Opportunities:</h3>
                        <h3>Digital, Marketing</h3>
                        <p className="news__p"><LocationOn/> Alaska, August 6,2021</p>    
                    </div>
                </div>
                <div className='fade-up'>
                    <div>
                    <img src={news3} alt="" />
                    <p className="news__tag green">Events</p>
                    </div>
                    <div>
                        <h3 className="news__padding">What happened to new viral video?</h3>
                        <p>6 days ago</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default News
