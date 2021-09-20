import React from 'react'
import aboutimage from '../images/ser.png'


function About() {
    return (
        <div id="about">
            <div className="about-text">
                <h1>WHY SHOULD COOPERATE WITH US?</h1>
                <p>1. Quick Response => We attach great importance to communication </p>
                <p>2. Professional workers => Our workers are very professional and need not be doubted</p>
                <p>3. Affordable prices => We provide prices in accordance with the budget you have</p>
                <button>Read More</button>
            </div>
            <div className="about-image">
                <img src={aboutimage} alt="" />
            </div>
        </div>
    )
}

export default About
