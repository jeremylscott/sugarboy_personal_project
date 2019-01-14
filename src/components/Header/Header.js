import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './header.scss'
import logo from '../../images/sugarboy_logo.png'

class Header extends Component {
    render() {
        console.log(this.props.toggle);
        return (
            <div className='headerSetup'>
                <img className='headLogo' src={logo} alt='logo'/>
                <nav className='navBar'>
                    <Link className='links' to='/'>Home</Link>
                    <Link className='links' to='/about'>About</Link>
                    <Link className='links' to='/contact'>Contact</Link>
                    <Link onClick={this.props.toggleMe} className='links' to>Donuts</Link>
                    <Link className='links' to='/kolaches'>Kolaches</Link>
                    <Link className='links2' to='/drinks'>Drinks</Link>
                </nav>
            </div>
        )
    }
}

export default Header