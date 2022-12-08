import { createContext, useState } from "react";

const CartContext = createContext()

export function CartProvider({ children }) {

    const [cartItems, setCartItems] = useState([])

    const addToCart = (name, price, url) => {


        setCartItems((prevState) => [...prevState, { name, price, url }])
        console.log("added")
    }

    return (
        <CartContext.Provider value={{ cartItems, setCartItems, addToCart }}>{children}</CartContext.Provider>
    )
}
export default CartContext;