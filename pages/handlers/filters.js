export const SearchBarFilter = ({data, search, brand, Product }) => {
    return data.filter(info => 
        info.name.toLowerCase().includes(search.toLowerCase()) ||
        info.product_type.toLowerCase().includes(search.toLowerCase()) ||
        info.brand === brand ||
        info.product_type === Product
    ); 
}

export const AlphabeticalOrderProductType = ({data, setProductType}) => {
        return data.sort((a, b) => {
            if(a.product_type < b.product_type) return -1;
            if(a.product_type > b.product_type) return 1;
            return 0;
        })
        
    }    
    
export const AlphabeticalOrderBrands = ({data, setBrand}) => {
        return data.sort((a, b) => {
            if(a.brand < b.brand) return -1;
            if(a.brand > b.brand) return 1;
            return 0;
        })
      
    }

export  const duplicateCheckBrandsFunction = ({ AlphabeticalOrderBrandsHandler, duplicateCheckBrands }) => {
    return AlphabeticalOrderBrandsHandler.map(data => {if (duplicateCheckBrands.includes(data.brand))
        return null;
        duplicateCheckBrands.push(data.brand);
      return data});
        
}

export const duplicateMapBrands = ({ duplicateCheckBrands, setBrand }) => {
    return duplicateCheckBrands.map(data => {return(<li key={data} ><a className="dropdown-item" onClick={(e) => setBrand(e.target.outerText)}>{data}</a></li>)})
}

export const duplicateCheckProductsFunction = ({ AlphabeticalHelper, duplicateCheckProducts }) => {
    return AlphabeticalHelper.map(data => {if (duplicateCheckProducts.includes(data.product_type))
        return null;
        duplicateCheckProducts.push(data.product_type);
      return data;
      })
}
  
export const duplicateMapProducts = ({ duplicateCheckProducts, setProductType }) => {
    return duplicateCheckProducts.map((data) => {return(<li key={data} ><a className="dropdown-item" onClick={(e) => setProductType(e.target.outerText)}>{data}</a></li>)})
}