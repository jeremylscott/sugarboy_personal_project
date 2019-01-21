import React, {Component} from 'react'
import {connect} from 'react-redux'
import Home from '../Home/Home'
import './drinks.scss'
import {getDrinks,getUser,addToCart} from '../../ducks/reducer'

class Drinks extends Component {

    componentDidMount() {
        this.props.getDrinks()
        this.props.getUser()
    }

    render() {
        const drinkList = this.props.drinks.map((drink,i) => {
            return (
                <div key={i} className='cardWrapper'>
                    <img className='cardImg' src={drink.prodimg} alt='donut'/>
                    <span className='name'>{drink.prodname}</span>
                    <span className='descrip'>{drink.proddesc}</span>
                    <span className='price'>${drink.price}</span>
                </div>
            )
        })

        let userDrinkList = this.props.drinks.map((drink,i) => {
            return (
                <div key={i} className='cardWrapper'>
                    <img className='cardImg' src={drink.prodimg} alt='donut'/>
                    <span className='name'>{drink.prodname}</span>
                    <span className='descrip'>{drink.proddesc}</span>
                    <span className='price'>${drink.price}</span>
                    <button onClick={() => this.props.addToCart(drink)} className='butt'>Add to Cart</button>
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
                            {this.props.user.username ?
                                userDrinkList
                                :
                                drinkList
                            }
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

export default connect(mapStateToProps,{getDrinks,getUser,addToCart})(Drinks)

