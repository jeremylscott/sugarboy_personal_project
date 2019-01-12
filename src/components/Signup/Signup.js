import React, {Component} from 'react'
import {connect} from 'react-redux'
import {signup} from '../../ducks/reducer'

class Signup extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            username: '',
            password: '',
            email: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.name.target]: e.target.value
        })
    }

    render() {
        const {username,password,email} = this.state

        return (
            <form onSubmit={(e) => {e.preventDefault(); this.props.register(username,password,email)}}>
                <input onChange={this.handleChange} name='username' value={username} placeholder='Username'/>
                <input onChange={this.handleChange} name='email' value={email} placeholder='Email'/>
                <input onChange={this.handleChange} name='password' value={password} placeholder='Password'/>
                <button>Submit</button>
            </form>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps,{signup})(Signup)