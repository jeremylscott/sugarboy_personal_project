import React, {Component} from 'react'
import {connect} from 'react-redux'
import Header from '../Header/Header'
import './cake.scss'
import {Link} from 'react-router-dom'


class Cake extends Component {
    constructor(props) {
        super(props)   
    }

    render() {
        const cakeList = this.props.cakes.map((cake,i) => {
            return (
                <div key={i}>
                    <span>{cake.prodImg}</span>
                    <span>{cake.prodName}</span>
                    <span>{cake.prodDesc}</span>
                </div>
            )
        })

        return (
            <div>
                <div>
                    <Header/>
                    {/* {this.props.toggle ?     // Determines whether drop down menu shows or not
                <div className='dropNav2'>
                    <Link className='cd2' to='/cake-donuts'>Cake Donuts</Link>
                    <Link className='cd2' to='/yeast-donuts'>Yeast Donuts</Link>
                </div>
                :
                <div className='hideNav2'></div>} */}
                {cakeList}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cakes: state.cakes
    }
}

export default connect(mapStateToProps)(Cake)

