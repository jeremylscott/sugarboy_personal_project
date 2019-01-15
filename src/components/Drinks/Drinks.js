import React, {Component} from 'react'
import {connect} from 'react-redux'
import Header from '../Header/Header'
import './drinks.scss'
import {getDrinks} from '../../ducks/reducer'


class Drinks extends Component {

    componentDidMount() {
        this.props.getDrinks()
    }

    render() {
        const drinkList = this.props.drinks.map((drink,i) => {
            return (
                <div key={i} className='cardWrapper'>
                    <span className='name'>{drink.prodname}</span>
                    <img src={drink.prodimg}/>
                    <span className='descrip'>{drink.proddesc}</span>
                </div>
            )
        })

        console.log(this.props.drinks);

        return (
            <div>
                <div>
                    <Header/>
                    <div>
                        <h1>Drinks</h1>
                        {drinkList}
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        drinks: state.drinks
    }
}

export default connect(mapStateToProps,{getDrinks})(Drinks)

