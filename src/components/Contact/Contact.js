import React, {Component} from 'react'
import './contact.scss'
import donut from '../../images/sugarboy_donut.png'
import Home from '../Home/Home'
import {connect} from 'react-redux'
import {getUser} from '../../ducks/reducer'


class Contact extends Component {

    componentDidMount() {
        this.props.getUser()
    }

    render() {
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
                    <div className='spaceMe'></div>
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