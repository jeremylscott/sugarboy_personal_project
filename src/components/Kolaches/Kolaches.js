import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Home from '../Home/Home'
import './kolaches.scss'
import {getKolaches,getUser,addToCart,updateProdInfo} from '../../ducks/reducer'


class Kolaches extends Component {

    componentDidMount() {
        this.props.getKolaches()
        this.props.getUser()
    }

    render() {
        let kolacheList = this.props.kolaches.map((kolache,i) => {
            return (
                    <div key={i}className='cardWrapper4'>
                        <Link to={`/product-info/${kolache.prodid}`}><img onClick={() => this.props.updateProdInfo(kolache.prodid)} 
                            className='cardImg4' src={kolache.prodimg} alt='donut'/></Link>
                        <span className='name4'>{kolache.prodname}</span>
                        <span className='price'>${kolache.price} per dozen</span>
                        {this.props.user.username ? 
                        <button onClick={() => {this.props.addToCart(kolache)
                            toast('Item successfully added to cart!', {
                                position: "top-left"
                            })}} className='butt4'>Add to Cart</button>
                        : null
                    } 
                    </div>
            )
        })

        return (
            <div className='pageStructure4'>
                <div className='topStructure4'>
                    <Home/>
                    <div className='kolacheBody'>
                        <h1 className='pageTopic4'>Kolaches</h1>
                    </div>
                    <div className='mainDisplay4'>
                        <div className='leftCol4'></div>
                        <div className='kolacheDisplay'>
                            {kolacheList}   
                        </div>
                        <div className='rightCol4'></div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        kolaches: state.kolaches,
        user: state.user
    }
}

export default connect(mapStateToProps,{getKolaches,getUser,addToCart,updateProdInfo})(Kolaches)

