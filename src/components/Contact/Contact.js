import React, {Component} from 'react'
import './contact.scss'
import donut from '../../images/sugarboy_donut.png'
import Home from '../Home/Home'
import axios from 'axios'
import {connect} from 'react-redux'
import {getUser} from '../../ducks/reducer'

class Contact extends Component {
    constructor(props) {
        super(props)

        this.state = {
            first: '',
            last: '',
            email: '',
            message: ''
        }
    }

    componentDidMount() {
        this.props.getUser()
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    sendMessage() {
        let body = {
            subject: `${this.state.first} ${this.state.last} has contacted you`,
            email: `${this.state.email}`,
            message: `${this.state.message}   Response Email: ${this.state.email}`
        }

        this.setState({
            first: '',
            last: '',
            email: '',
            message: ''
        })

        axios.post('/api/sendmail', body)
            .then(res => {
                res.sendStatus(200)
            })
            .catch(err => console.log(err))
    }

    render() {
        const {first,last,email,message} = this.state
        return (
            <div>
                <div>
                    <Home/>
                    <div className='pageTitle'>
                        <h1 className='pageTopicCont'>Store Locations:</h1>
                    </div>
                    <div className='icon'>
                        <div>
                            <img className='donutPic' src={donut} alt='donut'/>
                        </div>
                        <div className='address'>
                            <div className='addressText'>
                                <p className='loc1'>Prosper East</p>
                                <p>100 Donut Way</p>
                                <p>Prosper, TX 75078</p>
                                <p>469-555-1212</p>
                                <p>sugarboy@gmail.com</p>
                                <div className='social'>
                                    <a href='https://www.facebook.com/sugarboydonutsProsper/'>
                                        <div className='facebook'/>
                                    </a>
                                    <a href='https://www.instagram.com/explore/locations/134289183873973/sugarboy-donuts-prosper?hl=en'>
                                        <div className='instagram'/>
                                    </a>
                                </div>
                            </div>
                            <div className='map'>
                                <iframe className='googleMap' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13346.763684132127!2d-96.7664761!3d33.2483998!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x24644ae7435ef54c!2sSugarboy+Donuts!5e0!3m2!1sen!2sus!4v1547315872916" title='map1'></iframe>
                            </div>
                        </div>
                    </div>
                    <div className='icon2'>
                        <div>
                            <img className='donutPic' src={donut} alt='donut'/>
                        </div>
                        <div className='address2'>
                            <div className='addressText2'>
                                <p className='loc2'>Prosper West</p>
                                <p>123 Kolache St</p>
                                <p>Prosper, TX 75078</p>
                                <p>469-555-1919</p>
                                <p>sugarboy@gmail.com</p>
                            </div>
                            <div className='map2'>
                                <iframe className='googleMap' src="https://www.mapquest.com/embed/us/tx/prosper/75078/17553-fishtrap-rd-33.229837,-96.859059?center=33.23012635289219,-96.8590521812439&zoom=17&maptype=undefined" title='map'></iframe>
                            </div>
                        </div>
                    </div>
                    <div className='contactUs'>
                        <div className='topTitle'>
                            <h2 className='contactTitle'>Contact Us</h2>
                            <button onClick={() => this.sendMessage()} className='mailButton'>Submit</button>
                        </div>
                        <div className='firstLast'>
                            <input onChange={this.handleChange} name='first' className='first' value={first} placeholder='First Name'/>
                            <input onChange={this.handleChange} name='last' className='last' value={last} placeholder='Last Name'/>
                        </div>
                        <input onChange={this.handleChange} name='email' className='email' value={email} placeholder='Email'/>
                        <textarea rows='5' cols='80' onChange={this.handleChange} name='message' className='message' value={message} placeholder='Message'/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps,{getUser})(Contact)