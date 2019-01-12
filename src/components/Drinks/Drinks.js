import React, {Component} from 'react'
import {connect} from 'react-redux'


class Drinks extends Component {
    render() {
        const drinks = this.props.drinks.map((e,i) => {
            return (
                <div key={i}>
                    <span>{e.prodImg}</span>
                    <span>{e.prodName}</span>
                    <span>{e.prodDesc}</span>
                </div>
            )
        })

        return (
            <div>
                {drinks}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        drinks: state.drinks
    }
}

export default connect(mapStateToProps)(Drinks)

