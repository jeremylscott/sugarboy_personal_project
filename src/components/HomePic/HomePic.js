import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import './homepic.scss'
import mainpic9 from '../../images/mainpic9.jpg'
import mainpic8 from '../../images/mainpic8.jpg'
import mainpic5 from '../../images/mainpic5.jpg'
import mainpic3 from '../../images/mainpic3.jpg'
import mainpic4 from '../../images/mainpic4.jpg'
import mainpic7 from '../../images/mainpic7.jpg'
import Home from '../Home/Home'
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

function HomePic(props) {

     const images = [
        '../../images/mainpic9.jpg',
        '../../images/mainpic8.jpg',
        '../../images/mainpic5.jpg'
     ]
    
    if(props.user.isadmin === true) {
        return <Redirect to='/admin'/>   //  Go to admin portal if user is an admin
    }

    return (
        <div className='homePicCont'>
            <Home/>
            <div className='mainHome'>
                <Carousel
                    animationSpeed={2000}
                    autoPlay={5000}
                    stopAutoPlayOnHover
                    centered
                    infinite>
                    <img className='mainPic9' src={mainpic9} alt='donuts'/>
                    <img className='mainPic9' src={mainpic8} alt='donuts'/>
                    <img className='mainPic9' src={mainpic5} alt='donuts'/>
                    <img className='mainPic9' src={mainpic4} alt='donuts'/>
                    <img className='mainPic9' src={mainpic7} alt='donuts'/>
                </Carousel>









                {/* <img className='mainPic9' src={mainpic9} alt='Donuts'/>
                <img className='mainPic8' src={mainpic8} alt='Donuts'/>
                <img className='mainPic5' src={mainpic5} alt='Donuts'/> */}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => state 

export default connect(mapStateToProps)(HomePic)