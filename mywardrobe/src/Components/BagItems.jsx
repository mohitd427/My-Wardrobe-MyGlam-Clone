import { Box, CloseButton, Flex, Image, Text } from "@chakra-ui/react";
import { ButtonComponent } from "./ButtonComponent";

export function BagItems(el)
{
    // console.log(el)
    return(
        <>
            <Flex width={"90%"} margin={"auto"} justify={"space-around"} borderBottom={"1px solid #999999"} mt={2} mb={2} pb={5} pt={5} >
                <Image src={el.image} width={100} />
                <Text>{el.productName}</Text>
                <Text>₹ {el.actualPrice}</Text>
                <ButtonComponent/>
                <Text>₹ {el.actualPrice}</Text>
                <CloseButton color={"#5b5b5b"} />
            </Flex>
        </>
    );
}