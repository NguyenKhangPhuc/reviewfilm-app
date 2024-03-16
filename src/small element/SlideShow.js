import React from 'react'
import { useState } from 'react'
function SlideShow() {
    const filmsrc = [
        { url: 'https://i.pinimg.com/564x/f0/0e/f4/f00ef4ef28062a3ffe32c80cfa039c86.jpg', name: 'Interstella' },
        { url: 'https://i.pinimg.com/564x/b9/49/f5/b949f577620cb593dd17ea94c57bd1c1.jpg', name: 'Avengers' },
        { url: 'https://i.pinimg.com/564x/cb/58/47/cb584713fd542b2c0bf473f066da12a1.jpg', name: 'Catchmeifyoucan' },
        { url: 'https://i.pinimg.com/564x/8b/ae/2c/8bae2cd680a1e182517e9758d59814f4.jpg', name: 'Titanic' },
        { url: 'https://i.pinimg.com/564x/28/b3/fb/28b3fbe4410f75bb1f0aa953be6d5afa.jpg', name: 'Gravity' },
    ]
    const [currentindex, setCurrentindex] = useState(0)
    const Gobackslide = () => {
        const newindex = currentindex == 0 ? filmsrc.length - 1 : currentindex - 1
        setCurrentindex(newindex)
    }
    const Gonextslide = () => {
        const newindex = currentindex == filmsrc.length - 1 ? 0 : currentindex + 1
        setCurrentindex(newindex)
    }
    const Gotoslide = (slideindex) => {
        setCurrentindex(slideindex)
    }
    return (
        <div className='bottom'>
            <div className='bottom1'><button className='signinbutton'>Sign in</button></div>
            <div className='bottom2'>
                <p className='slidetext'>MOST RATED FILM THIS WEEK </p>
                <p className='star'>☆☆☆☆☆</p>
            </div>
            <div className='slidefilm' style={{ backgroundImage: `url(${filmsrc[currentindex].url})` }}>
                <div className='leftbutton' onClick={() => Gobackslide()}>◀</div>
                <div className='rightbutton' onClick={() => Gonextslide()}>▶</div>
                <div className='radio'>
                    {filmsrc.map((slide, slideindex) => {
                        return (
                            <div className='radio1' onClick={() => Gotoslide(slideindex)}>◆</div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default SlideShow