//components
import NavBar from "@components/navBar/navBar";
import FilterBar from '@components/FilterBar/FilterBar';
import ProductsChoices from "@components/ProductsChoices/ProductsChoices";
import SubTitle from '@components/subTitle/subTitle';
//vendors
import React, { useEffect,useState, useContext } from "react";
import { AppContext } from "@context/context";
import Pagination from "@components/pagination";

export default function Home({data}) {
  const state = useContext(AppContext);
  const [currentPage, setCurrentPage ] = useState(1);
  const [postsPerPage] = useState(10);
  //const [ startIndex] = useState(0);
  //const [ endIndex] = useState(5);
  
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
<div className="container-fluid">
  <div className="row">
    <NavBar/>
      <FilterBar data={data}/>
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
       <SubTitle data={data}/>
       <ProductsChoices data={data} currentPosts={currentPosts}/>
       {/*<Pagination paginate={paginate} postsPerPage={postsPerPage} totalPosts={data.length}/>*/}
      </main>
  </div>
</div>
  )
}

export async function getServerSideProps(){
  
  const res = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json')
  const data = await res.json()
  if(!data){
    return {
      redirect: {
        destination: '/screens/notFound/notFound',
        permanent: false
      }
    }
  }
  return{
    props:{
      data
    }
  }
 
}


