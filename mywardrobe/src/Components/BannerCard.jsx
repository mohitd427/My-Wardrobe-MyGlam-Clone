import { Box, Image } from "@chakra-ui/react";
import React from "react";

export default function BannerCard({img}) {
  return (
    <Box>
      <Image
        src={img}
        alt="error"
        w="100%"
      />
    </Box>
  );
}