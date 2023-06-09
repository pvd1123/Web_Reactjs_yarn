import React from "react";
import {createContext, ReactNode, useContext, useState} from 'react';

type ShoppingCartContext = {
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

function useShoppingCart(){
    return(
        useContext(ShoppingCartContext)
    )
}

export default useShoppingCart

type ShoppingCartProviderProps = {
    children: ReactNode
}

type CartItem = {
    id: number
    quantity: number
}

export function ShoppingCartProvider({children} : ShoppingCartProviderProps){
    const [cartItems, setCartItems] = useState<CartItem[]>([])

    function getItemQuantity(id: number){
        return cartItems.find(item => item.id === id) ?.quantity || 0
    }

    function increaseCartQuantity(id: number){
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id) == null){
                return [...currItems,{id, quantity:1}]
            } else{
                return currItems.map(item =>{
                    if(item.id === id){
                        return{...item, quantity: item.quantity + 1}
                    } else{
                        return item
                    }
                })                
            }
        })
    }

    function decreaseCartQuantity(id: number){
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id)?.quantity === 1){
                return currItems.filter(item => item.id !== id)
            } else{
                return currItems.map(item =>{
                    if(item.id === id){
                        return{...item, quantity: item.quantity - 1}
                    } else{
                        return item
                    }
                })                
            }
        })
    }

    function removeFromCart(id: number){
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id)
        })
    }

    return(
        <ShoppingCartContext.Provider value={{getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}