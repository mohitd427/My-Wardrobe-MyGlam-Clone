import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import ProductCart from '../Components/ProductCart';

const SingleProductPage = () => {
    const {id} =useParams();
    const productData = useSelector(store=>store.productReducer.payload)
    console.log(productData)
    const [currrentPro,setCurrentPro]=useState([])


     useEffect(()=>{
        if(id){
            const pro=productData.filter((item)=>item.id===Number(id))
            console.log(pro)
            pro && setCurrentPro(pro)
        }
     },[id])

  return (
    <div>
        <h1>Single Product Page</h1>
        <ProductCart data={currrentPro}/>
    </div>
  )
}

export default SingleProductPage