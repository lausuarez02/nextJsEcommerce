import React, {useContext, useMemo} from 'react';
import {AppContext} from '@context/context';
import { AlphabeticalOrderBrands, duplicateCheckBrandsFunction, duplicateMapBrands } from '@handlers/filters';

const SubTitle = ({data}) => {
    const state = useContext(AppContext);

    const duplicateCheckBrands = [];
    const AlphabeticalOrderBrandsHandler = useMemo(() => AlphabeticalOrderBrands({ data: data, setBrand: state.setBrand}))
    const duplicateCheckBrandsFunctionHandler = useMemo(() => duplicateCheckBrandsFunction({ AlphabeticalOrderBrandsHandler: AlphabeticalOrderBrandsHandler, duplicateCheckBrands:duplicateCheckBrands }))
    const duplicateMapBrandsHandler = useMemo(() => duplicateMapBrands({ duplicateCheckBrands: duplicateCheckBrands, setBrand: state.setBrand}))

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
                            {duplicateMapBrandsHandler}
                        </ul>
                    </div>
                 </div>
            </div>
        </div>

    );
};

export default SubTitle;