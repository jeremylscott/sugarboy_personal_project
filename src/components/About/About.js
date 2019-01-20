import React, {Component} from 'react'
import Home from '../Home/Home'
import './about.scss'
import {getUser} from '../../ducks/reducer'
import {connect} from 'react-redux'

class About extends Component {
   
    componentDidMount() {
        this.props.getUser()
    }

    render() {
        return (
            <div>
                <Home/>
                <div className='aboutWrapper'>
                    <body className='bodMid'>
                        <div className='title'>
                            <h1 className='aboutName'>About Us</h1>
                        </div>
                        <div className='picText'>
                            <img className='aboutImg' src='https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-0/p200x200/28471477_173513783284846_3553170248628699136_n.jpg?_nc_cat=107&_nc_ht=scontent-ort2-1.xx&oh=2e1a539cbc61db5d6fc0995d23c5a8bf&oe=5CC1DD0F' alt='donut'/>
                            <p className='aboutText'>
                                Opened in October of 2016, Sugarboy Donuts has become a family-run, 
                                neighborhood mainstay. Offering a wide variety of donuts, breakfast 
                                items and hand-mixed drinks, Sugarboy uses the highest quality raw 
                                materials to make their goods from scratch. Aiming to be the go-to 
                                option for donut fanatics, Sugarboy donuts is looking to expand in 
                                North Texas.
                            </p>
                        </div>
                    </body>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps,{getUser})(About)