import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import CatagoriesCard from "./CatagoriesCard";

const cata = [
  {
    img: "https://files.myglamm.com/site-images/original/SKin-1-2.png",
    title: "Skin",
  },
  {
    img: "https://files.myglamm.com/site-images/original/Lips-3.png",
    title: "Lips",
  },
  {
    img: "https://files.myglamm.com/site-images/original/Superfoods-Model-120-X-120-px_2.jpg",
    title: "Haire",
  },
  {
    img: "https://files.myglamm.com/site-images/original/Eyes-4.png",
    title: "Eyes",
  },
  {
    img: "https://files.myglamm.com/site-images/original/Face-5.png",
    title: "Face",
  },
  {
    img: "https://files.myglamm.com/site-images/original/Nails-1.png",
    title: "Nails",
  },
  {
    img: "https://files.myglamm.com/site-images/original/App-PersonalCare_2.png",
    title: "Sanitizing Care",
  },
  {
    img: "https://files.myglamm.com/site-images/original/Bath.png",
    title: "Bath & Body",
  },
];

export default function Catagories() {
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
        <Text as={"b"} fontSize="xl">
        SHOP FROM CATEGORIES
        </Text>
      </Box>
      <Box w="100%">
        <SimpleGrid
          templateColumns={{
            base: "repeat(2, 1fr)",
            sm: "repeat(4, 1fr)",
            md: "repeat(8, 1fr)",
            lg: "repeat(8, 1fr)",
          }}
          justifyContent="space-between"
          gap={{ base: "20px", sm: "20px", md: "25px", lg: "30px" }}
        >
          {cata.map((el, i) => {
            return <CatagoriesCard img={el.img} title={el.title} key={i} />;
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
}