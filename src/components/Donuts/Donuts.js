import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './donuts.css'

class Donuts extends Component {
    render() {
        return (
            <div className='dropDownMenu'>
                <h1>Test</h1>
                <Link to='/cake'>Cake Donuts</Link>
                <Link to='/yeast'>Yeast Donuts</Link>
            </div>
        )
    }
}

export default Donuts