import React, {Component} from 'react'

class Register extends Component {
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
            <form onSubmit={(e) => {e.preventDefault(), this.props.register(username,password,email)}}>
                <input onChange={handleChange} name='username' value={username} placeholder='Username'/>
                <input onChange={handleChange} name='email' value={email} placeholder='Email'/>
                <input onChange={handleChange} name='password' value={password} placeholder='Password'/>
                <button>Submit</button>
            </form>
        )
    }
}

export default Register