const configureStripe = require('stripe')

const stripe = configureStripe('sk_test_v9DpZubxry0EP1kwUtoMXG3N')

const postStripeCharges = res => (stripeErr,stripeRes) => {
    if (stripeErr) {
        res.status(500).json({error: stripeErr})
    }
    else {
        res.status(200).json({success: stripeRes})
    }
}

const paymentApi = app => {
    app.get('/createpayment', (req,res) => {
        res.send({message: 'Hello Stripe checkout server!', timestamp: new Date().toISOString()})
    })
    app.post('/createpayment', (req,res) => {
        stripe.charges.create(req.body, postStripeCharges(res))
    })
    return app;
}

module.exports = {
    paymentApi
}