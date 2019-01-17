import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAllProducts,updateName,updateProdDesc,updateImg,propInput} from '../../ducks/reducer'
import './admin.scss'
import Home from '../Home/Home'


class Admin extends Component {

    componentDidMount() {
        this.props.getAllProducts()
    }

    render() {
        console.log(this.props.currentProps);
        const {prodName,prodDesc,prodImg} = this.props
        const allProdList = this.props.allProducts.map((product,prodId) => {
            return (
                <div key={prodId} className='cardWrapper8'>
                    <img className='cardImg8' src={product.prodimg} alt='donut'/>
                    <input className='prodImg' onChange={(e) => this.props.updateImg(e.target.value)} name='prodImg' value={prodImg}
                        placeholder={this.props.allProducts.prodImg}/>
                    <input className='prodName' onChange={(e) => this.props.updateName(e.target.value)} name='prodName' value={prodName}
                        placeholder={this.props.allProducts.prodName}/>
                    <input className='prodDesc' onChange={(e) => this.props.updateDesc(e.target.value)} name='prodDesc' value={prodDesc}
                        placeholder={this.props.allProducts.prodDesc}/>
                    <button onClick={this.handleSubmit} className='butt8'>Submit Changes</button>
                </div>
            )
        })

        return (
            <div className='firstAdmin'>
            <div className='secAdmin'>
                <Home/>
                <div className='adminBody'>
                    <h1>Admin Portal</h1>
                </div>
                <div className='adminBody'>
                    <div className='adminLeft'></div>
                    <div className='adminDisplay'>
                        {allProdList}
                    </div>
                    <div className='adminRight'></div>
                </div>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => state

export default connect(mapStateToProps,{getAllProducts,updateProdDesc,updateImg,updateName,propInput})(Admin)
