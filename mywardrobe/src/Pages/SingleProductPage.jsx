import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import ProductCart from '../Components/ProductCart';
import {StarIcon} from "@chakra-ui/icons"
import { Box, Button,UnlockIcon } from '@chakra-ui/react';
import { addProductData } from '../Redux/App/Products/action';
import YoutubeVideo from '../Components/YoutubeVideo';
import Styles from "./Styles/SingleProductPage.css"


const SingleProductPage = () => {
    const {id} =useParams();
    const productData = useSelector(store=>store.productReducer.payload)
    const dispatch=useDispatch()
    //console.log(productData)
    const [currrentPro,setCurrentPro]=useState([])

     
     const addToBag=()=>{
      //console.log("dbvg")
     dispatch(addProductData(currrentPro))
     }




     useEffect(()=>{
        if(id){
            const product=productData.filter((item)=>item.id===Number(id))
            const pro=product[0]
            //console.log(pro)
            pro && setCurrentPro(pro)
        }
     },[id])

  return (
    <div style={{margin:"10%", border:"1px solid red"}}>
       
        
        <div style={{display:"flex", border:"1px solid black"}}>
          <div className="div-img" >
            <img src={currrentPro.image}/>
          </div>
         
          <div style={{lineHeight:"30px",marginLeft:"5%",marginRight:"5%"}}>
            <h1><b>{currrentPro.productName}</b></h1>
            <p>{currrentPro.shortDes}</p>
            
            {
                currrentPro.shadeCount!=="" ?  <p>{currrentPro.shadeCount}</p> :<p>{currrentPro.shadeCount} </p> 
            }

            <p><StarIcon color={"pink"}/>4 | 40 ratings </p>
           
            <p><strike> {currrentPro.actualPrice} </strike> </p>
            
            <p><b> {currrentPro.offerPrice}</b> (MRP incl. of all taxes)</p>
            
            <Button onClick={()=>addToBag()} leftIcon={<StarIcon />} colorScheme='red' variant='solid'>
              ADD TO BAG
            </Button>
            
              <br></br>


            <div>
            <br></br>
              <p style={{backgroundColor:"pink",width:"auto",padding:"5px",alignItems:"center",justifyContent:"space-around"}}>You will receive <b> cashback worth ₹100 </b> as myglammPOINTS on this purchase</p>
              <br></br>
              <p>Slay with the bullet and slide on for an unapologetic projection of yourself. Sexy, flirty, mysterious—whatever your mood, we have a LIT Satin Matte Lipstick by MyGlamm for you. Sublimely smooth and irresistibly expressive, we're using our lipstick bullets as weapons of mass seduction. Our lipsticks deliver an even swatch of colour, so brilliantly pigmented, they'll have you grinning ear-to-ear on an otherwise ordinary day. Being Instagram-perfect is an added perk.</p>
             
            <br></br>
              <ul >
                 <p><b>Benefites</b></p>
                <li>Smooth and even application of colour </li>
                <li>3D satin matte finish </li>
                <li>Long wearing formula</li>
                <li>High immediate pay off</li>
                <li>Lightweight and comfortable on the lips</li>
              </ul>
              <br></br>
             
              <ul>
              <p><b> Enhanced Properties</b></p>
                <li>Preservative free  </li>
                <li>Oil free </li>
                <li>Mineral oil free</li>
                <li>D5 free</li>
                <li>Nano ingredients free</li>
              </ul>
              <br></br>

              <p>The LIT Collection by MyGlamm features statement-making, cruelty-free makeup for the modern Gen-Z girl</p>
              
              <p><b>Net Weight:</b>4.5 g</p>
              <br></br>
             
              <p> <b>Manufacturere Detail:</b>Regi India Cosmetics Pvt Ltd. C-08 Sara Industrial Estate, Chakrata Road, Rampur, Dehradun-248 197, Uttarakhand.</p>
            
              <p><b>Country of Origin:</b>Formulated in Itely</p>
              <br></br>
              <p><b>Disclaimer:</b>Colours of the makeup may vary due to the differences in computer monitors and phone screens.</p>

              <p><b>Important:</b>All products that will be shipped will have a shelf-life of minimum 8 months to 12 months.</p>
            
            </div>
          </div>
        </div>
       
       
       
       
       
       
        <br></br>
        <h1>WATCH & LEARN</h1>
        <div style={{display:"flex",margin:"5%"}}>
        <div>
         
          <p><b>{currrentPro.productName}</b></p>
          <p >Save the drama, for your mama! No Drama - Mini Lipstick Kit is a set of 3 gorgeous creamy-matte nude lipsticks that will add a little extra something to your #NoMakeup selfies. No-fuss, no-frills, just dreamy lippies that you can pair with just about anything. This mini lip kit includes 3 irresistible nude lipsticks - one for every mood, duh. These mini lipsticks have a creamy, matte formula that glides on the lips smoothly and wears comfortably for long hours. The pigmented formula delivers rich colour payoff in one swipe and is designed to be suitable for all Indian skin tones. ""I have too many lipsticks"" - said no one ever! That's because we know the real power of a good lipstick on a bad day. . Key Features: • Makeup On-The-Go: The No Drama Mini Lipstick Kit features 3 creamy matte lipsticks in nude shades for everyday makeup looks. • Formula To Die For: These mini lipsticks have a pigmented formula that delivers a rich colour payoff in a single swipe. Its smooth texture wears comfortably through out the day. • Drop It Like It’s Hot: Stunning shades in this mini liptick set allow you to cop gorgeous trending makeup looks for bomb makeup selfies! • Boujee On A Budget: The 3-in-1 lipstick kit is especially designed to meet high makeup standards on a budget. So, if you’re looking for a reasonable makeup investment, say hello to the best mini lipstick set under 500. • Who Is It For: Easy to use, these high-quality lipsticks are perfect for both, beginners and professionals. Its compact packaging also makes it travel-friendly and is suitable for divas who are looking for a wide variety of choices that match their mood. • Toxins? No!: Enriched with vitamin E, all these lipsticks have a skin conditioning formula that avoids your lip look to crease. It is also free of alcohol, mineral oil, paraben, and D5. • Hashtag Aesthetic Goals: Did you notice that we kept your aesthetic needs on our agenda too? These cute and trendy eye makeup kits are designed to give you a gram-worthy vanity. Make space on your Instagram grid for some yummy pink palette shots! • We’re Environment-Friendly Too: This mini lipstick kit comes in a sustainable paper packaging. ------------------------------------------------------------------------------------------------------------------------ Visit The Website - https://bit.ly/2WcrCFW Click here for Attractive Offers - https://bit.ly/3gO4C8a ------------------------------------------------------------------------------------------------------------------------ Download the MyGlamm app here: Android: https://bit.ly/309O1VA IOS: https://apple.co/32diu87 ------------------------------------------------------------------------------------------------------------------------ Like Our Page for Daily Dose of Beauty. Facebook: https://bit.ly/3j8k9BU Instagram: https://bit.ly/304mV2i Twitter: https://bit.ly/2C5MLeh</p>
        </div>
       
       
        <div style={{margin:"5%"}}> <YoutubeVideo /></div>
         
        </div>
       
    </div>
  )
}

export default SingleProductPage