import { createContext, useState } from "react";

export const ShopContext=createContext(null)
export const ShopContextProviedr=(props)=>{
    const [cartItem,setCartItem]=useState([])

    const addToCart=(itemId)=>{
        if(!cartItem?.find((item)=>item.id===itemId)){
            setCartItem([...cartItem,{id:itemId , count:1}])
        }else{
        setCartItem(cartItem.map((i)=>{
        return    i.id === itemId ? { ...i, count: i.count + 1 } : i
    
        })) 
    }
        }

    const removeFromCart=(itemId)=>{
        setCartItem(cartItem.map((i)=>{
            if(i.id===itemId)
                return {...i,count:i.count===0 ? 0: i.count-1}
            else
            return i
        }))

    }


    const contextValue={cartItem,addToCart,removeFromCart}

    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>



}