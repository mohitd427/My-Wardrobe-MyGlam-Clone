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
    // console.log(payload.length)

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getBagData())
    }, [])

    
    if(isLoading)
    {
        return <Skeleton height={"80vh"}/>
    }

    return (
        <Box fontSize={{ base: '14px', md: '15px', lg: '16px' }} letterSpacing={0.9} fontWeight={500} >
            <Text align={"center"} fontSize={26} mb={5} >MY BAG ({isLoading === false ? payload.length : <Spinner size="xs" />})</Text>
            <Box width={"80%"} margin={"auto"} align={"center"} backgroundColor={"black"} color={"white"} pt={2} pb={2} mb={5} >
                <Text>Congrats! You're eligible for free gift Please select.</Text>
            </Box>
            {payload?.map(el=><BagItems key={el.id} {...el} />)}
            <Flex align={"center"} pt={3} pb={3} backgroundColor={"#eeeeee"} justify={"space-evenly"} display={{ base: 'block', md: 'flex', lg: 'flex' }}   >
                <Text align={{ base: 'center', md: 'center', lg: 'center' }}  >You will earn  <Text as={"span"} fontWeight={900} >₹ 209 Good Points</Text> as cashback on this order.</Text>
                <Text display={{ base: 'none', md: 'block', lg: 'block' }}   align={{ base: 'center', md: 'center', lg: 'center' }}  >GRAND TOTAL <Text as={"span"} fontWeight={900} >₹ 1763</Text></Text>
            </Flex>
            <Box align={"center"}>
            <Text display={{ base: 'block', md: 'none', lg: 'none' }}   align={{ base: 'center', md: 'center', lg: 'center' }}  >GRAND TOTAL <Text as={"span"} fontWeight={900} >₹ 1763</Text></Text>
                <Link to="/address">
                    <Button backgroundColor={"black"} color={"white"} fontWeight={500} pt={2} pb={2} pl={20} pr={20} mt={5} align={{ base: 'center', md: 'center', lg: 'center' }} _hover={false}  >PROCEED TO CHECKOUT</Button>
                </Link>
            </Box>
        </Box>
    )
}