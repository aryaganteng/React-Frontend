import React from 'react'
import Productbox from './Productbox'
import pimage1 from '../images/dev.png'
import pimage2 from '../images/des.png'
import pimage3 from '../images/vid.png'

function Products() {
    return (
    <div id="products">
        <h1>CHOOSE SERVICE</h1>
        <p>We provide attractive options for you</p>
        <div className="a-container">
            <Productbox image={pimage1} title="Development"/>
            <Productbox image={pimage2} title="Design"/>
            <Productbox image={pimage3} title="Video"/>
        </div>
    </div>
    )
}

export default Products
