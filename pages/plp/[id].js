import NavBar from "../components/navBar";
import {useState, useEffect} from 'react';
import CardPlp from '../components/cardPlp';

let outsideUrl

const PDP = ({data}) => {
    /*//failed attemp to filter by ?grater_than=
    const [url, setUrl] = useState(20);

    useEffect(() => {
        outsideUrl = url
        return () => outsideUrl = null
    }, [])*/
    return (
        <div>
            <NavBar/>
            <CardPlp data={data}/>  
        </div>
    );
};

export const getStaticPaths = async () => {
    const res = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json');
    const data = await res.json();
  
    // map data to an array of path objects with params (id)
    const paths = data.map(data => {
      return {
        params: { id: data.id.toString() }
      }
    })
  
    return {
      paths,
      fallback: false
    }
  }

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('http://makeup-api.herokuapp.com/api/v1/products/' + id + '.json');
    const data = await res.json();
    return{
        props: {
            data
        }
    }
}

export default PDP;