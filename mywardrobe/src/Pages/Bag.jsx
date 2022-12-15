import { useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import {Box, Text, Spinner, Flex} from "@chakra-ui/react"
import { getBagData } from "../Redux/App/Bag/action";
import { BagItems } from "../Components/BagItems";

export function Bag ()
{
    const bagData = useSelector(store=>store.bagReducer)
    const {payload, isLoading} = bagData;
    // console.log(payload.length)

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getBagData())
    }, [])

    return (
        <Box fontSize={15} letterSpacing={0.9} fontWeight={400} >
            <Text align={"center"} fontSize={26} mb={5} >MY BAG ({isLoading === false ? payload.length : <Spinner size="xs" />})</Text>
            <Box width={"80%"} margin={"auto"} align={"center"} backgroundColor={"black"} color={"white"} pt={2} pb={2} mb={5} >
                <Text>Congrats! You're eligible for free gift Please select.</Text>
            </Box>
            {payload?.map(el=><BagItems key={el.id} {...el} />)}
            <Flex align={"center"} pt={3} pb={3} backgroundColor={"#eeeeee"} justify={"space-evenly"} >
                <Text>You will earn  <Text as={"span"} fontWeight={500} >₹ 209 Good Points</Text> as cashback on this order.</Text>
                <Text>GRAND TOTAL <Text as={"span"} fontWeight={500} >₹ 1763</Text></Text>
            </Flex>
        </Box>
    )
}