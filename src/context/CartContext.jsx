import { createContext, useReducer } from "react";
import { reducer, cartInitialState } from "../reducers/cartReducer";

export const CartContext = createContext()



export function CartProvider ({ children }) {

    const [state, dispatch] = useReducer(reducer, cartInitialState)

    const addToCart = prod => dispatch({
        type: "ADD_TO_CART",
        payload: prod
    })

    const removeFromCart = prod => dispatch({
        type: "REMOVE_FROM_CART",
        payload: prod
    })

    const clearCart = () => dispatch({
        type: "CLEAR_CART"
    })

    return (
        <CartContext.Provider value={{
            cart: state,
            addToCart,
            removeFromCart,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}