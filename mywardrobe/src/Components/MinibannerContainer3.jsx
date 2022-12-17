import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import Minibanner from "./Minibanner";

const miniB = [
  {
    img: "https://files.myglamm.com/site-images/original/499-desk.jpg",
    title: "Under 499 Store",
  },
  {
    img: "https://files.myglamm.com/site-images/original/999-desk.jpg",
    title: "Under 999 Store",
  }
];

export default function MinibannerContainer3() {
  return (
    <Box
      w={{ base: "100%", sm: "100%", md: "100%", lg: "80%" }}
      m="auto"
      mt={{ base: "20px", sm: "20px", md: "25px", lg: "30px" }}
    >
      <Box
        w={{ base: "200px", sm: "200px", md: "250px", lg: "270px" }}
        m={"auto"}
        textAlign="center"
        backgroundImage={"linear-gradient(white, white, #ff9797)"}
        mb="25px"
      >
        <Text as={"b"} fontSize={{base:"sm",sm:"sm",md:"md",lg:"xl"}}>
        ESSENTIAL BUDGET BUYS
        </Text>
      </Box>
      <Box w="100%">
        <SimpleGrid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
          justifyContent="space-between"
          gap={{ base: "20px", sm: "200px", md: "300x", lg: "350px" }}
        >
          {miniB.map((el, i) => {
            return <Minibanner img={el.img} title={el.title} key={i} />;
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
}