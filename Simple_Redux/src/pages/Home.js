import React, { useEffect, useState } from "react";
import ProductCard from './../components/ProductCard';

const Home = () => {
 const [products,setProducts] = useState();

 useEffect(()=>{
    fetch("products.json")
    .then((res)=>res.json())
    .then((data)=>setProducts(data));
 },[]);
 console.log(products);
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
        {
          products ? products.map((product)=>(<ProductCard product={product} key={product._id}/>)): (<p>Something went wrong</p>)
        }
    </div>
  );
};

export default Home;
