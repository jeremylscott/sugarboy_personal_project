const bcrypt = require('bcryptjs')

const getYeast = (req,res) => {
    const db = req.app.get('db')
    db.get_yeast()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json('Internal server error - yeast')
        console.log(err)
    })
}

const getCake = (req,res) => {
    const db = req.app.get('db')
    db.get_cake()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json('Internal server error - cake')
        console.log(err)
    })
}

const getKolaches = (req,res) => {
    const db = req.app.get('db')
    db.get_kolaches()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json('Internal server error - kolaches')
        console.log(err)
    })
}

const getDrinks = (req,res) => {
    const db = req.app.get('db')
    db.get_drinks()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json('Internal server error - drinks')
        console.log(err);
    })
}

const login = (req,res) => {
    const db = req.app.get('db')
    db.find_user(req.body)
    .then(async users => {
        if(!users.length) {
            res.status(401).json('No user found')
        }
        else {
            const isMatch = await bcrypt.compare(req.body.password, users[0].password)
            if(isMatch) {
                req.session.user = {username: users[0].username}        // added the user to the session
                res.status(200).json({username: users[0].username})
            }
            else {
                res.status(401).json('Incorrect password')
            }
        }
    })
}

const signup = async (req,res) => {
    const db = req.app.get('db')
    const hash = await bcrypt.hash(req.body.password, 10)

    try {
    const response = await db.add_user({username: req.body.username, password: hash})
    res.json({username: response[0].username})
    }
    catch(e) {
        console.log(e)
        res.status(401).json('An error occurred - signup')
    }
}

const addProduct = (req,res) => {
    const {prodName,prodDesc,prodType,prodImg} = req.body
    const db = req.app.get('db')
    db.add_product({prodName,prodDesc,prodType,prodImg})
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json('Internal server error - add product')
        console.log(err);
    })
}

const deleteProduct = (req,res) => {
    const db = req.app.get('db')
    db.delete_product(req.params.id)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json('Internal server error - delete product')
        console.log(err);
    })
}

const updateProduct = (req,res) => {
    const {prodName,prodType,prodImg,prodDesc} = req.body
    const db = req.app.get('db')
    db.update_product([req.params.id,prodName,prodDesc,prodImg,prodType])
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json('Internal server error - update')
        console.log(err);
    })
}

module.exports = {
    getYeast,
    getCake,
    getKolaches,
    getDrinks,
    login,
    signup,
    addProduct,
    deleteProduct,
    updateProduct
}