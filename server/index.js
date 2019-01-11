require('dotenv').config()
const express = require('express')
const {json} = require('body-parser')
const massive = require('massive')
const session = require('express-session')
const bcrypt = require('bcryptjs')
const app = express()
const {} = require('./controller')
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
        maxAge: 100 * 60 * 60 * 24 * 7
    }
}))




app.listen(process.env.PORT, () => console.log(`Server listening on port ${process.env.PORT}`))