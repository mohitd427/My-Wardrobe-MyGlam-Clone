import React from 'react'
import {PlusSquareIcon} from "@chakra-ui/icons"
import styles from "./Styles/ProductCart.css"

const ProductCart = ({data}) => {
  return (
 
      
        <div className="main-box" >
            <div className="div-img" >
               <img src={data.image}  />
             </div>
           
            <h3><b>{data.productName}</b></h3>
            
            <p>{data.shortDes}</p>
            
            {
                data.shadeCount!=="" ?  <p><PlusSquareIcon color="red.500"/> {data.shadeCount}</p> :<p>{data.shadeCount} </p> 
            }
           
            <p><strike> {data.actualPrice} </strike> </p>
            
            <p><b> {data.offerPrice}</b></p>
       
        </div>
        

  
  )
}

export default ProductCart;


