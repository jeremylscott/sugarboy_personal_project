import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import './header.scss'
import logo from '../../images/sugarboy_logo.png'

class Header extends Component {
    constructor(props) {
        super(props)

        this.state ={
            toggle: false
        }
    }

    handleToggle = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }

    render() {
        return (
            <div className='headerSetup'>
                <img className='headLogo' src={logo} alt='logo'/>
                <nav className='navBar'>
                    <Link className='links' to='/'>Home</Link>
                    <Link className='links' to='/about'>About Us</Link>
                    <Link className='links' to='/contact'>Contact</Link>
                    <Link onClick={() => this.handleToggle(this.state.toggle)} className='links' to>Donuts</Link>
                    <Link className='links' to='/kolaches'>Kolaches</Link>
                    <Link className='links2' to='/drinks'>Drinks</Link>
                </nav>
                <div className='toggleOpt'>
                    {this.state.toggle ?              // Determines whether drop down menu shows or not
                        <div className='dropNav2'>
                            <Link className='cd2' to='/cake-donuts'>Cake Donuts</Link>
                            <Link className='cd2' to='/yeast-donuts'>Yeast Donuts</Link>
                        </div>
                        :
                        <div className='hideNav2'></div>}
                </div>

            </div>
        )
    }
}

export default Header