import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import logo from '../../images/sugarboy_logo.png'
import mainpic from '../../images/sugarboy_mainpic.jpg'
import {connect} from 'react-redux'
import reducer from '../../ducks/reducer';
import {login} from '../../ducks/reducer'
import './home.css'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = (e) => {   // updating both input fields below
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const {username,password} = this.state  // destructuring off this.state

        return (
            <div className='mainPage'>
                <div className='homeHeadWrapper'>
                    <img className='homeLogo' src={logo} alt='logo'/>
                    <input className='homeInput' onChange={this.handleChange} name='username' value={username} placeholder='Username'/>
                    <input className='homeInput' onChange={this.handleChange} name='password' value={password} placeholder='Password'/>
                    <button className='homeButt' onClick={() => this.props.login(username,password)}>Login</button>
                    <Link className='reglink' to='/register'>Register</Link>
                </div>
                <ul className='homeNavBar'>
                    <Link className='link' to='/'>Home</Link>
                    <Link className='link' to='/about'>About</Link>
                    <Link className='link' to='/contact'>Contact</Link>
                    <Link className='link' to='/donuts'>Donuts</Link>
                    <Link className='link' to='/kolaches'>Kolaches</Link>
                    <Link className='link2' to='/drinks'>Drinks</Link>
                </ul>
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
