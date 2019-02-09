import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {updateProdInfo} from '../../ducks/reducer'
import './productInfo.scss'
import Home from '../../components/Home/Home'

class ProductInfo extends Component {
    
    render() {
        const {prodImg,prodName,prodDesc} = this.props

        return (
            <div className='pageStructure'>
                <div className='topStructure'></div>
                    <Home/>
                <div className='prodInfoCont'>
                    <img className='infoPic' src={prodImg}/>
                    <p className='more-info-title'>{prodName}</p>
                    <p className='prodText'>{prodDesc}</p>
                </div>
            </div>
    
        )

    }
}

const mapStateToProps = state => state

export default connect(mapStateToProps, {updateProdInfo})(ProductInfo)