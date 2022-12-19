import { Box, Flex, Input, Stack, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { getBagData } from "../Redux/App/Bag/action";

export function Payment()
{
    const data = useSelector(store=>store.bagReducer.payload)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getBagData())
    }, [])

    let payableAmount = 0;

    // MRP-
    let totalMRP = 0;
    (data.map(el=>totalMRP += el.actualPrice))
    // console.log(totalMRP)

    // Offer-
    let totalOfferPrice = 0;
    (data.map(el=>totalOfferPrice += el.offerPrice))
    // console.log(totalOfferPrice)

    let discountPrice = 0;
    discountPrice = totalMRP-totalOfferPrice

    payableAmount = totalMRP - (discountPrice+220)
    console.log(payableAmount)

    return (
        <Box width={{base:"98%", md:"95%", lg:"92%"}} margin={"auto"} >
            <Text fontSize={{base:"18px", md:"22px", lg:"26px"}} fontWeight={500} mt={2} mb={5} align={"center"}>Payment</Text>
            <Box justify={"space-between"} display={{base:"block", md:"flex", lg:"flex"}}>
                <Box width={{base:"100%", md:"35vw", lg:"20vw"}}>
                    <Text fontSize={{base:"13px", md:"14px", lg:"15px"}} fontWeight={500} >Payment Method</Text>
                    <Box fontSize={{base:"13px", md:"14px", lg:"14px"}} mt={5} display={{base:"flex", md:"block", lg:"block"}} mb={{base:"10"}}>
                        <Text pt={2} pl={2} pr={2} pb={2} backgroundColor={"#ffeaea"} border={"1px solid"} width={"150px"} borderRadius={"5px"} >Google Pay / PhonePe / UPI</Text>
                        <Text p={{base:2}}>Net Banking</Text>
                        <Text p={{base:2}}>Credit or Debit Card</Text>
                        <Text p={{base:2}}>Wallets</Text>
                        <Text p={{base:2}}>Cash On Delivery</Text>
                    </Box>
                </Box>
                <Box width={{base:"100%", md:"80%", lg:"80%"}}>
                    <Flex justify={"space-between"} pt={4} pl={2} pr={2} pb={4} backgroundColor={"#ffeaea"} border={"1px solid"} fontSize={{base:"14px", md:"15px", lg:"16px"}} fontWeight={500} borderRadius={"5px"} >
                        <Text>AMOUNT PAYABLE</Text>
                        <Text>₹{payableAmount}</Text>
                    </Flex>
                    <Flex display={{base:"block", md:"flex", lg:"flex"}} justify={"space-between"} mt={10} backgroundColor={"#eeeeee"} p={4} borderRadius={"5px"}>
                        <Input fontSize={{base:12, md:14, lg:16}} backgroundColor={"white"} type="text" placeholder="Enter your UPI ID" width={{base:"100%", md:"70%", lg:"70%"}} focusBorderColor='black.400' />
                        <Link to ="/orderplaced"><Input fontSize={{base:12, md:14, lg:16}} type="submit" value={"PAYMENT"} backgroundColor={"black"} color={"white"} width={{base:"100%", md:"100%", lg:"100%"}} mt={{base:5, md:0, lg:0}}   /></Link>
                    </Flex>
                </Box>
            </Box>
        </Box>

    )
}