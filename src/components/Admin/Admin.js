import React, {Component} from 'react'
import {connect} from 'react-redux'
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
            prodType: ''
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

    updateImg = (e) => {
        this.setState({
            prodImg: e.target.value
        })
    }

    updateName = (e) => {
        this.setState({
            prodName: e.target.value
        })
    }

    updateType = (e) => {
        this.setState({
            prodType: e.target.value
        })
    }

    updateDesc = (e) => {
        this.setState({
            prodDesc: e.target.value
        })
    }

    render() {
             const {prodName,prodDesc,prodImg,prodType} = this.state
        
        const allProdList = this.props.allProducts.map((product) => {
            return (
                <div key={product.prodid} className='cardWrapper8'>
                    <img className='cardImg8' src={product.prodimg} alt='donut'/>
                    <input className='prodImg' onChange={this.updateImg} name='prodImg'
                        placeholder={product.prodimg} input='text'/>
                    <input className='prodName' onChange={this.updateName} name='prodName'
                        placeholder={product.prodname} input='text'/>
                    <input className='prodType' onChange={this.updateType} name='prodType'
                        placeholder={product.prodtype} input='text'/>
                    <input className='prodDesc' onChange={this.updateDesc} name='prodDesc'
                        placeholder={product.proddesc} input='text'/>
                    <div className='adminButts'>
                        <button className='delete' onClick={() => this.props.deleteProduct(product.prodid)} title='Delete product'>X</button>
                        <button onClick={() => this.props.updateProduct(product.prodid,prodImg,prodName,prodType,prodDesc)} title='Make changes to products' className='butt8'>Save</button>
                        <button className='cancel' onClick={() => this.props.clearState} title='Cancel changes'>Cancel</button>
                    </div>
                </div>
            )
        })
  
        return (
            <div className='firstAdmin'>
            <div className='secAdmin'>
                <Home/>
                <div className='adminTitle'>
                    <h1>Admin Portal</h1>
                    <button onClick={this.handleToggle} className='addNewButt'>Add New Product</button>
                </div>

                {this.state.toggle ?            // Determines whether add menu shows or not
                    <form className='showAddForm'>
                        <h1>Create Product</h1>
                        <input className='addNew' onChange={this.updateImg} name='prodImg' type='text' placeholder='Product image URL'/>
                        <input className='addNew' onChange={this.updateName} name='prodName' type='text' placeholder='Product Name'/>
                        <input className='addNew' onChange={this.updateType} name='prodType' type='text' placeholder='Product Type'/>
                        <input className='addNew' onChange={this.updateDesc} name='prodDesc' type='text' placeholder='Product Description'/>
                        <button onClick={() => this.props.addProduct(prodImg,prodName,prodType,prodDesc)} className>Submit</button>
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
