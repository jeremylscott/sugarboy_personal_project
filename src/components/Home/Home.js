import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import logo from '../../images/sugarboy_logo.png'
import {connect} from 'react-redux'
import {login,signup,getUser,logOut} from '../../ducks/reducer'
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
            regToggle: false,    // used to show or hide the register form
            logToggle: false
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

    handleLogToggle = () => {
        this.setState({
            logToggle: !this.state.logToggle
        })
    }

    handleReg = (e) => {
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
        this.props.login(this.state.username,this.state.password)
        this.setState({
            logToggle: !this.state.logToggle
        })
    }

    logOutForceUpdate = () => {
        this.props.logOut()
        window.location.reload()
    }

    render() {
        const {username,password,email,regPassword,regUsername} = this.state  // destructuring this.state

        return (
            <div className='mainPage'>
                <div className='homeHeadWrapper'>
                    <div className='buttCont'>
                        <div  title='Login to account' onClick={this.handleLogToggle} className='loginLink'>Login</div>
                        <div title='Register for an account' onClick={this.handleRegToggle} className='reglink'>Create Account</div>
                    </div>
                        <img className='homeLogo' src={logo} alt='logo'/>
                    <div className='userWelc'>
                        {this.props.user ?
                        <div className='cartOut'>

                        {this.props.user.isadmin === true ?
                            <span className='cartLinks'>ADMIN</span>
                            :
                            <Link className='cartLinks' to='/cart'>{this.props.user.username}'s cart: {this.props.cart.length}</Link>
                        }

                            <div to className='logOut' onClick={this.logOutForceUpdate}>Sign out</div>
                        </div>
                        :
                        null
                        }
                    </div>
                </div>
                <nav className='homeNavBar'>
                    <div className='social'>
                        <a href='https://www.facebook.com/sugarboydonutsProsper/'>
                            <div className='facebook'/>
                        </a>
                        <a href='https://www.instagram.com/explore/locations/134289183873973/sugarboy-donuts-prosper?hl=en'>
                            <div className='instagram'/>
                        </a>
                    </div>
                    <Link className='link' to='/'>Home</Link>
                    <Link className='link' to='/about'>About Us</Link>
                    <Link className='link' to='/contact'>Contact</Link>
                    <Link to onClick={this.handleToggle} className='link'>Donuts</Link>
                    <Link className='link' to='/kolaches'>Kolaches</Link>
                    <Link className='link2' to='/drinks'>Drinks</Link>
                </nav>

                {this.state.toggle ?              // Determines whether drop down menu shows or not
                <div className='dropNav'>
                    <Link className='cd' to='/cake-donuts'>Cake Donuts</Link>
                    <Link className='cd' to='/yeast-donuts'>Yeast Donuts</Link>
                </div>
                :
                <div className='hideNav'></div>}

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
                        <h1>Account Login</h1>
                        <input className='homeInput' onChange={this.handleChange} name='username' value={username} 
                            placeholder='Username'/>
                        <input className='homeInput' onChange={this.handleChange} type='password' name='password' value={password} 
                            placeholder='Password'/>
                        <button onClick={this.handleLogClear} title='Login to account' className='homeButt'>Submit</button>
                    </div>
                    :
                    <div className='hideRegLogin'></div>}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        cart: state.cart
    }
}

export default connect(mapStateToProps,{login,signup,getUser,logOut})(Home)
