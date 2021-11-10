import React, {useContext, useEffect, useState} from 'react';
import { AppContext } from '../context/context';
import Link from 'next/link'
//import Image from 'next/image'

const PoductsChoices = ({data, currentPosts, }) => {
  const state = useContext(AppContext)
  const [rating, setRating] = useState(4)

    const SearchBarFilter = currentPosts.filter(info => 
      info.name.toLowerCase().includes(state.search.toLowerCase()) ||
      info.product_type.toLowerCase().includes(state.search.toLowerCase()) ||
      info.brand === state.brand ||
      info.product_type === state.ProductType
      );
/*
     useEffect(() => {
      data.map(info => {
        setRating(Math.round(info.rating))
      })
     },[])
     */
    return (
      <div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {SearchBarFilter.map( info => {
            return(
              <div className="col" key={info.id}>
                <div className="card h-100">
                  <Link href={'/plp/' + info.id} key={info.id}>
                    <img src={info.image_link} className="card-img-top" alt="..." key={info.id} style={{height: '400px'}}/>
                  </Link>
                  <div className="card-body">
                    <h5 className="card-title">{info.name}</h5>
                    <h6 className="card-title">{info.price}{info.price_sign} {info.currency}</h6>
                    
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">
                    <div className="rating"> 
                      <div>
                          <div>
                            <label htmlFor="5">☆</label> <label htmlFor="5">☆</label> <label htmlFor="5">☆</label> <label htmlFor="5">☆</label> <label htmlFor="4">☆</label>
                          </div>
                          {info.rating}
                         </div> 
                     </div>
                  </small>
              </div>
              </div>  
              </div>
                  )
                })}
          </div>
          </div>
    );
};

export default PoductsChoices;
