import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import {StarIcon} from "@chakra-ui/icons"
import {  Button,Heading,SimpleGrid,Text, useDisclosure } from '@chakra-ui/react';
import { addProductData } from '../Redux/App/Products/action';
import YoutubeVideo from '../Components/YoutubeVideo';
import Styles from "./Styles/SingleProductPage.css"

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react'




const SingleProductPage = () => {
    const {id} =useParams();
    const productData = useSelector(store=>store.productReducer.payload)
    const dispatch=useDispatch()
    //console.log(productData)
    const [currrentPro,setCurrentPro]=useState([])
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
     
     const addToBag=()=>{
      onClose()
      console.log("dbvg");
   
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
    <div style={{margin:"10%",marginTop:'20px'}}>
       
        <SimpleGrid   columns={{base:1,sm:1,md:2}} className="single-div" >
          
            <img className="single-div-img" src={currrentPro.image}/>

         
          <div style={{lineHeight:"30px",marginLeft:"5%",marginRight:"5%"}}>
            
            <Heading as='h1'><b>{currrentPro.productName}</b></Heading>
            
            <Text  fontSize='lg'>{currrentPro.shortDes}</Text>
            
            {
                currrentPro.shadeCount!=="" ?  <p>{currrentPro.shadeCount}</p> :<p>{currrentPro.shadeCount} </p> 
            }

            <Text  fontSize='lg'><StarIcon color={"pink"}/>4 | 40 ratings </Text>
           
            <Text  fontSize='lg'><strike> {currrentPro.actualPrice} </strike> </Text>
            
            <Text  fontSize='lg'><b> {currrentPro.offerPrice}</b> (MRP incl. of all taxes)</Text>
            
            <>
      <Button leftIcon={<StarIcon/>} colorScheme='red' onClick={onOpen}>
       ADD TO BAG
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Product is adding to bag....
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? 
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
              CANCEL
              </Button>
              <Button colorScheme='red' onClick={addToBag} ml={3}>
               ADD
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
            
              <br></br>


            <div>
            <br></br>
              <Heading as='h6' style={{backgroundColor:"pink",width:"auto",padding:"5px",alignItems:"center",justifyContent:"space-around"}}>You will receive <b> cashback worth ₹100 </b> as myglammPOINTS on this purchase</Heading>
              <br></br>
              <Text  fontSize='lg'>Slay with the bullet and slide on for an unapologetic projection of yourself. Sexy, flirty, mysterious—whatever your mood, we have a LIT Satin Matte Lipstick by MyGlamm for you. Sublimely smooth and irresistibly expressive, we're using our lipstick bullets as weapons of mass seduction. Our lipsticks deliver an even swatch of colour, so brilliantly pigmented, they'll have you grinning ear-to-ear on an otherwise ordinary day. Being Instagram-perfect is an added perk.</Text>
             
            <br></br>
              <ul >
                 <Text  fontSize='lg'><b>Benefites</b></Text>
                <li>Smooth and even application of colour </li>
                <li>3D satin matte finish </li>
                <li>Long wearing formula</li>
                <li>High immediate pay off</li>
                <li>Lightweight and comfortable on the lips</li>
              </ul>
              <br></br>
             
              <ul>
              <Text  fontSize='lg'><b> Enhanced Properties</b></Text>
                <li>Preservative free  </li>
                <li>Oil free </li>
                <li>Mineral oil free</li>
                <li>D5 free</li>
                <li>Nano ingredients free</li>
              </ul>
              <br></br>

              <Text fontSize='lg'>The LIT Collection by MyGlamm features statement-making, cruelty-free makeup for the modern Gen-Z girl</Text>
              
              <Text  fontSize='lg'><b>Net Weight:</b>4.5 g</Text>
              <br></br>
             
              <Text  fontSize='lg'> <b>Manufacturere Detail:</b>Regi India Cosmetics Pvt Ltd. C-08 Sara Industrial Estate, Chakrata Road, Rampur, Dehradun-248 197, Uttarakhand.</Text>
            
              <Text  fontSize='lg'><b>Country of Origin:</b>Formulated in Itely</Text>
              <br></br>
              <Text  fontSize='lg'><b>Disclaimer:</b>Colours of the makeup may vary due to the differences in computer monitors and phone screens.</Text>

              <Text  fontSize='lg'><b>Important:</b>All products that will be shipped will have a shelf-life of minimum 8 months to 12 months.</Text>
            
            </div>
          </div>
        </SimpleGrid>
       
        <br></br>
        
        <Heading sx={{textAlign:'center',background:'pink'}} as='h1'>WATCH & LEARN</Heading>
        <SimpleGrid columns={{base:1,sm:1,md:1,xl:2}}   className="single-div">
            <div style={{margin:"5%"}} className='single-video'> <YoutubeVideo /></div>
            <div>
            
              <Heading as='h6'><b>{currrentPro.productName}</b></Heading>
              <Text  fontSize='lg'>Save the drama, for your mama! No Drama - Mini Lipstick Kit is a set of 3 gorgeous creamy-matte nude lipsticks that will add a little extra something to your #NoMakeup selfies. No-fuss, no-frills, just dreamy lippies that you can pair with just about anything. This mini lip kit includes 3 irresistible nude lipsticks - one for every mood, duh. These mini lipsticks have a creamy, matte formula that glides on the lips smoothly and wears comfortably for long hours. The pigmented formula delivers rich colour payoff in one swipe and is designed to be suitable for all Indian skin tones. ""I have too many lipsticks"" - said no one ever! That's because we know the real power of a good lipstick on a bad day. . Key Features: • Makeup On-The-Go: The No Drama Mini Lipstick Kit features 3 creamy matte lipsticks in nude shades for everyday makeup looks. • Formula To Die For: These mini lipsticks have a pigmented formula that delivers a rich colour payoff in a single swipe. Its smooth texture wears comfortably through out the day. • Drop It Like It’s Hot: Stunning shades in this mini liptick set allow you to cop gorgeous trending makeup looks for bomb makeup selfies! • Boujee On A Budget: The 3-in-1 lipstick kit is especially designed to meet high makeup standards on a budget. So, if you’re looking for a reasonable makeup investment, say hello to the best mini lipstick set under 500. • Who Is It For: Easy to use, these high-quality lipsticks are perfect for both, beginners and professionals. Its compact packaging also makes it travel-friendly and is suitable for divas who are looking for a wide variety of choices that match their mood. • Toxins? No!: Enriched with vitamin E, all these lipsticks have a skin conditioning formula that avoids your lip look to crease. It is also free of alcohol, mineral oil, paraben, and D5. • Hashtag Aesthetic Goals: Did you notice that we kept your aesthetic needs on our agenda too? These cute and trendy eye makeup kits are designed to give you a gram-worthy vanity. Make space on your Instagram grid for some yummy pink palette shots! • We’re Environment-Friendly Too: This mini lipstick kit comes in a sustainable paper packaging. ------------------------------------------------------------------------------------------------------------------------ Visit The Website - https://bit.ly/2WcrCFW Click here for Attractive Offers - https://bit.ly/3gO4C8a ------------------------------------------------------------------------------------------------------------------------ Download the MyGlamm app here: Android: https://bit.ly/309O1VA IOS: https://apple.co/32diu87 ------------------------------------------------------------------------------------------------------------------------ Like Our Page for Daily Dose of Beauty. Facebook: https://bit.ly/3j8k9BU Instagram: https://bit.ly/304mV2i Twitter: https://bit.ly/2C5MLeh</Text>
            </div>
        </SimpleGrid>
       
    </div>
  )
}

export default SingleProductPage