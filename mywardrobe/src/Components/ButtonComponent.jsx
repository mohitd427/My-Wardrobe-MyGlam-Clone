import { Button, Flex } from "@chakra-ui/react";

export function ButtonComponent()
{
    return(
        <Flex  >
            <Button ml={1} mr={1}>-</Button>
            <Button ml={1} mr={1}>1</Button>
            <Button ml={1} mr={1}>+</Button>
        </Flex>
    )
}