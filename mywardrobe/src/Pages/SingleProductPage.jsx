import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import ProductCart from '../Components/ProductCart';
import {StarIcon} from "@chakra-ui/icons"
import { Box, Button,UnlockIcon } from '@chakra-ui/react';
const SingleProductPage = () => {
    const {id} =useParams();
    const productData = useSelector(store=>store.productReducer.payload)
    //console.log(productData)
    const [currrentPro,setCurrentPro]=useState([])


     useEffect(()=>{
        if(id){
            const product=productData.filter((item)=>item.id===Number(id))
            const pro=product[0]
            console.log(pro)
            pro && setCurrentPro(pro)
        }
     },[id])

  return (
    <div>
        <h1>Single Product Page</h1>
        {/* <ProductCart data={currrentPro}/> */}
        <Box style={{display:"grid", margin:"10%",gap:"100px",gridAutoColumns:{base:1,sm:1,md:2},vh:"1000px" }}>
          <div style={{position:"-webkit-sticky",position:"sticky",width:"400px",top:"200px"}}>
            <img src={currrentPro.image}/>
          </div>
          <div style={{marginInline:'20%', lineHeight:"40px",marginLeft:"40%"}}>
            <h2><b>{currrentPro.productName}</b></h2>
            <p>{currrentPro.shortDes}</p>
            
            {
                currrentPro.shadeCount!=="" ?  <p>{currrentPro.shadeCount}</p> :<p>{currrentPro.shadeCount} </p> 
            }

            <p><StarIcon color={"pink"}/>4 | 40 ratings </p>
           
            <p><strike> {currrentPro.actualPrice} </strike> </p>
            
            <p><b> {currrentPro.offerPrice}</b> (MRP incl. of all taxes)</p>
            
            <Button leftIcon={<StarIcon />} colorScheme='red' variant='solid'>
              ADD TO BAG
            </Button>
            



            <div>
              <p>You will receive <b> cashback worth ₹100 </b> as myglammPOINTS on this purchase</p>

              <p>Slay with the bullet and slide on for an unapologetic projection of yourself. Sexy, flirty, mysterious—whatever your mood, we have a LIT Satin Matte Lipstick by MyGlamm for you. Sublimely smooth and irresistibly expressive, we're using our lipstick bullets as weapons of mass seduction. Our lipsticks deliver an even swatch of colour, so brilliantly pigmented, they'll have you grinning ear-to-ear on an otherwise ordinary day. Being Instagram-perfect is an added perk.</p>
             
              <p>Benefites</p>
              <ul>
                <li>Smooth and even application of colour </li>
                <li>3D satin matte finish </li>
                <li>Long wearing formula</li>
                <li>High immediate pay off</li>
                <li>Lightweight and comfortable on the lips</li>
              </ul>

              <p>Enhanced Properties</p>
              <ul>
                <li>Preservative free  </li>
                <li>Oil free </li>
                <li>Mineral oil free</li>
                <li>D5 free</li>
                <li>Nano ingredients free</li>
              </ul>

              <p>The LIT Collection by MyGlamm features statement-making, cruelty-free makeup for the modern Gen-Z girl</p>

              <p><b>Net Weight:</b>4.5 g</p>

              <p>Manufacturere Detail</p>
              <p>Regi India Cosmetics Pvt Ltd. C-08 Sara Industrial Estate, Chakrata Road, Rampur, Dehradun-248 197, Uttarakhand.</p>

              <p><b>Country of Origin:</b>Formulated in Itely</p>
            
              <p><b>Disclaimer:</b>Colours of the makeup may vary due to the differences in computer monitors and phone screens.</p>

              <p><b>Important:</b>All products that will be shipped will have a shelf-life of minimum 8 months to 12 months.</p>
            
            </div>
          </div>
        </Box>
    </div>
  )
}

export default SingleProductPage