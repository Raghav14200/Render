import React from 'react'
import {LocationOn,Facebook,Twitter,WhatsApp,Instagram,YouTube} from '@material-ui/icons';
import './Footer.css'


function Footer() {
    return (
        <div className='footer'>
            <div className="footer__main">
                <h3><LocationOn/> State of Rio de Janeiro,Brazil</h3>
                <p>info@company.com</p>
            </div>
            <div className="footer__aside">
                <div>
                <p>Copyright &#169; Nomad force 2021;</p>
                <p>Design Template</p>
                </div>
                <div className='footer__icons'>
                    <Facebook/>
                    <Twitter/>
                    <WhatsApp/>
                    <Instagram/>
                    <YouTube/>
                </div>
            </div>
        </div>
    )
}

export default Footer
