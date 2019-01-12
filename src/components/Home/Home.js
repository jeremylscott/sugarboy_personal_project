import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import logo from '../../images/sugarboy_logo.png'
import mainpic from '../../images/sugarboy_mainpic.jpg'
import mainpic2 from '../../images/mainpic2.jpg'
import mainpic3 from '../../images/mainpic3.jpg'
import mainpic4 from '../../images/mainpic4.jpg'
import mainpic5 from '../../images/mainpic5.jpg'
import mainpic6 from '../../images/mainpic6.jpg'
import mainpic7 from '../../images/mainpic7.jpg'
import facebook from '../../images/facebook.png'
import instagram from '../../images/instagram.png'
import {connect} from 'react-redux'
import {Zoom} from 'react-slideshow-image'
import {login} from '../../ducks/reducer'
import './home.css'
import Donuts from '../Donuts/Donuts'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            isTrue: false
        }
    }

    handleChange = (e) => {   // updating both input fields below
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const {username,password} = this.state  // destructuring this.state
        // const slideImages = [
        //     '../../images/sugarboy_mainpic.jpg',
        //     '../../images/mainpic2.jpg',
        //     '../../images/mainpic3.jpg',
        //     '../../images/mainpic4.jpg',
        //     '../../images/mainpic5.jpg',
        //     '../../images/mainpic6.jpg',
        //     '../../images/mainpic7.jpg'
        // ]

        // const zoomOutProps = {
        //     duration: 5000,
        //     transitionDuration: 500,
        //     infinite: true,
        //     indicators: true,
        //     scale: 0.4,
        //     arrows: true
        // }

        // const Slideshow = () => {
        //     return (
        //         <Zoom {...zoomOutProps}>
        //             {
        //                 slideImages.map((e,i) => {
        //                     return (
        //                         <img key={i} style={{width: '100vw'}}src={e}/>
        //                     )
        //                 })
        //             }
        //         </Zoom>
        //     )
        // }
        
        return (
            <div className='mainPage'>
                <div className='homeHeadWrapper'>
                    <div className='social'>
                        <img className='facebook' src={facebook} alt='facebook'/>
                        <img className='instagram' src={instagram} alt='instagram'/>
                    </div>
                    <img className='homeLogo' src={logo} alt='logo'/>
                    <input className='homeInput' onChange={this.handleChange} name='username' value={username} 
                        placeholder='Username'/>
                    <input className='homeInput' onChange={this.handleChange} name='password' value={password} 
                        placeholder='Password'/>
                    <button className='homeButt' onClick={() => this.props.login(username,password)}>Login</button>
                    <Link to='/register'><button className='reglink'>Register</button></Link>
                </div>
                <nav className='homeNavBar'>
                    <Link className='link' to='/'>Home</Link>
                    <Link className='link' to='/about'>About</Link>
                    <Link className='link' to='/contact'>Contact</Link>
                    <Link onClick={!this.state.isTrue} className='link' to='/donuts'>Donuts</Link>
                    <Link className='link' to='/kolaches'>Kolaches</Link>
                    <Link className='link2' to='/drinks'>Drinks</Link>
                </nav>
                    {this.state.isTrue ? <Donuts/> : null}
                <div className='mainHome'>
                    <img className='mainPic' src={mainpic} alt='baker'/>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps,{login})(Home)
