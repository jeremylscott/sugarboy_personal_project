import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getAllProducts,propInput,updateProduct,addProduct,clearState,deleteProduct} from '../../ducks/reducer'
import './admin.scss'
import Home from '../Home/Home'


class Admin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            toggle: false,
            prodImg: '',
            prodName: '',
            prodDesc: '',
            prodType: '',
            prodPrice: '',
            prodSelected: false
        }
    }

    componentDidMount() {
        this.props.getAllProducts()
    }

    handleToggle = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }

    setItemToState = (product) => {
        console.log(product);
        this.setState({
            prodImg: product.prodimg,
            prodName: product.prodname,
            prodDesc: product.proddesc,
            prodType: product.prodtype,
            prodPrice: product.price,
            prodSelected: true
        })
    }

    updateImg = (e,product) => {
        if(!this.state.prodSelected) {
           this.setItemToState(product)
        }
            this.setState({
                prodImg: e.target.value
            })
    }
    
    updateName = (e,product) => {
        if(!this.state.prodSelected) {
            this.setItemToState(product)
        }
            this.setState({
                prodName: e.target.value
            })
    }

    updateType = (e,product) => {
        if(!this.state.prodSelected) {
            this.setItemToState(product)
        }
            this.setState({
                prodType: e.target.value
            })
    }

    updatePrice = (e,product) => {
        if(!this.state.prodSelected) {
            this.setItemToState(product)
        }
            this.setState({
                prodPrice: e.target.value
            })
    }

    updateDesc = (e,product) => {
        if(!this.state.prodSelected) {
            this.setItemToState(product)
        }
            this.setState({
                prodDesc: e.target.value
            })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
             const {prodName,prodDesc,prodImg,prodType,prodPrice} = this.state
        
        const allProdList = this.props.allProducts.map((product) => {
            return (
                <div key={product.prodid} className='cardWrapper8'>
                    <img className='cardImg8' src={product.prodimg} alt='donut'/>
                    <input className='prodImg' onChange={(e) => this.updateImg(e,product)} name='prodImg'
                        placeholder={product.prodimg} input='text'/>
                    <input className='prodName' onChange={(e) => this.updateName(e,product)} name='prodName'
                        placeholder={product.prodname} input='text'/>
                    <div className='typePriceCont'>
                        <input className='prodType' onChange={(e) => this.updateType(e,product)} name='prodType'
                            placeholder={product.prodtype} input='text'/>
                        <input className='prodPrice' onChange={(e) => this.updatePrice(e,product)} name='prodPrice'
                            placeholder={product.price} input='text'/>
                    </div>
                    <input className='prodDesc' onChange={(e) => this.updateDesc(e,product)} name='prodDesc'
                        placeholder={product.proddesc} input='text'/>
                    <div className='adminButts'>
                        <div className='delete' onClick={() => {this.props.deleteProduct(product.prodid)
                            alert('Item has been deleted.')}} title='Delete product'/>
                        <div onClick={() => {this.props.updateProduct(product.prodid,prodImg,prodName,prodType,prodDesc,prodPrice)
                            this.forceUpdate()
                            alert('Item has been updated')
                            }} title='Make changes to products' className='butt8'/>
                    </div>
                </div>
            )
        })
  
        return (
            <div className='firstAdmin'>
            <div className='secAdmin'>
                <Home/>
                <div className='adminTitle'>
                    <h1 className='pageAdmin'>Admin Portal</h1>
                    <Link to='/reports' className='rLinks'><div className='reportLink'>Reports</div></Link>
                    <button onClick={this.handleToggle} className='addNewButt'>Add New Product</button>
                </div>

                {this.state.toggle ?            // Determines whether add menu shows or not
                    <form className='showAddForm'>
                        <h1>Create Product</h1>
                        <input className='addNew' onChange={this.handleChange} name='prodImg' type='text' placeholder='Product image URL'/>
                        <input className='addNew' onChange={this.handleChange} name='prodName' type='text' placeholder='Product Name'/>
                        <div className='priceType'>
                            <input className='addProdT' onChange={this.handleChange} name='prodType' type='text' placeholder='Type'/>
                            <input className='addPrice' onChange={this.handleChange} name='prodPrice' type='text' placeholder='Price'/>
                        </div>
                        <input className='addNew' onChange={this.handleChange} name='prodDesc' type='text' placeholder='Product Description'/>
                        <button className='subButt' onClick={() => {
                            this.props.addProduct(prodImg,prodName,prodType,prodDesc,prodPrice)
                            alert('Item added successfully')}}>Submit</button>
                    </form>
                    :
                    <div className='hideAddForm'></div>}

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

export default connect(mapStateToProps,{getAllProducts,propInput,clearState,deleteProduct,addProduct,updateProduct})(Admin)
