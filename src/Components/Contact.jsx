import React from 'react'

function Contact() {
    return (
        <div id="contact">
            <h1>CONTACT US</h1>
            <form>
                <input type="text" placeholder="Full Name"/>
                <input type="email" placeholder="Type Your Email"/>
                <textarea placeholder="Write Here..."></textarea>
                <input type="submit" value="CLICK"/>
            </form>
        </div>
    )
}

export default Contact
