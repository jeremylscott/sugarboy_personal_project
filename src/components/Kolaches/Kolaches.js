import React, {Component} from 'react'
import {connect} from 'react-redux'


class Kolaches extends Component {
    render() {
        const kolaches = this.props.kolaches.map((e,i) => {
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
                {kolaches}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        kolaches: state.kolaches
    }
}

export default connect(mapStateToProps)(Kolaches)

