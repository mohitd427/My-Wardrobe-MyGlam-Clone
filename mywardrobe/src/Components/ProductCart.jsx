import React from 'react'
import {PlusSquareIcon} from "@chakra-ui/icons"
import styled from 'styled-components'
import { Box } from '@chakra-ui/react'


const ProductCart = ({data}) => {
  return (
     <Box height={{base:"480px",'xs':"500px" ,sm:"520px"}}  sx={{border:"1px",border:'2px solid grey' , cursor:'pointer',margin:'auto', justifyContent:'space-around'}}>
        {/* <h1>ProductCart</h1> */}
        <div style={{margin:"5%", borderColor:"red" }} >
           
             <img src={data.image} className="image" />
        
            <h3><b>{data.productName}</b></h3>
            
            <p>{data.shortDes}</p>
            
            {
                data.shadeCount!=="" ?  <p><PlusSquareIcon color="red.500"/> {data.shadeCount}</p> :<p>{data.shadeCount} </p> 
            }
           
            <p><strike> {data.actualPrice} </strike> </p>
            
            <p><b> {data.offerPrice}</b></p>
       
        </div>
        

    </Box>
  )
}

export default ProductCart;



  // const img=styled.image`:hover{transform:scale(2)}`