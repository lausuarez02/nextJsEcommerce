import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export function AppWrapper({ children }) {
    const [brand, setBrand] = useState([])
    const [search, setSearch] = useState('hola')  
    const [ProductType, setProductType] = useState({});
    const [maxPrice, setMaxPrice] = useState('')
    const [state, setState] = useState('')

    return(
        <AppContext.Provider value={{search, setSearch, brand, setBrand, ProductType, setProductType, maxPrice, setMaxPrice,state, setState}}>
            {children}
        </AppContext.Provider>
    );
}
