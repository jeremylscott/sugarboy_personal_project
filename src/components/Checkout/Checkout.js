import React from 'react'
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout'
  
    const CURRENCY = 'USD'
    const fromDollarToCent = amount => amount * 100

    const successPayment = data => {
        alert('Payment Successful')
    }

    const errorPayment = data => {
        alert('Payment Successful')
    }

    const onToken = (amount,description) => token =>
        axios.post('/createpayment', {
            description,
            source: token.id,
            currency: CURRENCY,
            amount: fromDollarToCent(amount)
        })
        .then(successPayment)
        .catch(errorPayment);
        
    const Checkout = ({name,description,amount,email}) => 
        <StripeCheckout
            name={name}
            description={description}
            amount={fromDollarToCent(amount)}
            token={onToken(amount,description)}
            email={email}
            currency={CURRENCY}
            stripeKey='pk_test_X9fLhUE5TCPP29eHqMlVLAeU'
        />

export default Checkout