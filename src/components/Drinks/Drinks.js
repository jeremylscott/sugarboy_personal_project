import React, {Component} from 'react'
import {connect} from 'react-redux'
import Home from '../Home/Home'
import './drinks.scss'
import {getDrinks,getUser} from '../../ducks/reducer'

class Drinks extends Component {

    componentDidMount() {
        this.props.getDrinks()
        this.props.getUser()
    }

    render() {
        const drinkList = this.props.drinks.map((drink,i) => {
            return (
                <div key={i} className='cardWrapper'>
                    <img className='cardImg' src={drink.prodimg}/>
                    <span className='name'>{drink.prodname}</span>
                    <span className='descrip'>{drink.proddesc}</span>
                </div>
            )
        })

        let userDrinkList = this.props.drinks.map((drink,i) => {
            return (
                <div key={i} className='cardWrapper'>
                    <img className='cardImg' src={drink.prodimg}/>
                    <span className='name'>{drink.prodname}</span>
                    <span className='descrip'>{drink.proddesc}</span>
                    <button className='butt'>Add to Cart</button>
                </div>
            )
        })

        return (
            <div className='pageStructure'>
                <div className='topStructure'>
                    <Home/>
                    <div className='drinkBody'>
                        <h1>Drinks</h1>
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

export default connect(mapStateToProps,{getDrinks,getUser})(Drinks)

