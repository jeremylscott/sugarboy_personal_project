import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import logo from '../../images/sugarboy_logo.png'
import mainpic from '../../images/sugarboy_mainpic.jpg'
import {connect} from 'react-redux'
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
        const {username,password,email,regPassword,regUsername} = this.state  // destructuring this.state
        
        return (
            <div className='mainPage'>
                <div className='homeHeadWrapper'>
                    <div className='social'>
                        <a href='https://www.facebook.com/sugarboydonutsProsper/'>
                            <div className='facebook'/>
                        </a>
                        <a href='https://www.instagram.com/explore/locations/134289183873973/sugarboy-donuts-prosper?hl=en'>
                            <div className='instagram'/>
                        </a>
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
