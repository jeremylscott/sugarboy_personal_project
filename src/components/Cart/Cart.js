import React, {Component} from 'react'
import Home from '../Home/Home'
import {connect} from 'react-redux'

class Cart extends Component {
    render() {
        return (
            <div>
                <Home/>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => state

export default connect(mapStateToProps)(Cart)