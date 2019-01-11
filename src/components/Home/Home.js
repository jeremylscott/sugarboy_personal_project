import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import logo from '../../images/sugarboy_logo.png'
import {connect} from 'react-router-dom'
import reducer from '../../ducks/reducer';

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
            <div>
                <div>
                    <img className='homeLogo' src={logo} alt='logo'/>
                    <input onChange={this.handleChange} name='username' value={username} placeholder='Username'/>
                    <input onChange={this.handleChange} name='password' value={password} placeholder='Password'/>
                    <button onClick={() => this.props.login(username,password)}>Login</button>
                    <Link to='/register'></Link>
                </div>
                <div>
                    <ul className='homeNavBar'>
                        <Link to='/'><li>Homes</li></Link>
                        <Link to='/about'><li>About</li></Link>
                        <Link to='/contact'><li>Contact</li></Link>
                        <Link to='/donuts'><li>Donuts</li></Link>
                        <Link to='/kolaches'><li>Kolaches</li></Link>
                        <Link to='/drinks'><li>Drinks</li></Link>
                    </ul>
                </div>
            </div>
        )
    }
}

export default reducer(mapStateToProps,{login})(Home)
