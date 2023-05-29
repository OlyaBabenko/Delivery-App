const defaultState = {
    cart: [
        // {
        //     id:	987589,
        //     restaurant: {
        //         id: 3,
        //         name: "Homemade Dishes",
        //     },
        //     name: "Varenyky with meat",
        //     imgUrl: "https://media.puzatahata.ua/__sized__/images/productosg/2023/03/15/292499ae-ad67-45cc-9a98-eef764be57e5-thumbnail-400x400-100.jpg",
        //     weight: "220g",
        //     description: "A dish of boiled dough with a filling.",
        //     oldPrice: null,
        //     actualPrice: 96.00,
        //     count: 1,
        // }
    ],
}

const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const ADD_COUNT = "ADD_COUNT";
const REMOVE_COUNT = "REMOVE_COUNT";

export const cartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {...state, cart: [...state.cart, action.payload]}
        case REMOVE_FROM_CART:
            return {...state, cart: state.cart.filter(item => item.id !== action.payload.id)}
        case ADD_COUNT:
            return {
                ...state,
                cart: state.cart.map((item) => (item.id === action.payload.id
                        ? {...item, count: (item.count + action.payload.count)}
                        : item
                ))
            }
        case REMOVE_COUNT:
            return {
                ...state,
                cart: state.cart.map(item => (item.id === action.payload.id
                    ? {...item, count: (item.count - action.payload.count)}
                    : item
                ))
            }
        default:
            return state
    }
}

export const addToCart = (payload) => ({type: ADD_TO_CART, payload})
export const removeFromCart = (payload) => ({type: REMOVE_FROM_CART, payload})
export const addCount = (payload) => ({type: ADD_COUNT, payload})
export const removeCount = (payload) => ({type: REMOVE_COUNT, payload})