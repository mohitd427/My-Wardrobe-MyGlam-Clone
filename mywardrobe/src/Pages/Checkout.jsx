import { Box, Text, Flex, Button, Image, Skeleton } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DeliveryDate } from "../Components/DeliveryDate";
import { getAddress } from "../Redux/App/Address/action";
import { getBagData } from "../Redux/App/Bag/action";

export function Checkout()
{
    const [promoCode, setPromoCode] = useState(localStorage.getItem("promo") || false)
    const dataBag = useSelector(store=>store.bagReducer)
    const addressData = useSelector(store=>store.addressReducer.payload);
    const{address, pincode, city, state, name, phone} = addressData
    const {payload, isLoading, isError} = dataBag
    const addressDispatch = useDispatch();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getBagData())
    }, [])


    useEffect(()=>{
        addressDispatch(getAddress())
    },[])


    // MRP
    let MRP = 0;
    payload.map(el=>MRP += el.actualPrice)

    // MRP
    let offerPrice = 0;
    payload.map(el=>offerPrice += el.offerPrice)

    // Discount on MRP
    let discountOnMRP = MRP-offerPrice
    // console.log(discountOnMRP)

    function applyPromoCode()
    {
        setPromoCode(()=>!promoCode)
        localStorage.setItem("promo", promoCode)
    }
    // console.log(promoCode)

    // console.log(payload.length)
    if(isLoading)
    {
        return <Skeleton height={"80vh"} />
    }


    return (
        <Box fontSize={{base:12, md:14, lg:16}}>
            <Box align={"center"} fontWeight={400} m={"2%"}>
                <Text fontWeight={700} fontSize={{base:20, md:22, lg:24}} mb={5} >Checkout</Text>
                <Flex justify={"space-between"} >
                    <Box width={{base:"50%", md:"55%", lg:"55%"}} >
                        <Box align={"left"} >
                            <Text fontWeight={700} pb={2} mb={5} borderBottom={"1px solid #eeeeee"} >SHIPPING ADDRESS</Text>
                            <Text fontWeight={700} mb={1} >{name || "please select your address"}</Text>
                            <Text mb={1} >{address} {city} {pincode} {state}</Text>
                            <Text mb={1}>{phone}</Text>
                            <Text mb={1}>rishabhvishwakarma398@gmail.com</Text>
                            <Link to="/address"><Button backgroundColor={"black"} color={"white"} _hover={false} mb={2} mt={2} fontSize={{base:10, md:14, lg:16}} >CHANGE</Button></Link>
                            <Text mb={1} ><Text as={"span"} fontWeight={700} >Expected Delivery Date</Text> <DeliveryDate/></Text>
                        </Box>
                        <Box align={"left"} mt={10} width={{base:"100%", md:"100%", lg:"100%"}} >
                            <Text>YOUR ORDER</Text>
                            {payload?.map(el=><Box key={el.id}>
                                <Flex justify={"space-between"} pt={2} pb={2} borderBottom={"1px solid #eeeeee"}>
                                    <Image width={{base:"40px", md:"60px", lg:"70px"}} src={el.image} h={{base:"50px"}} />
                                    <Text fontSize={{base:10, md:14, lg:16}} width={{base:"100px", md:"200px", lg:"250px"}} >{el.productName}</Text>
                                    <Text fontSize={{base:11, md:14, lg:16}} >1</Text>
                                    <Text fontSize={{base:10, md:14, lg:16}} >₹{el.actualPrice}</Text>
                                </Flex>
                            </Box>
                        )}
                        </Box>
                    </Box>

                    <Box backgroundColor={"#eeeeee"} p={1} width={{base:"50%", md:"40%", lg:"40%"}} fontSize={{base:10, md:14, lg:16}} >
                        <Text mb={1} fontSize={{base:12, md:14, lg:16}}>Order Summary</Text>
                        <Flex justify={"space-between"} >
                            <Text mb={2}>MRP</Text>
                            <Text mb={2}>₹{MRP}</Text>
                        </Flex>
                        <Flex justify={"space-between"} >
                            <Text mb={2}>Discount on MRP</Text>
                            <Text mb={2}>₹{discountOnMRP}</Text>
                        </Flex>
                        <Text textAlign={"left"} mb={5} mt={2} fontWeight={700}>Apply Promo Code</Text>
                        <Box width={"100%"} border={"1px solid #999999"} pl={2} pr={0} borderRadius={"5px"} mb={5} >
                            <Flex justify={"space-between"} >
                                <Text pt={3} pb={3}>POPXOFREE</Text>
                                <Text pt={3} pb={3} pl={{base:5, md:7, lg:10}} pr={{base:5, md:7, lg:10}} borderRadius={"5px"} backgroundColor={"black"} color={"white"} onClick={applyPromoCode} >{promoCode ? "APPLIED" : "APPLY"}</Text>
                            </Flex>
                        </Box>
                        <Flex justify={"space-between"} >
                            <Text mb={2}>Discount POPXOFREE</Text>
                            <Text mb={2}>{promoCode ? "(-₹220)" : 0}</Text>
                        </Flex>
                        <Flex justify={"space-between"} >
                            <Text mb={2}>Shipping Charges</Text>
                            <Text mb={2}>FREE</Text>
                        </Flex>
                        <Flex justify={"space-between"} >
                            <Text mb={2} fontWeight={700} >Amount Payable</Text>
                            <Text mb={2} fontWeight={700} >₹{promoCode ? (MRP-(discountOnMRP+220)) : MRP-discountOnMRP}</Text>
                        </Flex>
                        <Flex justify={"space-between"} >
                            <Text mb={2}>You Saved</Text>
                            <Text mb={2}>₹{promoCode ? ((discountOnMRP+220)) : discountOnMRP}</Text>
                        </Flex>
                        <Flex justify={"space-between"} >
                            <Text mb={2}>You will earn</Text>
                            <Text mb={2}>₹{payload.length > 0 && 10*payload.length}</Text>
                        </Flex>
                        <Box align={"center"}>
                        <Link to="/payment"><Button _hover={false} backgroundColor={"black"} color={"white"} mt={5} mb={2} pt={2} pb={2}  width={{base:"100%", md:"90%", lg:"90%"}} fontSize={{base:12, md:14, lg:16}} >PROCEED TO PAYMENT</Button></Link>
                        </Box>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}