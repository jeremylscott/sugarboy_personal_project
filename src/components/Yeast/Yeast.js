import React, {Component} from 'react'
import {connect} from 'react-redux'


class Yeast extends Component {
    render() {
        const yeast = this.props.yeast.map((e,i) => {
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
                {yeast}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        yeast: state.yeast
    }
}

export default connect(mapStateToProps)(Yeast)

