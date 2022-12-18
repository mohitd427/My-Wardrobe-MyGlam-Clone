import { Box, Text } from "@chakra-ui/react";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import BestsellerCard from "./BestsellerCard";

const data = [
  {
    image: "https://files.myglamm.com/site-images/400x400/OTTP-(1).jpg",
    name: "MyGlamm LIT Liquid Matte Lipstick - OTP",
    desc: "Moringa Oil Enriched Matte Lipstick",
    rate: "4.9",
    rating: "16099",
    price: "395",
    oldPrice: "",
  },
  {
    image: "https://files.myglamm.com/site-images/400x400/PPY1_1.jpg",
    name: "Manish Malhotra Soft Matte Lipstick - Poppy Pink",
    desc: "Hydrating Long-wear Lipstick",
    rate: "4.9",
    rating: "748",
    price: "523",
    oldPrice: "950",
  },
  {
    image: "https://files.myglamm.com/site-images/400x400/Facewash_3.jpg",
    name: "MyGlamm WIPEOUT Germ Killing Face Wash",
    desc: "Tea Tree Oil & Vitamin E-infused Face Wash",
    rate: "4.9",
    rating: "743",
    price: "19",
    oldPrice: "72",
  },
  {
    image: "https://files.myglamm.com/site-images/400x400/MVS1_1.jpg",
    name: "Manish Malhotra Hi-Shine Lipstick - Mauve Struck",
    desc: "Lightweight, Long-wear Lipsticks",
    rate: "4.9",
    rating: "1590",
    price: "665",
    oldPrice: "950",
  },
  {
    image: "https://files.myglamm.com/site-images/400x400/MHML-(1).jpg",
    name: "MyGlamm LIT Creamy Matte Lipstick - Manhattan",
    desc: "Precision Perfect Matte Slimstick",
    rate: "4.9",
    rating: "1032",
    price: "417",
    oldPrice: "595",
  },
  {
    image: "https://files.myglamm.com/site-images/400x400/Body-wash_4.jpg",
    name: "MyGlamm WIPEOUT Germ Killing Body Wash",
    desc: "Tea Tree Oil-infused Skin-regenerating Body Wash",
    rate: "5",
    rating: "136",
    price: "120",
    oldPrice: "199",
  },
  {
    image:
      "https://files.myglamm.com/site-images/400x400/Artboard-1-(1)-(1).jpg",
    name: "MyGlamm SUPERFOODS Kajal - Indigo - 0.35g",
    desc: "Long-Wear Smudge-Proof Kajal Infused With Natural Superfood Extracts",
    rate: "5",
    rating: "1953",
    price: "280",
    oldPrice: "395",
  },
  {
    image: "https://files.myglamm.com/site-images/400x400/Rare-(1).jpg",
    name: "MyGlamm LIT Velvet Matte Liquid Lipstick - Rare",
    desc: "Hydrating, Velvet Matte Liquid Lipcolour",
    rate: "4.9",
    rating: "2249",
    price: "297",
    oldPrice: "395",
  },
  {
    image: "https://files.myglamm.com/site-images/400x400/ENV1.jpg",
    name: "Manish Malhotra Liquid Matte Lipstick - Envy Me",
    desc: "Long-stay Velvet Matte Lip Colour",
    rate: "4.9",
    rating: "597",
    price: "796",
    oldPrice: "995",
  },
];

export  function Bestseller() {
  return (
    <Box
      w={{ base: "100%", sm: "100%", md: "100%", lg: "80%" }}
      m="auto"
      mt={{ base: "20px", sm: "20px", md: "25px", lg: "30px" }}
      mb={{ base: "20px", sm: "20px", md: "25px", lg: "30px" }}
      display={{ base: "none", sm: "none", md: "block", lg: "block" }}
    >
      <Box
        w={{ base: "140px", sm: "140px", md: "140px", lg: "140px" }}
        m={"auto"}
        textAlign="center"
        backgroundImage={"linear-gradient(white, white, #ff9797)"}
        mb="25px"
      >
        <Text as={"b"} fontSize={{ base: "sm", sm: "sm", md: "md", lg: "xl" }}>
          BESTSELLER
        </Text>
      </Box>
      <Box w="100%">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          slidesPerGroup={1}
          loop={false}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[ Navigation]}
        >
          {data.map((el, i) => {
            return (
              <SwiperSlide key={i}>
                <BestsellerCard
                  img={el.image}
                  name={el.name}
                  desc={el.desc}
                  price={el.price}
                  rate={el.rate}
                  rating={el.rating}
                  oldPrice={el.oldPrice}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
    </Box>
  );
}


export function BestsellerMob(){
    return(
        <Box
      w={{ base: "100%", sm: "100%", md: "100%", lg: "80%" }}
      m="auto"
      mt={{ base: "20px", sm: "20px", md: "25px", lg: "30px" }}
      mb={{ base: "20px", sm: "20px", md: "25px", lg: "30px" }}
      display={{ base: "block", sm: "block", md: "none", lg: "none" }}
    >
      <Box
        w={{ base: "140px", sm: "140px", md: "140px", lg: "140px" }}
        m={"auto"}
        textAlign="center"
        backgroundImage={"linear-gradient(white, white, #ff9797)"}
        mb="25px"
      >
        <Text as={"b"} fontSize={{ base: "sm", sm: "sm", md: "md", lg: "xl" }}>
          BESTSELLER
        </Text>
      </Box>
      <Box w="100%">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          slidesPerGroup={1}
          loop={false}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[ Navigation]}
        >
          {data.map((el, i) => {
            return (
              <SwiperSlide key={i}>
                <BestsellerCard
                  img={el.image}
                  name={el.name}
                  desc={el.desc}
                  price={el.price}
                  rate={el.rate}
                  rating={el.rating}
                  oldPrice={el.oldPrice}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
    </Box>
    )
}