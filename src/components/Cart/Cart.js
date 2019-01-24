import React, {Component} from 'react'
import Home from '../Home/Home'
import Checkout from '../Checkout/Checkout'
import {connect} from 'react-redux'
import {deleteFromCart,updateCartTotal,clearCart,addSale} from '../../ducks/reducer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Table,TableBody,TableHeader,TableHeaderColumn,TableRow,TableRowColumn} from 'material-ui/Table'
import './cart.scss'

class Cart extends Component {

    handleAddSale = () => {
        this.props.addSale(this.props.cart, this.props.user.userid)
        this.props.clearCart()
        this.forceUpdate()
    }

    render() {

        if (this.props.cart.length > 0) {
            var total = this.props.cart.map(item => item.price).reduce(((prev, next) => prev + next),0)
            this.props.updateCartTotal(total)
            var cart = this.props.cart.map((item,i) => {
                return (
                    <TableRow key={i}>
                        <TableRowColumn>{item.prodname}</TableRowColumn>
                        <TableRowColumn>{item.price}</TableRowColumn>
                        <TableRowColumn>1</TableRowColumn>
                        <TableRowColumn>{item.price}</TableRowColumn>
                        <TableRowColumn><button className='DeleteButton' onClick={() => this.props.deleteFromCart(i)}>X</button></TableRowColumn>
                    </TableRow>
                )
            })
        }

        return (
            <div className='cartDisplay'>
                <Home/>
                <div className='cartBody'>
                    <div className='cartTitle'><h1>Cart</h1></div>
                        {this.props.cart[0] ? 
                        <div>
                            <MuiThemeProvider>
                                <Table>
                                    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                                        <TableRow style={{background: '#001D4A', color: 'white'}}>
                                            <TableHeaderColumn className='productCol'>Product</TableHeaderColumn>
                                            <TableHeaderColumn className='priceCol'>Price</TableHeaderColumn>
                                            <TableHeaderColumn className='quantityCol'>Quantity</TableHeaderColumn>
                                            <TableHeaderColumn className='totalCol'>Total</TableHeaderColumn>
                                            <TableHeaderColumn className='deleteCol'>Delete</TableHeaderColumn>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody displayRowCheckbox={false}>
                                        {cart}
                                        <TableRow>
                                            <TableRowColumn>{`           `}</TableRowColumn>
                                            <TableRowColumn>{`           `}</TableRowColumn>
                                            <TableRowColumn>{`           `}</TableRowColumn>
                                            <TableRowColumn>Order Total:</TableRowColumn>
                                            <TableRowColumn>{total ? parseFloat(total.toFixed(2)) : null}</TableRowColumn>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </MuiThemeProvider>

                            {this.props.user ?
                            <div className='submitOrder' onClick={this.handleAddSale}>
                                <Checkout
                                    name={'Sugarboy Donuts'}
                                    description={'Donuts'}
                                    amount={1}
                                    email={this.props.user.email}/>
                            </div>
                            : null
                            }
                        </div>
                        : 
                        <div className='noItems'>
                            <h1>No Items In Cart!</h1>
                        </div>
                        }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => state

export default connect(mapStateToProps, {updateCartTotal,clearCart,deleteFromCart,addSale})(Cart)