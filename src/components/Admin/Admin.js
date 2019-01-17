import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAllProducts,updateName,updateProdDesc,updateImg,propInput,updateProdType,updateProduct,clearState,deleteProduct} from '../../ducks/reducer'
import './admin.scss'
import Home from '../Home/Home'


class Admin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            toggle: false
        }
    }

    handleToggle = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }

    componentDidMount() {
        this.props.getAllProducts()
        this.props.propInput(this.props.allProducts)
    }

    render() {
        console.log(this.props);
        const {prodName,prodDesc,prodImg,prodType} = this.props
        const allProdList = this.props.allProducts.map((product,prodId) => {
            return (
                <div key={prodId} className='cardWrapper8'>
                    <img className='cardImg8' src={product.prodimg} alt='donut'/>
                    <input className='prodImg' onChange={(e) => this.props.updateImg(e.target.value)} name='prodImg'
                        placeholder={this.props.allProducts.prodImg}/>
                    <input className='prodName' onChange={(e) => this.props.updateName(e.target.value)} name='prodName'
                        placeholder={this.props.allProducts.prodName}/>
                        <input className='prodType' onChange={(e) => this.props.updateProdType(e.target.value)} name='prodDesc'
                        placeholder={this.props.allProducts.prodType}/>
                    <input className='prodDesc' onChange={(e) => this.props.updateProdDesc(e.target.value)} name='prodDesc'
                        placeholder={this.props.allProducts.prodDesc}/>
                    <div className='adminButts'>
                        <button className='delete' onClick={() => this.props.deleteProduct(prodId)} title='Delete product'>X</button>
                        <button onClick={() => this.props.updateProduct(prodId,prodImg,prodName,prodType,prodDesc)} title='Make changes to products' className='butt8'>Save</button>
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
                    <form onSubmit={this.handleReg} className='showAddForm'>
                        <h1>Create Product</h1>
                        <input className='addNew' onChange={this.handleChange} name='prodImg' value={this.props.prodImg} placeholder='Product image URL'/>
                        <input className='addNew' onChange={this.handleChange} name='prodName' type='password' value={this.props.prodName} placeholder='Product Name'/>
                        <input className='addNew' onChange={this.handleChange} name='prodType' value={this.props.prodType} placeholder='Product Type'/>
                        <input className='addNew' onChange={this.handleChange} name='prodDesc' value={this.props.prodDesc} placeholder='Product Description'/>
                        <button className>Submit</button>
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

export default connect(mapStateToProps,{getAllProducts,updateProdDesc,updateImg,updateName,propInput,updateProdType,clearState,deleteProduct,updateProduct})(Admin)
