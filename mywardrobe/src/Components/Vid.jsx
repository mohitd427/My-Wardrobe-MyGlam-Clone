import { AspectRatio, Box, Hide, Show } from "@chakra-ui/react";
import React from "react";

export default function Vid() {
  return (
    
    <Box w="100%" h="600px" border={"1px solid red"} mb="20px" display={{base:"none", sm:"none", md:"block", lg:"block"}}>
      <iframe
        width="100%"
        height="600px"
        src="https://www.youtube.com/embed/GdcxfyKNiDg"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </Box>
    
  );
}
// https://www.youtube.com/embed/GdcxfyKNiDg