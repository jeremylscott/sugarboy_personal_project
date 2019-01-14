import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getCake} from '../../ducks/reducer'
import Header from '../Header/Header'
import './cake.scss'

class Cake extends Component {
    constructor(props) {
        super(props)   
    }

    componentDidMount() {
        this.props.getCake()
    }

    render() {
        let cakeList = this.props.cakes.map((cake,i) => {
            return (
                <div key={i} className='mappedCake'>
                    <span>{cake.prodName}</span>
                    <img src={cake.prodImg}/>
                    <span>{cake.prodDesc}</span>
                </div>
            )
        })

        return (
            <div> 
                <div>
                    <Header/>
                    <div className='pageWrapper'>
                        <h1>Cake Donuts</h1>
                        {cakeList}
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cakes: state.cakes
    }
}

export default connect(mapStateToProps,{getCake})(Cake)

