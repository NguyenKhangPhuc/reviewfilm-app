import React from 'react'
import { Link } from 'react-router-dom'
function CenterLogo() {
    return (
        <div className='centerlogo'>
            <div className='N'>N</div>
            <div className='K'>K</div>
            <div className='P'>P</div>
            <div className='WORLD'>WORLD</div>
            <Link to={'/Film'}><button className='explorebutton'>Explore more</button></Link>
        </div>
    )
}

export default CenterLogo