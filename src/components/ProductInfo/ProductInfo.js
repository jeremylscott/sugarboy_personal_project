import React, {Component} from 'react'
import {connect} from 'react-redux'
import {updateProdInfo} from '../../ducks/reducer'
import './productInfo.scss'
import Home from '../../components/Home/Home'
import donut from '../../images/sugarboy_donut.png'

class ProductInfo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            toggleLoading: true
        }
    }

    componentDidUpdate(previousProps) {
        if(previousProps.prodImg !== this.props.prodImg){
            this.setState({
                toggleLoading: !this.state.toggleLoading
            })
        }
    }

    render() {
        const {prodImg,prodName,prodDesc} = this.props

        return (
            <div className='pageStructure'>
                <div className='topStructure'></div>
                    <Home/>
                <div className='prodInfoCont'>
                    <img className='infoPic' src={prodImg} alt='donut'/>
                    <p className='more-info-title'>{prodName}</p>
                    <p className='prodText'>{prodDesc}</p>
                </div>

                {this.state.toggleLoading ?
                    <div className='loadingCont'>
                        <span className='loading-title'>Loading...</span>
                        <img src={donut} className='loadingAnimation' alt='spinning donut'/>
                    </div>
                :
                    null
                }
            </div>
        )
    }
}

const mapStateToProps = state => state

export default connect(mapStateToProps, {updateProdInfo})(ProductInfo)