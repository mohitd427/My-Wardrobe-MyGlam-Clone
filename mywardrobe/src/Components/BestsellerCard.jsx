import { Box, HStack, Image, Text, Divider, Center } from "@chakra-ui/react";
import React from "react";

export default function BestsellerCard({
  name,
  img,
  desc,
  rate,
  rating,
  price,
  oldPrice,
}) {
  return (
    <Box
      display={"flex"}
      flexDirection="column"
      gap={"10px"}
      textAlign="center"
      backgroundColor={"white"}
      pb="10px"
      mb="10px"
      borderRadius={"10px"}
      boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
    >
      <Image src={img} alt="error" w="100%" borderTopRadius={"10px"}/>
      <Box px={"20px"}>
        <Text
          overflow={"hidden"}
          textOverflow="ellipsis"
          whiteSpace={"nowrap"}
          fontWeight="bold"
        >
          {name}
        </Text>
        <Text
          overflow={"hidden"}
          textOverflow="ellipsis"
          whiteSpace={"nowrap"}
          fontSize="sm"
          color={"#a8a2b4"}
        >
          {desc}
        </Text>
      </Box>
      <HStack justifyContent="center">
        <Text fontSize={"lg"} as="b">
          {rate}
        </Text>
        <i className="fa-sharp fa-solid fa-star"></i>
        <Center height="50px">
          <Divider
            orientation="vertical"
            colorScheme={"#a8a2b4"}
            borderColor="black"
            h={"25px"}
          />
        </Center>
        <Text fontSize={"md"}>{rating} Rating</Text>
      </HStack>
      <HStack justifyContent="center">
        <Text as={"b"} fontSize="md">
          ₹{price}
        </Text>
        <Text as={"s"} fontSize="md" color={"#a8a2b4"}>
          {oldPrice ? `${"₹" + price}` : null}
        </Text>
      </HStack>
    </Box>
  );
}