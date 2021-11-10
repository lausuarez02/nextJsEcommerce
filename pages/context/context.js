import { createContext, useContext, useState, useEffect } from "react";

export const AppContext = createContext();

export function AppWrapper({ children, data }) {
    const [brand, setBrand] = useState([])
    const [search, setSearch] = useState('hola')  
    const [ProductType, setProductType] = useState({});
    const [maxPrice, setMaxPrice] = useState('')
    const [state, setState] = useState('')
    useEffect(() => {
       console.log('hola', data);
    }, [])
    let sharedState = {}

    return(
        <AppContext.Provider value={{search, setSearch, brand, setBrand, ProductType, setProductType, maxPrice, setMaxPrice,state, setState}}>
            {children}
        </AppContext.Provider>
    );
}

export async function getServerSideProps(){
    const res = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json')
    const data = await res.json()
  
    return{
      props:{
        data
      }
    }
  }