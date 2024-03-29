import { useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import {Box, Text, Spinner, Flex, Button, Skeleton} from "@chakra-ui/react"
import { getBagData } from "../Redux/App/Bag/action";
import { BagItems } from "../Components/BagItems";
import {Link} from "react-router-dom"

export function Bag ()
{
    const bagData = useSelector(store=>store.bagReducer)
    const {payload, isLoading} = bagData;

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getBagData())
    }, [])

    
    if(isLoading)
    {
        return <Skeleton height={"80vh"}/>
    }

    let Total = 0;
    {payload?.map(el=>Total+=el.actualPrice)}

    return (
        <Box fontSize={{base:12, md:14, lg:16}} letterSpacing={0.9} fontWeight={400} mt={5} mb={5}>
            <Text align={"center"} fontWeight={700} fontSize={{base:28, md:32, lg:32}} mb={5} >MY BAG ({isLoading === false ? payload.length : <Spinner size="xs" />})</Text>
            <Box w={{base:"100%", md:"95%", lg:"90%"}} margin={"auto"} align={"center"} backgroundColor={"black"} color={"white"} pt={2} pb={2} mb={5}  >
                <Text  fontWeight={600} fontSize={{base:18, md:20, lg:20}} width={{base:"95%"}}>Congrats! You're eligible for free gift Please select.</Text>
            </Box>
            {payload?.map(el=><BagItems key={el.id} {...el} />)}
            <Flex align={"center"} pt={3} pb={3} backgroundColor={"#eeeeee"} display={{ base: 'block', md: 'flex', lg: 'flex' }} justify={"space-evenly"} >
                <Text align={{ base: 'center', md: 'center', lg: 'center' }} >You will earn  <Text as={"span"} fontWeight={700} fontSize={{base:16, md:20, lg:20}}>₹ {payload.length > 0 && payload.length*10} Good Points</Text> as cashback on this order.</Text>
                <Text display={{ base: 'none', md: 'block', lg: 'block' }}   align={{ base: 'center', md: 'center', lg: 'center' }}  >GRAND TOTAL <Text as={"span"} fontWeight={700} fontSize={{base:16, md:20, lg:20}} >₹ {Total}</Text></Text>
            </Flex>
            <Box align={"center"}>
            <Text display={{ base: 'block', md: 'none', lg: 'none' }}   align={{ base: 'center', md: 'center', lg: 'center' }} fontSize={{base:16, md:20, lg:20}} >GRAND TOTAL <Text as={"span"} fontWeight={700} >₹ {Total}</Text></Text>
                <Link to="/checkout">
                    <Button fontSize={{base:16, md:20, lg:20}} backgroundColor={"black"} color={"white"} fontWeight={400} pt={2} pb={2} pl={20} pr={20} mt={5} mb={20} align={{ base: 'center', md: 'center', lg: 'center' }} _hover={false} width={{base:"95%", md:"50%", lg:"50%"}} >PROCEED TO CHECKOUT</Button>
                </Link>
            </Box>
        </Box>
    )
}