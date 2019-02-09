import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getCake,getUser,addToCart} from '../../ducks/reducer'
import Home from '../Home/Home'
import './cake.scss'

class Cake extends Component {

    componentDidMount() {
        this.props.getCake()
        this.props.getUser()
    } 
    

    componentDidUpdate(previousProps) {
        if(this.props.cakes !== previousProps.cakes) {
            this.forceUpdate()
        }
    }

    render() {

        let cakeList = this.props.cakes.map((cake) => {
            return (
                <div key={cake.prodid} className='cardWrapper2'>
                    <Link to={`/product-info/${cake.prodid}`}><img className='cardImg2' src={cake.prodimg} alt='donut'/></Link>
                    <span className='name2'>{cake.prodname}</span>
                    <span className='price2'>${cake.price} per dozen</span>
                    {this.props.user.username ? 
                        <button onClick={() => this.props.addToCart(cake)} className='butt2'>Add to Cart</button>
                        : null
                    }   
                </div>
            )
        })

        return (
            <div className='pageStructure2'>
                <div className='topStructure2'>
                    <Home/>
                    <div className='cakeBody'>
                        <h1 className='pageTopic2'>Cake Donuts</h1>
                    </div>
                    <div className='mainDisplay2'>
                        <div className='leftCol2'></div>
                        <div className='cakeDisplay'>
                            {cakeList}
                        </div>
                        <div className='rightCol2'></div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => state

export default connect(mapStateToProps,{getCake,getUser,addToCart})(Cake)

