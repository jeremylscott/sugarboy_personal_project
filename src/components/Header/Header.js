import React from 'react'
import {Link} from 'react-router-dom'
import './header.css'
import logo from '../../images/sugarboy_logo.png'

function Header() {
    return (
        <div>
            <img className='headLogo' src={logo} alt='logo'/>
            <ul className='navBar'>
                <Link to='/'><ul>Homes</ul></Link>
                <Link to='/about'><ul>About</ul></Link>
                <Link to='/contact'><ul>Contact</ul></Link>
                <Link to='/donuts'><ul>Donuts</ul></Link>
                <Link to='/kolaches'><ul>Kolaches</ul></Link>
                <Link to='/drinks'><ul>Drinks</ul></Link>
            </ul>
        </div>
    )
}

export default Header