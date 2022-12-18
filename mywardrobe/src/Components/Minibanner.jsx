import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

export default function Minibanner({ img, title }) {
  return (
    <Box position={"relative"} boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px">
      <Image src={img} w="100%" />
      <Box
        w="100%"
        h={{base:"35px",sm:"35px",md:"45px",lg:"55px"}}
        position={"absolute"}
        bottom="0px"
        bg={"hsla(0,0%,100%,.75)"}
        display="flex"
        justifyContent={"center"}
        alignItems="center"
      >
        <Text as="b" fontSize={{base:"sm",sm:"sm",md:"md",lg:"xl"}}>{title}</Text>
      </Box>
    </Box>
  );
}