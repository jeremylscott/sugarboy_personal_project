import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Donuts extends Component {
    render() {
        return (
            <div className='dropDownMenu'>
                <Link to='/cake'>Cake Donuts</Link>
                <Link to='/yeast'>Yeast Donuts</Link>
            </div>
        )
    }
}

export default Donuts