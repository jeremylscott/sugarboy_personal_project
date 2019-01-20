import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import './homepic.scss'
import mainpic from '../../images/sugarboy_mainpic.jpg'
import mainpic9 from '../../images/mainpic9.jpg'
import mainpic8 from '../../images/mainpic8.jpg'
import mainpic5 from '../../images/mainpic5.jpg'
import Home from '../Home/Home'

function HomePic(props) {
    
    if(props.user.isadmin === true) {
        return <Redirect to='/admin'/>   //  Go to admin portal if user is an admin
    }

    return (
        <div className='homePicCont'>
            <Home/>
            <div className='mainHome'>
                <img className='mainPic9' src={mainpic9} alt='Donuts'/>
                <img className='mainPic8' src={mainpic8} alt='Donuts'/>
                <img className='mainPic5' src={mainpic5} alt='Donuts'/>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => state 

export default connect(mapStateToProps)(HomePic)