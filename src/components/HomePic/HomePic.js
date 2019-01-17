import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import './homepic.scss'
import mainpic from '../../images/sugarboy_mainpic.jpg'
import Home from '../Home/Home'

function HomePic(props) {
    
    if(props.user.isadmin === true) {
        return <Redirect to='/admin'/>   //  Go to admin portal if user is an admin
    }

    return (
        <div className='homePicCont'>
            <Home/>
            <div className='mainHome'>
                <img className='mainPic' src={mainpic} alt='baker'/>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => state 

export default connect(mapStateToProps)(HomePic)