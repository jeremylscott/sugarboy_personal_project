import axios from 'axios'

const initialState = {
    user: {},
    yeasts: [],
    cakes: [],
    kolaches: [],
    drinks: [],
    prodImg: '',
    prodName: '',
    prodDesc: '',
    product: [],
    prodId: 0
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
const ADD_PRODUCT = 'ADD_PRODUCT'
const DELETE_PRODUCT = 'DELETE_PRODUCT'
const UPDATE_PRODUCT = 'CHANGE_PRODUCT'


// action creators 
export function login(username,password) {
    return {
        type: LOGIN,
        payload: axios.post('/auth/login', {username,password})
    }
}

export function signup(username,email,password) {
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

export function getImg(img) {
    return {
        type: UPDATE_IMG,
        payload: img
    }
}

export function updateProdDesc(prodDesc) {
    return {
        type: UPDATE_PROD_DESC,
        payload: prodDesc
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

export function updateProduct(prodId,prodName,prodDesc,prodImg,prodType) {
    return {
        type: UPDATE_PRODUCT,
        payload: axios.put(`/api/products/${prodId}`, {prodName,prodDesc,prodImg,prodType})
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
        case `${UPDATE_NAME}_FULFILLED`:
            return {
                ...state, prodName: action.payload.data
            }
        case `${UPDATE_IMG}_FULFILLED`:
            return {
                ...state, img: action.payload.data
            }
        case `${UPDATE_PROD_DESC}_FULFILLED`:
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

            default: return state;

    }
}




export default reducer;