import React, { createContext, useState } from "react";
import all_product from '../components/Assets/all_product'

export const ShopContext = createContext(null);
const getDefaultCart = () =>{
    let cart = {};
    for (let index = 0; index < all_product.length; index++) {
        cart[index] =0;
    }
    return cart;
    }
     

    const ShopConextProvider = (props) => {
    const [cartItems,setcartItems] = useState(getDefaultCart());
 
    const addToCart = (itemId) =>{
        setcartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        


    }
    const removeFromCart = (itemId) =>{
        setcartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
   
    }
    const contextValue = {all_product,cartItems,addToCart,removeFromCart};
   
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopConextProvider;
