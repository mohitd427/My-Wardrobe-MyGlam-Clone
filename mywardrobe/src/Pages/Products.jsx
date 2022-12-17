import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getProductData } from "../Redux/App/Products/action";
import {SimpleGrid,Box} from "@chakra-ui/react"
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


    return ( <div style={{margin:"10%"}}>
            <div style={{margin:'auto'}}>
            <h1 style={{margin:'center',width:'auto' ,backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}><b>Lipsticks</b></h1>
            </div>

            <SimpleGrid   columns={{base:1,sm:2, md:3}} spacingX='40px' spacingY='20px'>
                { 
                    payload &&
                   payload.map(singlePro=>{
                        return (<Box w='100%'  borderColor={"black"}>
                         <Link to={`/products/${singlePro.id}`}> <ProductCart  key={singlePro.id} data={singlePro} /> </Link>  
                         </Box>)
                    })
                }
            </SimpleGrid>
    </div>

    )
}