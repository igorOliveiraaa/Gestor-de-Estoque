import { Children, createContext, useState } from "react";

export const StockContext =  createContext({})

export function StockContextProvider({children}){
    const [items, setItems] = useState(() =>{
        const storedItems = localStorage.getItem('obc-react-stock')
        if(!storedItems) return[]
        const items = JSON.parse(storedItems)
        items.forEacch((item) =>{
            item.createdAt = new Date(item.createdAt)
            item.createdAt = new Date(item.updatedAt)
        })
        return items
    })

    const addItem = (item) =>{
        setItems(currentState =>{
            const updatedItems =[item,...currentState]
            localStorage.setItem('obc-react-stock', JSON.stringify(updatedItems))
            return updatedItems
        })
    }

    return(
        <StockContext.Provider>
        {Children}
        </StockContext.Provider>
    )
}