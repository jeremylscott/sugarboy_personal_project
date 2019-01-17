import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import './admin.scss'
import Home from '../Home/Home'

class Admin extends Component {

    render() {
        return (
            <div className='firstAdmin'>
            <div className='secAdmin'>
                <Home/>
                <div className='adminBody'>
                    <h1>Admin Portal</h1>
                </div>
                <div className='adminMain'>
                    <div className='adminLeft'></div>
                    <div className='adminDisplay'>
                        
                    </div>
                    <div className='adminRight'></div>
                </div>
            </div>
        </div>
        )
    }
}

const mapStateToProps = (state) => state

export default connect(mapStateToProps)(Admin)
