import { Box,Image } from '@chakra-ui/react'
import React from 'react'

export default function SingleImage({img}) {
  return (
    <Box w={{base:"100%",sm:"100%", md:"100%", lg:"80%"}} m="auto" mt="20px" mb="20px">
      <Image src={img} w="100%"/>
    </Box>
  )
}