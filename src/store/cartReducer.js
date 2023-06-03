const defaultState = {
    cart: JSON.parse(localStorage.getItem('cart')) || [],
}

const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const ADD_COUNT = "ADD_COUNT";
const REMOVE_COUNT = "REMOVE_COUNT";
const RESET_CART = "RESET_CART"

export const cartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const updatedCart = [...state.cart, action.payload]
            localStorage.setItem('cart', JSON.stringify(updatedCart))
            return {...state, cart: updatedCart}
        case REMOVE_FROM_CART:
            const filteredCart = state.cart.filter(item => item.id !== action.payload.id)
            localStorage.setItem('cart', JSON.stringify(filteredCart))
            return {...state, cart: filteredCart}
        case ADD_COUNT:
            const incrementedCount = state.cart.map((item) => (item.id === action.payload.id
                ? {...item, count: (item.count + action.payload.count)}
                : item
            ))
            localStorage.setItem('cart', JSON.stringify(incrementedCount))
            return {
                ...state,
                cart: incrementedCount
            }
        case REMOVE_COUNT:
            const decrementedCount = state.cart.map(item => (item.id === action.payload.id
                ? {...item, count: (item.count - action.payload.count)}
                : item
            ))
            localStorage.setItem('cart', JSON.stringify(decrementedCount))
            return {
                ...state,
                cart: decrementedCount
            }
        case RESET_CART:
            localStorage.removeItem('cart')
            return {...state, cart: []};
        default:
            return state
    }
}

export const addToCart = (payload) => ({type: ADD_TO_CART, payload})
export const removeFromCart = (payload) => ({type: REMOVE_FROM_CART, payload})
export const addCount = (payload) => ({type: ADD_COUNT, payload})
export const removeCount = (payload) => ({type: REMOVE_COUNT, payload})
export const resetCart = () => ({type: RESET_CART})