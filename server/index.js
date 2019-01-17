require('dotenv').config()
const express = require('express')
const {json} = require('body-parser')
const massive = require('massive')
const session = require('express-session')
const app = express()
const {getYeast,getCake,getKolaches,getDrinks,login,signup,addProduct,
        deleteProduct,updateProduct,addToCart,getUser,logOut,getAllProducts} = require('./controller')
app.use(json())

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

app.post('/auth/login', login)      // logs user in
app.post('/auth/signup', signup)    // user signs up for account
app.post('/api/products', addProduct)   // adds new product to the database
app.post('/api/cart', addToCart)    // adds product to users cart

app.get('/api/delete', logOut)
app.delete('/api/products/:id', deleteProduct)      // deletes product from the database
app.put('/api/products/:id', updateProduct)     // updates a product in the database

app.listen(process.env.PORT, () => console.log(`Server listening on port ${process.env.PORT}`))