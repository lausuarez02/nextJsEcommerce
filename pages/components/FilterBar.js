
import {useContext} from 'react';
import { AppContext } from '../context/context';

const FilterBar = ({data}) => {
  const state = useContext(AppContext);

  //Here It is sort by alphabetical order
  const AlphabeticalOrderProductType = data.sort((a, b) => {
      if(a.product_type < b.product_type) return -1;
      if(a.product_type > b.product_type) return 1;
      return 0;
  }).map((item, i) => <li key={i} ><a class="dropdown-item" onClick={(e) => state.setProductType(e.target.outerText)}>{item.product_type}</a></li>);
  
    return (
        <div>
          <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3">
              <ul className="nav flex-column">
                <li className="nav-item">
                <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Products
                  </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      {AlphabeticalOrderProductType}
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