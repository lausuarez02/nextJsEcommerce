import React, {useContext} from 'react';
import {AppContext} from '../context/context';

const SubTitle = ({data}) => {
    const state = useContext(AppContext);

    const AlphabeticalOrderBrands = data.sort((a, b) => {
        if(a.brand < b.brand) return -1;
        if(a.brand > b.brand) return 1;
        return 0;
    }).map((item, i) => <li key={i} ><a className="dropdown-item" onClick={(e) => state.setBrand(e.target.outerText)}>{item.brand}</a></li>);
  
    //failed attemp to do a max price
/*
    if(state.state){
        data.sort((a,b) => {state.setMaxPrice(a.price - b.price)})
    }
    */
    //const DoNotRepeatBrands = Array.from(new Set(data.brand))
    return (
        <div>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Products</h1>
                  <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                      <button type="button" className="btn btn-sm btn-outline-secondary">Min Price</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary" onClick={(e) => state.setState(e.target)}>Max Price</button>
                    </div>
               
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Brands
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            {AlphabeticalOrderBrands}
                        </ul>
                    </div>
                 </div>
            </div>
        </div>

    );
};

export default SubTitle;