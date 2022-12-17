import { Button, Flex } from "@chakra-ui/react";

export function ButtonComponent()
{
    return(
        <Flex display={{ base: 'none', md: 'block', lg: 'block' }}>
            <Button border={"1px solid"}   ml={1} mr={1}>-</Button>
            <Button border={"1px solid"}   ml={1} mr={1}>1</Button>
            <Button border={"1px solid"}   ml={1} mr={1}>+</Button>
        </Flex>
    )
}