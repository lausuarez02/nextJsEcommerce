import {useState, useContext} from 'react';
import { handleChange } from '../handlers/filters';
import {AppContext} from '../context/context';
import Link from 'next/link';

export default function NavBar(){
  /* const value = useContext(useAppContext);
  const state = useContext(useAppContext);
  const { user } = state || {};
  console.log(state);*/
  const state = useContext(AppContext);
  /*export const SearchBarFilter = data.filter(info => 
    info.brand.toLowerCase().includes(search.toLowerCase()) ||
    info.name.toLowerCase().includes(search.toLowerCase()) ||
    info.product_type.toLowerCase().includes(search.toLowerCase())
    );*/
    return(
        <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
          <Link href={'/'}>
            <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3"><img src="/mifarmabyatida-logofinal-web.png" style={{height: "40px"}}/> </a>
            </Link>
            <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
            </button>
            <input className="form-control form-control-dark w-100" type="text" placeholder="Search..." aria-label="Search" onChange={(e) => state.setSearch(e.target.value)}/>
        </header>
    )
}

/**/