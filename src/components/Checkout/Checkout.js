import React from 'react'
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout'

const CURRENCY = 'USD'

const successPayment = data => {
    alert('Payment Successful')
}

const errorPayment = data => {
    alert('Payment Error')
}

const fromDollarToCent = amount => amount * 100

const onToken = (description,amount,email) => token =>
    axios.post('/api/createpayment', 
    {
        description,
        source: token.id,
        currency: CURRENCY,
        receipt_email: email,
        amount: fromDollarToCent(amount)
    })
    .then(successPayment)
    .catch(errorPayment)

const Checkout = ({name,description,amount,email}) => {
        return (
            <StripeCheckout
                name={name}
                description={description}
                amount={fromDollarToCent(amount)}
                token={onToken(amount,description,email)}
                currency={CURRENCY}
                stripeKey={process.env.REACT_APP_STRIPE_TEST_KEY}/>
        )
}

export default Checkout