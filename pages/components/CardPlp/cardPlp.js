import React from 'react';
//import Image from 'next/image'

const CardPlp = ({data}) => {
    return (
        <div style={{margin: '20px'}}>
          <div className="card mb-3" style={{maxWidth: '540px'}}>
              <div className="row g-0">
                <div className="col-md-4">
                 <img src={data.image_link} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                 <div className="card-body">
                  <h5 className="card-title">{data.name}</h5>
                  <p className="card-text">{data.description}</p>
                  <p className="card-text">{data.product_colors.map((info) => { let stylse = info.hex_value; return(<ul key={info.id} style={{display: 'inline'}}><li style={{display: 'inline'}} ><span className="badge rounded-pill" style={{backgroundColor: {stylse}}}> </span></li></ul>)})}</p>
                  <p className="card-text"><small className="text-muted">Rating: {data.rating} stars</small></p>
                 </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default CardPlp;