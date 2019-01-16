import React from 'react'
import './homepic.scss'
import mainpic from '../../images/sugarboy_mainpic.jpg'
import Home from '../Home/Home'

function HomePic() {

    return (
        <div className='homePicCont'>
            <Home/>
            <div className='mainHome'>
                <img className='mainPic' src={mainpic} alt='baker'/>
            </div>
        </div>
    )
}

export default HomePic