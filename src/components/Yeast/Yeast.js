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
                <div key={i} className='cardWrapper3'>
                    <img className='cardImg3' src={yeast.prodimg}/>
                    <span className='name3'>{yeast.prodname}</span>
                    <span className='descrip3'>{yeast.proddesc}</span>
                </div>
            )
        })

        let userYeastList = this.props.yeasts.map((yeast,i) => {
            return (
                <div key={i} className='cardWrapper3'>
                    <img className='cardImg3' src={yeast.prodimg}/>
                    <span className='name3'>{yeast.prodname}</span>
                    <span className='descrip3'>{yeast.proddesc}</span>
                    <button className='butt4'>Add to Cart</button>
                </div>
            )
        })
       
        return (
            <div className='pageStructure3'>
                <div className='topStructure3'>
                    <Header/>
                    <div className='yeastBody'>
                        <h1>Yeast Donuts</h1>
                    </div>
                    <div className='mainDisplay3'>
                        <div className='leftCol3'></div>
                        <div className='yeastDisplay'>
                            {this.props.user.username ?
                                userYeastList
                                :
                                yeastList
                            }
                        </div>
                        <div className='rightCol3'></div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        yeasts: state.yeasts,
        user: state.user
    }
}

export default connect(mapStateToProps,{getYeast})(Yeast)

