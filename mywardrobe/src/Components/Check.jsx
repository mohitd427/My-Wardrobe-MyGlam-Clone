import React from "react";
import { Box, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

import Slider from "react-slick";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Check({ cards }) {
  const [slider, setSlider] = React.useState();
  const top = useBreakpointValue({ base: "90%", md: "45%" });
  const side = useBreakpointValue({ base: "10%", md: "20px" });

  return (
    <Box
      position={"relative"}
      height={"450px"}
      marginBottom="-50px"
      width={{ base: "100%", sm: "full", md: "100%", lg: "full" }}
      overflow={"hidden"}
      mb={"0px"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        color={"black"}
        bgColor={"white"}
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt />
        {/* <i className="fa-solid fa-caret-left"></i> */}
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        colorScheme="black"
        color={"black"}
        bgColor={"white"}
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt />
        {/* <i className="fa-solid fa-caret-right"></i> */}
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            cursor={"pointer"}
            key={index}
            height={"sm"}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize={{
              base: "cover",
              sm: "cover",
              md: "cover",
              lg: "cover",
            }}
            backgroundImage={`url(${url})`}
          />
        ))}
      </Slider>
    </Box>
  );
}
