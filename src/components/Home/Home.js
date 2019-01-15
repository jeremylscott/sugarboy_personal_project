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
import {login,signup} from '../../ducks/reducer'
import './home.scss'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            regUsername: '',
            regPassword: '',
            email: '',
            toggle: false,      // used to display donut drop down menu or hide it based on status
            regToggle: false    // used to show or hide the register form
        }

    }

    handleChange = (e) => {   // updating both input fields below
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleToggle = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }

    handleRegToggle = () => {
        this.setState({
            regToggle: !this.state.regToggle
        })
    }

    handleReg = (e) => {
        e.preventDefault()
        this.props.signup(this.state.regUsername,this.state.regPassword,this.state.email)
        this.handleRegToggle()
        this.clearState()
    }

    clearState = () => {
        this.setState({
            regUsername: '',
            regPassword: '',
            email: '',
            username: '',
            password: ''
        })
    }

    handleLogClear = () => {
        const {username,password} = this.state
        this.props.login(username,password)
        this.clearState()
    }

    render() {
        console.log(this.state);
        const {username,password,email,regPassword,regUsername} = this.state  // destructuring this.state

        
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
                    <input className='homeInput' onChange={this.handleChange} type='password' name='password' value={password} 
                        placeholder='Password'/>
                    <button title='Login to account' className='homeButt' onClick={this.handleLogClear}>Login</button>
                    <button title='Register for an account' onClick={this.handleRegToggle} className='reglink'>Register</button>
                </div>
                <nav className='homeNavBar'>
                    <Link className='link' to='/'>Home</Link>
                    <Link className='link' to='/about'>About Us</Link>
                    <Link className='link' to='/contact'>Contact</Link>
                    <Link to onClick={this.handleToggle} className='link'>Donuts</Link>
                    <Link className='link' to='/kolaches'>Kolaches</Link>
                    <Link className='link2' to='/drinks'>Drinks</Link>
                </nav>

                <div className='mainHome'>
                        <img className='mainPic' src={mainpic} alt='baker'/>

                    {this.state.toggle ?              // Determines whether drop down menu shows or not
                    <div className='dropNav'>
                        <Link className='cd' to='/cake-donuts'>Cake Donuts</Link>
                        <Link className='cd' to='/yeast-donuts'>Yeast Donuts</Link>
                    </div>
                    :
                    <div className='hideNav'></div>}

                    {this.state.regToggle ?
                        <form onSubmit={this.handleReg} className='showRegNav'>
                            <h1>Create Account</h1>
                            <input className='inp' onChange={this.handleChange} name='regUsername' value={regUsername} placeholder='Username'/>
                            <input className='inp' onChange={this.handleChange} name='regPassword' type='password' value={regPassword} placeholder='Password'/>
                            <input className='inp' onChange={this.handleChange} name='email' value={email} placeholder='Email'/>
                            <button>Submit</button>
                        </form>
                        :
                        <div className='hideRegNav'></div>}
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

export default connect(mapStateToProps,{login,signup})(Home)
