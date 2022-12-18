import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";

export default function CatagoriesCard({ img, title }) {
  return (
    <Box display={"flex"} flexDirection="column" gap={"10px"} textAlign="center">
      <Image
        src={img}
        w="100%"
        border={"6px solid white"}
        borderRadius="50%"
        boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
      />
      <Text as="b" fontSize={"sm"}>
        {title}
      </Text>
    </Box>
  );
}


