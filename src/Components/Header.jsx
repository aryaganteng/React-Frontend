import React from 'react'
import {Link} from 'react-scroll';

function Header() {
    return (
        <div id="main">
            <div className="header-heading">
                <h3>Let's build your business</h3>
                <h1><span>SOFIA</span> STUDIO<br/>BETTER WITH US</h1>
                <p className="details">The team is in a very good environment. 
                <br/>you can see theirprofile in detail. 
                <br/>they are professional people in their field.</p>
                <div className="header-btns">
                    <Link to ="products" className="header-btn" smooth={true} duration={800}>Get Started</Link>
                </div>
            </div>
        </div>
    )
}

export default Header
