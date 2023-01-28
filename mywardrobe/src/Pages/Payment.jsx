import { Box, Flex, Input, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom";
import { getBagData } from "../Redux/App/Bag/action";

export function Payment()
{
    const [upi, setUpi] = useState("")
    const navigate = useNavigate();
    const data = useSelector(store=>store.bagReducer.payload)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getBagData())
    }, [])
    
    // payment function-
    const paymentHandler = ()=>{
        if(!upi)
        {
            alert("Please fill valid upi id")
        }
        else
        {
            navigate("/orderplaced")
        }
    }

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

    return (
        <Box width={{base:"98%", md:"95%", lg:"92%"}} margin={"auto"} >
            <Text fontWeight={700} fontSize={{base:28, md:32, lg:32}} mt={2} mb={5} align={"center"}>Payment</Text>
            <Box justify={"space-between"} display={{base:"block", md:"flex", lg:"flex"}}>
                <Box width={{base:"100%", md:"35vw", lg:"20vw"}}>
                    <Text fontWeight={600} fontSize={{base:18, md:20, lg:20}} width={{base:"95%"}} ml={2} >Payment Method</Text>
                    <Box fontSize={{base:"13px", md:"14px", lg:"14px"}} mt={5} display={{base:"flex", md:"block", lg:"block"}} mb={{base:"10"}} width={{base:"95%"}}>
                        <Text fontSize={{base:16, md:20, lg:20}} pt={2} pl={2} pr={2} pb={2} backgroundColor={"#ffeaea"} border={"1px solid"} width={"150px"} borderRadius={"5px"} >Google Pay / PhonePe / UPI</Text>
                        <Text fontSize={{base:16, md:20, lg:20}} p={{base:2}}>Net Banking</Text>
                        <Text fontSize={{base:16, md:20, lg:20}} p={{base:2}}>Credit or Debit Card</Text>
                        <Text fontSize={{base:16, md:20, lg:20}} p={{base:2}}>Wallets</Text>
                    </Box>
                </Box>
                <Box width={{base:"100%", md:"80%", lg:"80%"}}>
                    <Flex justify={"space-between"} pt={4} pl={2} pr={2} pb={4} backgroundColor={"#ffeaea"} border={"1px solid"} fontSize={{base:"14px", md:"15px", lg:"16px"}} fontWeight={500} borderRadius={"5px"} width={{base:"95%"}} >
                        <Text fontSize={{base:16, md:20, lg:20}} ml={1}>AMOUNT PAYABLE</Text>
                        <Text fontSize={{base:16, md:20, lg:20}}>₹{payableAmount}</Text>
                    </Flex>
                    <Flex display={{base:"block", md:"flex", lg:"flex"}} justify={"space-between"} mt={10} backgroundColor={"#eeeeee"} p={4} borderRadius={"5px"}>
                        <Input onChange={(e)=>setUpi(e.target.value)} fontSize={{base:16, md:20, lg:20}} backgroundColor={"white"} type="text" placeholder="Enter your UPI ID" width={{base:"100%", md:"70%", lg:"70%"}} focusBorderColor='black.400' />
                        <Input onClick={paymentHandler} fontSize={{base:16, md:20, lg:20}} type="submit" value={"PAYMENT"} backgroundColor={"black"} color={"white"} width={{base:"100%", md:"100%", lg:"100%"}} mt={{base:5, md:0, lg:0}} />
                    </Flex>
                </Box>
            </Box>
        </Box>

    )
}