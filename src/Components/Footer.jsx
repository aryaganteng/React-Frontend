import React from 'react'
import facebook from '../images/facebook.png';
import ig from '../images/ig.png';
import twit from '../images/twit.png';

function Footer() {
    return (
        <div id='footer'>
            <div className='gambar1'>
             <img src={facebook} alt='' />
             <img src={ig} alt='' />
             <img src={twit} alt='' />
             </div>
            <h3>Newsletter Subscription</h3>
            <div className='footer-input'>
                <input type='email' placeholder='subscribe to our newsletter'/>
                <a href='#'>Subscribe</a>
            </div>
        <div className='copy'>
        <p>Copyright 2021, All right reserved</p>
        </div>
        
        </div>
    )
}

export default Footer
