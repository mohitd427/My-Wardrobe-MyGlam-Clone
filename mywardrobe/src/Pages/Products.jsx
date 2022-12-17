import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getProductData } from "../Redux/App/Products/action";
import {SimpleGrid,Box, Heading, Skeleton, Stack} from "@chakra-ui/react"
import { Link } from "react-router-dom";
import ProductCart from "../Components/ProductCart";


export function Products()
{
    const productData = useSelector(store=>store.productReducer)
    
    const {payload, isLoading, isError} = productData
    const dispatch = useDispatch();
    


    useEffect(()=>{
        dispatch(getProductData())
    },[])

  

    return (
         <div style={{margin:"10%"}} >
            <Heading mb={4} p={2} sx={{background:'pink',textAlign:'center',justifyContent:'center'}}  >
           LIPSTICKS
            </Heading>

            <SimpleGrid   columns={{base:1,sm:2, md:3}} spacingX='40px' spacingY='20px'>
       { isLoading ? <Skeleton height={"150vh"} width={"80vw"}/>:  payload &&
                   payload.map(singlePro=>{
                        return (<Box w='100%' key={singlePro.id}  borderColor={"black"}>
                         <Link to={`/products/${singlePro.id}`}> <ProductCart  data={singlePro} /> </Link>  
                         </Box>)
                    }) }
          
           
               
            </SimpleGrid>
           
    </div>

    )
}