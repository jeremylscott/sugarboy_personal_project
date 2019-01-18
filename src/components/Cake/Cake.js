import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getCake,getUser} from '../../ducks/reducer'
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

        let cakeList = this.props.cakes.map((cake,i) => {
            return (
                <div key={i} className='cardWrapper2'>
                    <img className='cardImg2' src={cake.prodimg} alt='donut'/>
                    <span className='name2'>{cake.prodname}</span>
                    <span className='descrip2'>{cake.proddesc}</span>
                </div>
            )
        })

        let userCakeList = this.props.cakes.map((cake,i) => {
            return (
                <div key={i} className='cardWrapper2'>
                    <img className='cardImg2' src={cake.prodimg} alt='donut'/>
                    <span className='name2'>{cake.prodname}</span>
                    <span className='descrip2'>{cake.proddesc}</span>
                    <button className='butt2'>Add to Cart</button>
                </div>
            )
        })

        return (
            <div className='pageStructure2'>
                <div className='topStructure2'>
                    <Home/>
                    <div className='cakeBody'>
                        <h1 className='pageTopic'>Cake Donuts</h1>
                    </div>
                    <div className='mainDisplay2'>
                        <div className='leftCol2'></div>
                        <div className='cakeDisplay'>
                            {this.props.user.username ?
                                userCakeList
                                :
                                cakeList
                            }
                        </div>
                        <div className='rightCol2'></div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cakes: state.cakes,
        user: state.user
    }
}

export default connect(mapStateToProps,{getCake,getUser})(Cake)

