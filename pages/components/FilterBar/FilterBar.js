
import {useContext, useEffect, useMemo} from 'react';
import { AppContext } from '@context/context';
import { AlphabeticalOrderProductType , duplicateMapProducts, duplicateCheckProductsFunction} from '@handlers/filters';

const FilterBar = ({data}) => {
  const state = useContext(AppContext);

  const duplicateCheckProducts = [];
  //Here It is sort by alphabetical order
  const AlphabeticalHelper = useMemo(() => AlphabeticalOrderProductType({data: data, setProductType: state.setProductType}))
  const duplicateCheckProductsHandler = useMemo(() => duplicateCheckProductsFunction({ AlphabeticalHelper: AlphabeticalHelper, duplicateCheckProducts: duplicateCheckProducts }) )
  const duplicateMapProductsHandler = useMemo(() => duplicateMapProducts({ duplicateCheckProducts: duplicateCheckProducts, setProductType: state.setProductType}))
  //const removeDuplicatesHelper = useMemo(() => removeDuplicates({data:data}))
//li key={i} ><a className="dropdown-item" onClick={(e) => setProductType(e.target.outerText)}>{item.product_type}</a></li>

return (
        <div>
          <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3">
              <ul className="nav flex-column">
                <li className="nav-item">
                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Products
                  </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      {duplicateMapProductsHandler}
                    </ul>
                </div>
               </li>
              </ul>
            </div>
          </nav>
        </div>
    );
};

export default FilterBar;