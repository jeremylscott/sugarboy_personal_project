import React, {Component} from 'react'
import {connect} from 'react-redux'


class Cake extends Component {
    render() {
        const cake = this.props.cake.map((e,i) => {
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
                {cake}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cake: state.cake
    }
}

export default connect(mapStateToProps)(Cake)

