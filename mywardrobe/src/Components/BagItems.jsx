import { Box, CloseButton, Flex, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteBagData, getBagData } from "../Redux/App/Bag/action";
import { ButtonComponent } from "./ButtonComponent";


export function BagItems(el)
{
    const {id} = el
    const dispatch = useDispatch()

    function deleteHandler()
    {
        dispatch(deleteBagData(id)).then(()=>dispatch(getBagData()))
    }

    return(
        <>
            <Flex key={el.id} width={{ base: '100%', md: '95%', lg: '90%' }} margin={"auto"} justify={"space-around"} borderBottom={"1px solid #999999"} mt={2} mb={2} pb={5} pt={5} >
                <Image src={el.image} width={{ base: '80px', md: '100px', lg: '100px' }} h={{base:"70px"}} />
                <Text width={{ base: '120px', md: '250px', lg: '400px' }} >{el.productName}</Text>
                <Text>₹ {el.actualPrice}</Text>
                <ButtonComponent/>
                <Text display={{ base: 'none', md: 'block', lg: 'block' }}>₹ {el.actualPrice}</Text>
                <CloseButton display={{ base: 'block', md: 'block', lg: 'block' }} color={"#5b5b5b"} onClick={()=>deleteHandler(id)} />
            </Flex>
        </>
    );
}