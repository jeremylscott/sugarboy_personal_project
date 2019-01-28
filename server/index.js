require('dotenv').config()
const express = require('express')
const {json} = require('body-parser')
const path = require('path')
const massive = require('massive')
const session = require('express-session')
const nodemailer = require('nodemailer')
const app = express()
const {getYeast,getCake,getKolaches,getDrinks,login,signup,addProduct,
        deleteProduct,updateProduct,addToCart,getUser,logOut,getAllProducts,clearCart,
        deleteFromCart,addSale,getSalesReports} = require('./controller')

app.use(json())

app.use(express.static(`${__dirname}/../build`))

// connect the database
massive(process.env.CONNECTION_STRING)
    .then(db => {
        app.set('db',db)
        console.log('Database Connected');
    })
    .catch(err => console.log(err))

// create a session
app.use(session({
    secret: process.env.SECRET,
    resave: true,
    saveUnitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}))

app.get('/api/products', getAllProducts)    // returns all products for admins
app.get('/api/products/yeast', getYeast)        // returns yeast donuts from database
app.get('/api/products/cake', getCake)      // returns cake donuts from database
app.get('/api/products/kolaches', getKolaches)      // returns kolaches from database
app.get('/api/products/drinks', getDrinks)      // returns drinks from database
app.get('/api/user', getUser)
app.get('/api/delete', logOut)
app.get('/api/clearcart', clearCart)        // clear items from cart
app.get('/api/salesreports', getSalesReports)       // get the items used in report component
app.post('/auth/login', login)      // logs user in
app.post('/auth/signup', signup)    // user signs up for account
app.post('/api/products', addProduct)   // adds new product to the database
app.post('/api/sale', addSale)       // add sale to database
app.post('/api/cart', (req,res,next) => {
    if (!req.session.cart){
        req.session.cart=[]
        next()
    } else {
        next()
    }
} , addToCart)    // adds product to users cart
app.post('/api/sendmail', function(req,res,next) {      // used with nodemailer to send mail
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        },

        tls: {
            rejectUnauthorized: false
        }

    })
    let mailOptions = {
        from: `${req.body.email}`,
        to: `${process.env.EMAIL}`,
        subject: `${req.body.subject}`,
        text: `${req.body.message}`
    }
    console.log(req.body.email);
    transporter.sendMail(mailOptions, function (err,res) {
        if(err) {
            console.log('an error occurred: ', err);
        }
        else {
            null
        }
    })
})       

app.delete('/api/products/:id', deleteProduct)      // deletes product from the database
app.delete('/api/cart/:id', deleteFromCart)     // removes items from cart

app.put('/api/products/:id', updateProduct)     // updates a product in the database

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'))
})

app.listen(process.env.PORT, () => console.log(`Server listening on port ${process.env.PORT}`))