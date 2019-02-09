import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Home from '../Home/Home'
import './yeast.scss'
import {getYeast,getUser,addToCart} from '../../ducks/reducer'

class Yeast extends Component {

componentDidMount() {
    this.props.getYeast()
    this.props.getUser()
}

    render() {
        let yeastList = this.props.yeasts.map((yeast,i) => {
            return (
                <div key={i} className='cardWrapper3'>
                    <Link to={`/product-info/${yeast.prodid}`}><img className='cardImg3' src={yeast.prodimg} alt='donut'/></Link>
                    <span className='name3'>{yeast.prodname}</span>
                    <span className='price3'>${yeast.price} per dozen</span>
                    {this.props.user.username ? 
                        <button onClick={() => this.props.addToCart(yeast)} className='butt3'>Add to Cart</button>
                        : null
                    } 
                </div>
            )
        })
       
        return (
            <div className='pageStructure3'>
                <div className='topStructure3'>
                    <Home/>
                    <div className='yeastBody'>
                        <h1 className='pageTopic3'>Yeast Donuts</h1>
                    </div>
                    <div className='mainDisplay3'>
                        <div className='leftCol3'></div>
                        <div className='yeastDisplay'>
                            {yeastList}
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

export default connect(mapStateToProps,{getYeast,getUser,addToCart})(Yeast)

