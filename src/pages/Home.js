import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header1 from '../small element/Header1'
import CenterLogo from '../small element/CeterLogo'
import SlideShow from '../small element/SlideShow'
function Home() {
    const testing = (a, b) => {
        return
    }
    console.log(testing(1, 2))
    return (
        <div className='layout' style={{ backgroundImage: `url(https://wallpapercave.com/wp/BEiEJba.jpg)` }}>
            <Header1 />
            <CenterLogo />
            <SlideShow />
        </div>
    )
}

export default Home