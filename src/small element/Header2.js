import React from 'react'
import { useState } from 'react'
function Header2() {
    const arr1 = [{ Tagname: 'Home' }
        , { Tagname: 'Movies' }
        , { Tagname: 'Celebrities' }
        , { Tagname: 'News' }]
    const arr2 = [{ Contact: 'Contact us' }, { Contact: 'Help' }, { Contact: 'Pages' }]

    const menu1 = [{ content: 'About us' }, { content: 'Content' }]
    const menu2 = [{ content2: 'Recommended' }, { content2: 'Most rated' }, { content2: 'Most popular' }, { content2: 'Common' }]
    const menu3 = [{ content3: 'Recommended' }, { content3: 'Most rated' }, { content3: 'Most popular' }, { content3: 'Common' }]
    const menu4 = [{ content4: 'About us' }, { content4: 'Content' }]
    const [opacity1, setOpacity1] = useState(0)
    const [opacity2, setOpacity2] = useState(0)
    const [opacity3, setOpacity3] = useState(0)
    const [opacity4, setOpacity4] = useState(0)
    const handleOnmouseover = (index) => {
        if (index + 1 == 1) {
            setOpacity1(1)
        } else if (index + 1 == 2) {
            setOpacity2(1)
        } else if (index + 1 == 3) {
            setOpacity3(1)
        } else if (index + 1 == 4) {
            setOpacity4(1)
        }
    }
    const handleOnmouseleave = (index) => {
        if (index + 1 == 1) {
            setOpacity1(0)
        } else if (index + 1 == 2) {
            setOpacity2(0)
        } else if (index + 1 == 3) {
            setOpacity3(0)
        } else if (index + 1 == 4) {
            setOpacity4(0)
        }
    }
    const handleOnmouseover1 = () => {
        setOpacity1(1)
    }
    const handleOnmouseleave1 = () => {
        setOpacity1(0)
    }
    const handleOnmouseover2 = () => {
        setOpacity2(1)
    }
    const handleOnmouseleave2 = () => {
        setOpacity2(0)
    }
    const handleOnmouseover3 = () => {
        setOpacity3(1)
    }
    const handleOnmouseleave3 = () => {
        setOpacity3(0)
    }
    const handleOnmouseover4 = () => {
        setOpacity4(1)
    }
    const handleOnmouseleave4 = () => {
        setOpacity4(0)
    }
    return (
        <div className='headercenter'>
            <div className='header'>
                <div className='header1'>
                    <div className='logo'>NKP</div>
                    {arr1.map((tagname, index) => {
                        return (
                            <div className='tagname' onMouseOver={() => handleOnmouseover(index)} onMouseLeave={() => handleOnmouseleave(index)}>{tagname.Tagname} ➔</div>
                        )
                    })}
                </div>
                <div className='header2'>
                    {arr2.map((context, index2) => {
                        return (
                            <div className='context'>{context.Contact}</div>
                        )
                    })}
                </div>
            </div>
            <div className='center'>
                
                    
                
                <div className='menu'>
                <div className='introducetext1'></div>
                    <div className='menu1' style={{ opacity: opacity1 }} onMouseOver={() => handleOnmouseover1()} onMouseLeave={() => handleOnmouseleave1()}>
                        {menu1.map((menu1content, index1) => {
                            return (
                                <div className='menu1content'>{menu1content.content}</div>
                            )
                        })}
                    </div>
                    <div className='menu2' style={{ opacity: opacity2 }} onMouseOver={() => handleOnmouseover2()} onMouseLeave={() => handleOnmouseleave2()}>
                        {menu2.map((menu2content, index2) => {
                            return (
                                <div className='menu2content'>{menu2content.content2}</div>
                            )
                        })}
                    </div>
                    <div className='menu3' style={{ opacity: opacity3 }} onMouseOver={() => handleOnmouseover3()} onMouseLeave={() => handleOnmouseleave3()}>
                        {menu3.map((menu3content, index3) => {
                            return (
                                <div className='menu3content'>{menu3content.content3}</div>
                            )
                        })}
                    </div>
                    <div className='menu4' style={{ opacity: opacity4 }} onMouseOver={() => handleOnmouseover4()} onMouseLeave={() => handleOnmouseleave4()}>
                        {menu4.map((menu4content, index4) => {
                            return (
                                <div className='menu4content' >{menu4content.content4}</div>
                            )
                        })}
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Header2