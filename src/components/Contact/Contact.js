import React from 'react'
import './contact.scss'
import donut from '../../images/sugarboy_donut.png'


function Contact() {
    return (
        <div>
            <div>
                <div className='pageTitle'>
                    <h1>Store Locations</h1>
                </div>
                <div className='icon'>
                    <div className='donutPic'>
                        <img src={donut}/>
                    </div>
                    <div className='address'>
                        <div className='addressText'>
                            <p>Prosper East</p>
                            <p>100 Donut Way</p>
                            <p>Prosper, TX 75078</p>
                        </div>
                        <div className='map'>
                            <iframe className='googleMap' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13346.763684132127!2d-96.7664761!3d33.2483998!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x24644ae7435ef54c!2sSugarboy+Donuts!5e0!3m2!1sen!2sus!4v1547315872916"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact