import { Box, CloseButton, Flex, Image, Text } from "@chakra-ui/react";
import { ButtonComponent } from "./ButtonComponent";

export function BagItems(el)
{
    // console.log(el)
    return(
        <>
            <Flex width={{ base: '100%', md: '95%', lg: '90%' }} margin={"auto"} justify={"space-around"} borderBottom={"1px solid #999999"} mt={2} mb={2} pb={5} pt={5} >
                <Image src={el.image} width={{ base: '50px', md: '100px', lg: '100px' }} />
                <Text width={{ base: '200px', md: '300px', lg: '400px' }} >{el.productName}</Text>
                <Text>₹ {el.actualPrice}</Text>
                <ButtonComponent/>
                <Text display={{ base: 'none', md: 'block', lg: 'block' }}>₹ {el.actualPrice}</Text>
                <CloseButton display={{ base: 'none', md: 'block', lg: 'block' }} color={"#5b5b5b"} />
            </Flex>
        </>
    );
}