import React from 'react';

const CardPlp = ({data}) => {
    return (
        <div style={{margin: '20px'}}>
          <div class="card mb-3" style={{maxWidth: '540px'}}>
              <div class="row g-0">
                <div class="col-md-4">
                 <img src={data.image_link} class="img-fluid rounded-start" alt="..."/>
                </div>
                <div class="col-md-8">
                 <div class="card-body">
                  <h5 class="card-title">{data.name}</h5>
                  <p class="card-text">{data.description}</p>
                  <p class="card-text">{data.product_colors.map((info) => { let stylse = info.hex_value; return(<ul style={{display: 'inline'}}><li style={{display: 'inline'}} ><span class="badge rounded-pill" style={{backgroundColor: {stylse}}}> </span></li></ul>)})}</p>
                  <p class="card-text"><small class="text-muted">Rating: {data.rating} stars</small></p>
                 </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default CardPlp;