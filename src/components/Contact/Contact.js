import React from 'react'
import './contact.scss'
import donut from '../../images/sugarboy_donut.png'
import Header from '../Header/Header'


function Contact() {
    return (
        <div>
            <div>
                <Header/>
                <div className='pageTitle'>
                    <h1>Store Locations:</h1>
                </div>
                <div className='icon'>
                    <div className='donutPic'>
                        <img src={donut}/>
                    </div>
                    <div className='address'>
                        <div className='addressText'>
                            <p className='loc1'>Prosper East</p>
                            <p>100 Donut Way</p>
                            <p>Prosper, TX 75078</p>
                            <p>469-555-1212</p>
                            <p>sugarboy@gmail.com</p>
                        </div>
                        <div className='map'>
                            <iframe className='googleMap' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13346.763684132127!2d-96.7664761!3d33.2483998!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x24644ae7435ef54c!2sSugarboy+Donuts!5e0!3m2!1sen!2sus!4v1547315872916"></iframe>
                        </div>
                    </div>
                </div>
                <div className='icon2'>
                    <div className='donutPic2'>
                        <img src={donut}/>
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
                            <iframe className='googleMap' src="https://www.mapquest.com/embed/us/tx/prosper/75078/17553-fishtrap-rd-33.229837,-96.859059?center=33.23012635289219,-96.8590521812439&zoom=17&maptype=undefined"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact