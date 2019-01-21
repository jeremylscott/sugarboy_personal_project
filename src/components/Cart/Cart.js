import React, {Component} from 'react'
import Home from '../Home/Home'
import {connect} from 'react-redux'
import {deleteFromCart,updateCartTotal,clearCart} from '../../ducks/reducer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Table,TableBody,TableHeader,TableHeaderColumn,TableRow,TableRowColumn} from 'material-ui/Table'
import './cart.scss'

class Cart extends Component {
    render() {

        if (this.props.cart.length > 0) {
            var total = this.props.cart.map(item => item.price * 1.0825).reduce(((prev, next) => prev + next),0)
            this.props.updateCartTotal(total)
            var cart = this.props.cart.map((item,i) => {
                return (
                    <TableRow key={i}>
                        <TableRowColumn className='test'>{item.prodname}</TableRowColumn>
                        <TableRowColumn>{item.price}</TableRowColumn>
                        <TableRowColumn>1</TableRowColumn>
                        <TableRowColumn>{item.price}</TableRowColumn>
                        <TableRowColumn><button onClick={() => this.props.deleteFromCart(i)}>X</button></TableRowColumn>
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
                                        <TableRow>
                                            <TableHeaderColumn>Product</TableHeaderColumn>
                                            <TableHeaderColumn>Price</TableHeaderColumn>
                                            <TableHeaderColumn>Quantity</TableHeaderColumn>
                                            <TableHeaderColumn>Total</TableHeaderColumn>
                                            <TableHeaderColumn>Delete</TableHeaderColumn>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody displayRowCheckbox={false}>
                                        {cart}
                                        <TableRow>
                                            <TableRowColumn>{`           `}</TableRowColumn>
                                            <TableRowColumn>{`           `}</TableRowColumn>
                                            <TableRowColumn>{`           `}</TableRowColumn>
                                            <TableRowColumn>Order Total with Tax:</TableRowColumn>
                                            <TableRowColumn>{total ? parseFloat(total.toFixed(2)) : null}</TableRowColumn>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </MuiThemeProvider>
                        </div>
                        : null}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => state

export default connect(mapStateToProps, {updateCartTotal,clearCart,deleteFromCart})(Cart)