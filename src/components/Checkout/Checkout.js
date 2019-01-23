import React, {Component} from 'react'
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout'

const CURRENCY = 'USD'
const fromDollarToCent = amount => amount * 100

const successPayment = data => {
    alert('Payment Successful')
}

const errorPayment = data => {
    alert('Payment Error')
}

const onToken = (amount,description) => token =>
    axios.post('/createpayment', {
        description,
        source: token.id,
        currency: CURRENCY,
        amount: fromDollarToCent(1)
    })
    .then(successPayment)
    .catch(errorPayment);
                
const Checkout = ({name,description,amount,email}) => 
    <StripeCheckout
        name={name}
        description={description}
        amount={fromDollarToCent(1)}
        token={onToken(amount,description)}
        email={email}
        currency={CURRENCY}
        stripeKey='pk_test_X9fLhUE5TCPP29eHqMlVLAeU'
    />

export default Checkout