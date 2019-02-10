import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Home from '../Home/Home'
import './drinks.scss'
import {getDrinks,getUser,addToCart,updateProdInfo} from '../../ducks/reducer'

class Drinks extends Component {

    componentDidMount() {
        this.props.getDrinks()
        this.props.getUser()
    }

    render() {
        const drinkList = this.props.drinks.map((drink,i) => {
            return (
                <div key={i} className='cardWrapper'>
                    <Link to={`/product-info/${drink.prodid}`}><img onClick={() => this.props.updateProdInfo(drink.prodid)} 
                        className='cardImg' src={drink.prodimg} alt='donut'/></Link>
                    <span className='name'>{drink.prodname}</span>
                    <span className='price'>${drink.price}</span>
                    {this.props.user.username ? 
                        <button onClick={() => {this.props.addToCart(drink)
                            toast('Item successfully added to cart!', {
                                position: "top-center"
                            })}} className='butt'>Add to Cart</button>
                        : null
                    } 
                </div>
            )
        })

        return (
            <div className='pageStructure'>
                <div className='topStructure'>
                    <Home/>
                    <div className='drinkBody'>
                        <h1 className='pageTopic'>Drinks</h1>
                    </div>
                    <div className='mainDisplay'>
                        <div className='leftCol'></div>
                        <div className='drinkDisplay'>
                            {drinkList}
                        </div>
                        <div className='rightCol'></div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        drinks: state.drinks,
        user: state.user
    }
}

export default connect(mapStateToProps,{getDrinks,getUser,addToCart,updateProdInfo})(Drinks)

