import React, {Component} from 'react'
import {connect} from 'react-redux'
import Header from '../Header/Header'
import './yeast.scss'
import {getYeast} from '../../ducks/reducer'


class Yeast extends Component {

componentDidMount() {
    this.props.getYeast()
}

    render() {
        let yeastList = this.props.yeasts.map((yeast,i) => {
            return (
                <div key={i} className='mappedCards'>
                    <span>{yeast.prodName}</span>
                    <img src={yeast.prodImg}/>
                    <span>{yeast.prodDesc}</span>
                </div>
            )
        })

        return (
            <div>
                <div>
                    <Header/>
                    <h1>Yeast Donuts</h1>
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

export default connect(mapStateToProps,{getYeast})(Yeast)

