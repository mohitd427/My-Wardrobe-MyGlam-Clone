import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import Minibanner from "./Minibanner";

const miniB = [
  {
    img: "https://files.myglamm.com/site-images/original/MM700x488_4.jpg",
    title: "Precision Eyebrow Definer",
  },
  {
    img: "https://files.myglamm.com/site-images/original/mg700x488.jpg",
    title: "LIT Lip & Cheek Rouge",
  },
  {
    img: "https://files.myglamm.com/site-images/original/700x488lgl_1.jpg",
    title: "LIT Matte About It Lip Color",
  },
];

export default function MinibannerContainer2() {
  return (
    <Box
      w={{ base: "100%", sm: "100%", md: "100%", lg: "80%" }}
      m="auto"
      mt={{ base: "20px", sm: "20px", md: "25px", lg: "30px" }}
    >
      <Box
        w={{ base: "200px", sm: "200px", md: "250px", lg: "275px" }}
        m={"auto"}
        textAlign="center"
        backgroundImage={"linear-gradient(white, white, #ff9797)"}
        mb="25px"
      >
        <Text as={"b"} fontSize={{base:"sm",sm:"sm",md:"md",lg:"xl"}}>
          LATEST GLAMM LAUNCHES
        </Text>
      </Box>
      <Box w="100%">
        <SimpleGrid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          justifyContent="space-between"
          gap={{ base: "20px", sm: "20px", md: "25px", lg: "30px" }}
        >
          {miniB.map((el, i) => {
            return <Minibanner img={el.img} title={el.title} key={i} />;
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
}