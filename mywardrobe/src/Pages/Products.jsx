import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import ProductCart from "../Components/ProductCart"
import { getData } from "../Redux/App/appAction"
import { SimpleGrid, Box } from '@chakra-ui/react'


export function Products()
{
    const productData = useSelector(store=>store.appReducer.payload[0])
  
   if(productData!==undefined){
   var data=productData.Product_array
    //console.log(data)
   }
    console.log(data)
   // const data=productData.appReducer.payload
    // console.log(data[0].Product_array)
    const dispatch = useDispatch()

    useEffect(()=>{
            dispatch(getData())    
    },[dispatch])

    return ( <div style={{margin:"10%"}}>
            <div style={{margin:'auto'}}>
            <h1 style={{margin:'center',width:'auto' ,backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}><b>Lipsticks</b></h1>
            </div>

            <SimpleGrid  columns={{base:1,sm:2, md:3}} spacingX='40px' spacingY='20px'>
                { 
                    data!==undefined &&
                   data.map(singlePro=>{
                        return (<Box w='100%'  borderColor={"black"}>
                            <ProductCart key={singlePro.id} data={singlePro} /></Box>)
                    })
                }
            </SimpleGrid>
    </div>

    )
}