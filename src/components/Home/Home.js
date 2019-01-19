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
            password: '',
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
            <div>
                {this.state.toggle ?
                    <nav className='fullDropDownMenu'>
                        {this.state.toggleLinks ?
                            <div className='fullDropDownMenuText'>
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
                        <img className='homeLogo' src={logo} alt='logo'/>
                    <div className='userWelc'> 
                        <div className='cartOut'>
                            <Link className='cartLinks' to='/cart'>Cart: {this.props.cart.length}</Link>
                        </div>
                    </div>
                </div>
                <nav className='homeNavBar'>
                    <div className='burgMen'>
                        <button className='burgButton' onClick={this.handleToggle}
                            >Menu &#9776;</button>
                    </div>
                </nav>

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
