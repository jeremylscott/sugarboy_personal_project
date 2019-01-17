import axios from 'axios'

const initialState = {
    user: {},
    yeasts: [],
    cakes: [],
    kolaches: [],
    drinks: [],
    allProducts: [],
    prodImg: '',
    prodName: '',
    prodDesc: '',
    prodType: '',
    product: [],
    prodId: 0,
    prodPrice: 10,
    cart: [],
    cartTotal: 0,
    currentProp: ''
}

// action types
const LOGIN = 'LOGIN'
const SIGN_UP = 'SIGN_UP'
const GET_YEASTS = 'GET_YEASTS'
const GET_CAKES = 'GET_CAKES'
const GET_KOLACHES = 'GET_KOLACHES'
const GET_DRINKS = 'GET_DRINKS'
const UPDATE_NAME = 'UPDATE_NAME'
const UPDATE_IMG = 'UPDATE_IMG'
const UPDATE_PROD_DESC = 'UPDATE_PROD_DESC'
const UPDATE_PROD_TYPE = 'UPDATE_PROD_TYPE'
const ADD_PRODUCT = 'ADD_PRODUCT'
const DELETE_PRODUCT = 'DELETE_PRODUCT'
const UPDATE_PRODUCT = 'CHANGE_PRODUCT'
const ADD_TO_CART = 'ADD_TO_CART'
const UPDATE_CART_TOTAL = 'UPDATE_CART_TOTAL'
const GET_USER = 'GET_USER'
const LOG_OUT = 'LOG_OUT'
const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'
const PROP_INPUT = 'PROP_INPUT'
const CLEAR_STATE = 'CLEAR_STATE'

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

export function updateName(prodName) {
    return {
        type: UPDATE_NAME,
        payload: prodName
    }
}

export function updateImg(prodImg) {
    return {
        type: UPDATE_IMG,
        payload: prodImg
    }
}

export function updateProdDesc(prodDesc) {
    return {
        type: UPDATE_PROD_DESC,
        payload: prodDesc
    }
}

export function updateProdType(prodType) {
    return {
        type: UPDATE_PROD_TYPE,
        payload: prodType
    }
}

export function addProduct(prodName,prodDesc,prodType,prodImg) {
    return {
        type: ADD_PRODUCT,
        payload: axios.post('/api/products', {prodName,prodDesc,prodType,prodImg})
    }
}

export function deleteProduct(prodId) {
    return {
        type: DELETE_PRODUCT,
        payload: axios.delete(`/api/products/${prodId}`)
    }
}

export function updateProduct(prodId,prodImg,prodName,prodType,prodDesc) {
    return {
        type: UPDATE_PRODUCT,
        payload: axios.put(`/api/products/${prodId}`, {prodImg,prodName,prodType,prodDesc})
    }
}

export function addToCart(product) {
    return {
        type: ADD_TO_CART,
        payload: axios.put('/api/cart', product)
    }
}

export function updateCartTotal(cartTotal) {
    return {
        type: UPDATE_CART_TOTAL,
        payload: cartTotal
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

export function propInput(donuts) {
    return {
        type: PROP_INPUT,
        payload: donuts
    }
}

export function clearState() {
    return {
        type: CLEAR_STATE
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
        case UPDATE_NAME:
            return {
                ...state, prodName: action.payload.data
            }
        case UPDATE_IMG:
            return {
                ...state, prodImg: action.payload.data
            }
        case UPDATE_PROD_DESC:
            return {
                ...state, prodDesc: action.payload.data
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
        case UPDATE_CART_TOTAL:
            return {
                ...state, cartTotal: action.payload.data
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
        case PROP_INPUT:
            return {
                ...state, prodName: action.payload.prodName,
                          prodDesc: action.payload.prodDesc,
                          prodImg: action.payload.prodImg,
                          prodType: action.payload.prodType,
                          currentProp: action.payload
            }
        case UPDATE_PROD_TYPE:
            return {
                ...state, prodType: action.payload.data
            }
        case CLEAR_STATE:
            return {
                ...state, 
                    prodName: '',
                    prodDesc: '',
                    prodImg: '',
                    prodType: ''
            }

            default: return state;
    }
}


export default reducer;