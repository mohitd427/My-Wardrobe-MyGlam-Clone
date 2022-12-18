import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import BannerCard from "./BannerCard";

export default function Banner({ imgs, col }) {
  return (
    <Box
      w={{ base: "100%", sm: "100%", md: "100%", lg: "80%" }}
      m="auto"
      mb={"20px"}
    >
      <SimpleGrid
        columns={{ base: 1, sm: 1, md: col, lg: col }}
        justifyContent="space-between"
        gap={{ base: "20px", sm: "20px", md: "25px", lg: "30px" }}
      >
        {imgs.map((el, i) => {
          return <BannerCard img={el} key={i} />;
        })}
      </SimpleGrid>
    </Box>
  );
}