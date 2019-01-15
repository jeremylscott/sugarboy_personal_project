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
                    <img className='cardImg' src={drink.prodimg}/>
                    <span className='name'>{drink.prodname}</span>
                    <span className='descrip'>{drink.proddesc}</span>
                </div>
            )
        })

        return (
            <div className='pageStructure'>
                <div className='topStructure'>
                    <Header/>
                    <div className='drinkBody'>
                        <h1>Drinks</h1>
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
        drinks: state.drinks
    }
}

export default connect(mapStateToProps,{getDrinks})(Drinks)

