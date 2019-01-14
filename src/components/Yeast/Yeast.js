import React, {Component} from 'react'
import {connect} from 'react-redux'
import Header from '../Header/Header'


class Yeast extends Component {
    render() {
        const yeastList = this.props.yeasts.map((yeast,i) => {
            return (
                <div key={i}>
                    <span>{yeast.prodImg}</span>
                    <span>{yeast.prodName}</span>
                    <span>{yeast.prodDesc}</span>
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
                {yeastList}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        yeasts: state.yeasts
    }
}

export default connect(mapStateToProps)(Yeast)

