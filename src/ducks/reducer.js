import axios from 'axios'

const initialState = {
    user: {},
    yeasts: [],
    cakes: [],
    kolaches: [],
    drinks: [],
    allProducts: [],
    product: [],
    prodId: 0,
    cart: [],
    cartTotal: 0,
    salesReports: []
}

// action types
const LOGIN = 'LOGIN'
const SIGN_UP = 'SIGN_UP'
const GET_YEASTS = 'GET_YEASTS'
const GET_CAKES = 'GET_CAKES'
const GET_KOLACHES = 'GET_KOLACHES'
const GET_DRINKS = 'GET_DRINKS'
const GET_SALES_REPORTS = 'GET_SALES_REPORTS'
const ADD_PRODUCT = 'ADD_PRODUCT'
const ADD_SALE = 'ADD_SALE'
const DELETE_PRODUCT = 'DELETE_PRODUCT'
const UPDATE_PRODUCT = 'CHANGE_PRODUCT'
const ADD_TO_CART = 'ADD_TO_CART'
const DELETE_FROM_CART = 'REMOVE_FROM_CART'
const CLEAR_CART = 'CLEAR_CART'
const UPDATE_CART_TOTAL = 'UPDATE_CART_TOTAL'
const GET_USER = 'GET_USER'
const LOG_OUT = 'LOG_OUT'
const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'

// action creators 
export function login(username,password) {
    return {
        type: LOGIN,
        payload: axios.post('/auth/login', {username,password})
    }
}

export function signup(username,password,email) {
    return {
        type: SIGN_UP,
        payload: axios.post('/auth/signup', {username,email,password})
    }
}

export function getYeast() {
    return {
        type: GET_YEASTS,
        payload: axios.get('/api/products/yeast')
    }
}

export function getCake() {
    return {
        type: GET_CAKES,
        payload: axios.get('/api/products/cake')
    }
}

export function getKolaches() {
    return {
        type: GET_KOLACHES,
        payload: axios.get('/api/products/kolaches')
    }
}

export function getDrinks() {
    return {
        type: GET_DRINKS,
        payload: axios.get('/api/products/drinks')
    }
}

export function addProduct(prodImg,prodName,prodType,prodDesc,prodPrice) {
    return {
        type: ADD_PRODUCT,
        payload: axios.post('/api/products', {prodImg,prodName,prodType,prodDesc,prodPrice})
    }
}

export function deleteProduct(prodId) {
    return {
        type: DELETE_PRODUCT,
        payload: axios.delete(`/api/products/${prodId}`)
    }
}

export function updateProduct(prodId,prodImg,prodName,prodType,prodDesc,prodPrice) {
    return {
        type: UPDATE_PRODUCT,
        payload: axios.put(`/api/products/${prodId}`, {prodImg,prodName,prodType,prodDesc,prodPrice})
    }
}

export function addToCart(product) {
    return {
        type: ADD_TO_CART,
        payload: axios.post('/api/cart', product)  
    }
}

export function addSale(cart) {
    return {
        type: ADD_SALE,
        payload: axios.post('/api/sale', {cart})
    }
}

export function deleteFromCart(index) {
    return {
        type: DELETE_FROM_CART,
        payload: axios.delete(`api/cart/${index}`)
    }
}

export function updateCartTotal(total) {
    return {
        type: UPDATE_CART_TOTAL,
        payload: total
    }
}

export function clearCart() {
    axios.get('/api/clearcart')
    return {
        type: CLEAR_CART,
        payload: []
    }
}

export function getUser() {
    return {
        type:GET_USER,
        payload: axios.get('/api/user')
    }
}

export function logOut() {
    return {
        type: LOG_OUT,
        payload: axios.get('/api/delete')
    }
}

export function getAllProducts() {
    return {
        type: GET_ALL_PRODUCTS,
        payload: axios.get('/api/products')
    }
}

export function getSalesReports() {
    return {
        type: GET_SALES_REPORTS,
        payload: axios.get('/api/salesreports')
    }
}


// reducer function
function reducer(state=initialState, action) {
    switch(action.type) {
        case `${LOGIN}_FULFILLED`:
            return {
                ...state, user: action.payload.data
            }
        case `${SIGN_UP}_FULFILLED`:
            return {
                ...state, user: action.payload.data
            }
        case `${GET_YEASTS}_FULFILLED`:
            return {
                ...state, yeasts: action.payload.data
            }
        case `${GET_CAKES}_FULFILLED`:
            return {
                ...state, cakes: action.payload.data
            }
        case `${GET_KOLACHES}_FULFILLED`:
            return {
                ...state, kolaches: action.payload.data
            }
        case `${GET_DRINKS}_FULFILLED`:
            return {
                ...state, drinks: action.payload.data
            }
        case `${ADD_PRODUCT}_FULFILLED`:
            return {
                ...state, product: action.payload.data
            }
        case `${DELETE_PRODUCT}_FULFILLED`:
            return {
                ...state, product: action.payload.data
            }
        case `${UPDATE_PRODUCT}_FULFILLED`:
            return {
                ...state, product: action.payload.data
            }
        case `${ADD_TO_CART}_FULFILLED`:
            return {
                ...state, cart: action.payload.data
            }
        case `${DELETE_FROM_CART}_FULFILLED`:
            return {
                ...state, cart: action.payload.data
            }
        case `${CLEAR_CART}_FULFILLED`:
            return {
                ...state, cart: {}
            }
        case UPDATE_CART_TOTAL:
            return {
                ...state, cartTotal: action.payload
            }
        case `${GET_USER}_FULFILLED`:
            return {
                ...state, user: action.payload.data
            }
        case `${LOG_OUT}_FULFILLED`:
            return {
                ...state, user: {}
            }
        case `${GET_ALL_PRODUCTS}_FULFILLED`:
            return {
                ...state, allProducts: action.payload.data
            }
        case `${GET_SALES_REPORTS}_FULFILLED`:
            return {
                ...state, salesReports: action.payload.data
            }

            default: return state;
    }
}


export default reducer;