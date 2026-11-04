import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (vehicle) => {
        setCart((prev) => [...prev, vehicle]);
    };

    const removeFromCart = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    const clearCart = () => {
        setCart([]);
    };

    const totalPrice = cart.reduce(
        (total, item) => total + Number(item.price || 0),
        0
    );

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                clearCart,
                totalPrice,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);