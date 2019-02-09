import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import './productInfo.scss'
import Home from '../../components/Home/Home'

class ProductInfo extends Component {

    render() {
        const {allProducts} = this.props

        return (
            <div className='pageStructure'>
                <div className='topStructure'></div>
                    <Home/>
                <div className='prodInfoCont'>
                    <img className='infoPic' src={allProducts.prodimg}/>
                    <p className='more-info-title'>{allProducts.prodname}</p>
                    <p className='prodText'>{allProducts.proddesc}</p>
                </div>
            </div>
    
        )

    }
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(ProductInfo)