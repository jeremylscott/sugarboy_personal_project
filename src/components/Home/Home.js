import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import logo from '../../images/sugarboy_logo.png'
import {connect} from 'react-redux'
import {toast, ToastContainer} from 'react-toastify'
import {login,signup,getUser,logOut} from '../../ducks/reducer'
import PropTypes from 'prop-types'
import './home.scss'
import 'react-toastify/dist/ReactToastify.css'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            regUsername: '',
            regPassword: '',
            email: '',
            regToggle: false,    // used to show or hide the register form
            logToggle: false,
            toggle: false,
            toggleLinks: false
        }
    }

    handleChange = (e) => {   // updating both input fields below
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidMount() {
        this.props.getUser()
    }

    handleRegToggle = () => {
        this.setState({
            regToggle: !this.state.regToggle
        })
    }

    handleLogToggle = () => {
        this.setState({
            logToggle: !this.state.logToggle
        })
    }

    handleToggle = () => {
        this.setState({
            toggle: !this.state.toggle
        })
        setTimeout(() => {
            this.setState({
                toggleLinks: !this.state.toggleLinks
            })
        }, 500);
    }

    notifyLogIn = () => {
        toast(`Login successful!`, {
            position: toast.POSITION.TOP_CENTER
        })
    }

    notifyReg = () => {
        toast(`Account has been created`, {
            position: toast.POSITION.TOP_CENTER
        })
    }

    notifyLogOut = () => {
        toast(`You have been signed out`, {
            position: toast.POSITION.TOP_CENTER
        })
    }

    handleReg = (e) => {
        this.props.signup(this.state.regUsername,this.state.regPassword,this.state.email)
        this.handleRegToggle()
        this.clearState()
        this.notifyReg()
    }

    clearState = () => {
        this.setState({
            regUsername: '',
            regPassword: '',
            email: '',
            username: '',
            password: '',
        })
    }

    handleLogClear = () => {
        this.props.login(this.state.username,this.state.password)
        this.setState({
            logToggle: !this.state.logToggle
        })

        this.notifyLogIn()

        setTimeout(() => {
            this.setState({
                username: '',
                password: ''
            })   
        }, 2500);
    }

    logOutForceUpdate = () => {
        this.props.logOut()
        this.notifyLogOut()
        
        setTimeout(() => {
            window.location.reload()
        }, 2500);
    }

    componentDidUpdate = (previousProps) => {
        if(this.props.cart !== previousProps.cart) {
            this.forceUpdate()
        }
    }

    render() {
        const {username,password,email,regPassword,regUsername} = this.state  // destructuring this.state

        return (
            <div>
                <ToastContainer autoClose={2000}/>
                {this.state.toggle ?
                    <nav className='fullDropDownMenu'>
                        {this.state.toggleLinks ?
                            <div className='fullDropDownMenuText' onMouseLeave={this.handleToggle}>
                                <Link className='link4' to='/'>Home</Link>
                                <Link className='link4' to='/about'>About Us</Link>
                                <Link className='link4' to='/contact'>Contact</Link>
                                <Link to='/cake-donuts' className='link4'>Cake Donuts</Link>
                                <Link to='/yeast-donuts' className='link4'>Yeast Donuts</Link>
                                <Link className='link4' to='/kolaches'>Kolaches</Link>
                                <Link className='link4' to='/drinks'>Drinks</Link>
                                <div title='Login to account' onClick={this.handleLogToggle} className='link4'>Login</div>
                                <div title='Register for an account' onClick={this.handleRegToggle} className='link4'>Create Account</div>
                                <div to className='link4' onClick={this.logOutForceUpdate}>Sign Out</div>
                            </div>
                        : null}
                    </nav>
                        : 
                    <nav className='hideFullDropMenu'></nav>}
                    <div className='mainPage'>
                        <button className='burgButton' onClick={this.handleToggle}
                            >Menu &#9776;</button>
                        <img className='homeLogo' src={logo} alt='logo'/>
                        <Link className='cartLink' to='/cart'>{this.props.cart.length ? `My Cart (${this.props.cart.length})`: null}</Link>
                    </div>

                {this.state.regToggle ?            // Determines whether register menu shows or not
                    <form onSubmit={this.handleReg} className='showRegNav'>
                        <h1>Create Account</h1>
                        <input className='inp' onChange={this.handleChange} name='regUsername' value={regUsername} placeholder='Username'/>
                        <input className='inp' onChange={this.handleChange} name='regPassword' type='password' value={regPassword} placeholder='Password'/>
                        <input className='inp' onChange={this.handleChange} name='email' value={email} placeholder='Email'/>
                        <button>Submit</button>
                    </form>
                    :
                    <div className='hideRegNav'></div>}

                {this.state.logToggle ?              // Determines whether login menu shows or not
                    <div  className='showRegLogin'>
                        <h1 className='logHead'>Account Login</h1>
                        <input className='homeInput' onChange={this.handleChange} name='username' value={username} 
                            placeholder='Username'/>
                        <input className='homeInput2' onChange={this.handleChange} type='password' name='password' value={password} 
                            placeholder='Password'/>
                        <button onClick={this.handleLogClear} title='Login to account' className='homeButt'>Submit</button>
                    </div>
                    :
                    <div className='hideRegLogin'></div>}
            </div>
        )
    }
}

 Home.propTypes = {
        username: PropTypes.string.isRequired
    }

function mapStateToProps(state) {
    return {
        user: state.user,
        cart: state.cart
    }
}

export default connect(mapStateToProps,{login,signup,getUser,logOut})(Home)
