import { Box, CloseButton, Flex, Image, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { getBagData } from "../Redux/App/Bag/action";
import { ButtonComponent } from "./ButtonComponent";

export function BagItems(el)
{
    const {id} = el
    console.log(id)
    const dispatch = useDispatch()

    function deleteBagItem(){
        dispatch(deleteBagItem(id)).then(()=>dispatch(getBagData()))
        // console.log(1)
    }

    // console.log(el)
    return(
        <>
            <Flex key={el.id} width={{ base: '100%', md: '95%', lg: '90%' }} margin={"auto"} justify={"space-around"} borderBottom={"1px solid #999999"} mt={2} mb={2} pb={5} pt={5} >
                <Image src={el.image} width={{ base: '80px', md: '100px', lg: '100px' }} />
                <Text width={{ base: '120px', md: '250px', lg: '400px' }} >{el.productName}</Text>
                <Text>₹ {el.actualPrice}</Text>
                <ButtonComponent/>
                <Text display={{ base: 'none', md: 'block', lg: 'block' }}>₹ {el.actualPrice}</Text>
                <CloseButton display={{ base: 'block', md: 'block', lg: 'block' }} color={"#5b5b5b"} onClick={deleteBagItem} />
            </Flex>
        </>
    );
}